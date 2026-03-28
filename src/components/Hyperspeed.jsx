import { useEffect, useRef } from 'react'
import * as THREE from 'three'

function rand(min, max) { return Math.random() * (max - min) + min }
function pickRand(arr) { return arr[Math.floor(Math.random() * arr.length)] }

export default function Hyperspeed({ effectOptions = {} }) {
  const mountRef = useRef(null)

  useEffect(() => {
    const defaults = {
      length: 400,
      roadWidth: 10,
      islandWidth: 2,
      lanesPerRoad: 3,
      fov: 90,
      fovSpeedUp: 150,
      speedUp: 2,
      carLightsFade: 0.4,
      totalSideLightSticks: 20,
      lightPairsPerRoadWay: 40,
      shoulderLinesWidthPercentage: 0.05,
      brokenLinesWidthPercentage: 0.1,
      brokenLinesLengthPercentage: 0.5,
      lightStickWidth: [0.12, 0.5],
      lightStickHeight: [1.3, 1.7],
      movingAwaySpeed: [60, 80],
      movingCloserSpeed: [-120, -160],
      carLightsLength: [12, 80],
      carLightsRadius: [0.05, 0.14],
      carWidthPercentage: [0.3, 0.5],
      carShiftX: [-0.8, 0.8],
      carFloorSeparation: [0, 5],
      colors: {
        roadColor: 0x080808,
        islandColor: 0x0a0a0a,
        background: 0x000000,
        shoulderLines: 0x131218,
        brokenLines: 0x131218,
        leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
        rightCars: [0x03b4c3, 0x0e5de5, 0x324185],
        sticks: 0x03b4c3,
      },
    }

    const o = {
      ...defaults,
      ...effectOptions,
      colors: { ...defaults.colors, ...(effectOptions.colors || {}) },
    }

    const container = mountRef.current
    if (!container) return

    // ── RENDERER ──────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(container.clientWidth, container.clientHeight)
    container.appendChild(renderer.domElement)

    // ── SCENE ─────────────────────────────────────────────────────
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(o.colors.background)
    // Start fog far out so car lights remain visible across the full road
    scene.fog = new THREE.Fog(o.colors.background, o.length * 0.65, o.length * 1.1)

    // ── CAMERA ─────────────────────────────────────────────────────
    // Slightly elevated, wide FOV for dramatic road-rush feel
    const camera = new THREE.PerspectiveCamera(
      110,
      container.clientWidth / container.clientHeight,
      0.1,
      o.length * 1.5
    )
    camera.position.set(0, 3.5, 0)
    camera.lookAt(0, 2, -o.length * 0.5)

    // ── ROAD ──────────────────────────────────────────────────────
    const islandHalf = o.islandWidth / 2
    const leftEdge  = -(islandHalf + o.roadWidth)
    const rightEdge =  islandHalf + o.roadWidth
    const laneW     = o.roadWidth / o.lanesPerRoad

    const makePlane = (xCenter, width, color) => {
      const mesh = new THREE.Mesh(
        new THREE.PlaneGeometry(width, o.length),
        new THREE.MeshBasicMaterial({ color: new THREE.Color(color) })
      )
      mesh.rotation.x = -Math.PI / 2
      mesh.position.set(xCenter, -0.01, -o.length / 2)
      scene.add(mesh)
    }
    makePlane(-(islandHalf + o.roadWidth / 2), o.roadWidth, o.colors.roadColor)
    makePlane( islandHalf + o.roadWidth / 2,  o.roadWidth, o.colors.roadColor)
    makePlane(0, o.islandWidth, o.colors.islandColor)

    // ── STATIC LINES ──────────────────────────────────────────────
    const addLine = (x1, z1, x2, z2, color, opacity = 1) => {
      const geo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(x1, 0.02, z1),
        new THREE.Vector3(x2, 0.02, z2),
      ])
      scene.add(new THREE.Line(geo, new THREE.LineBasicMaterial({
        color: new THREE.Color(color), transparent: opacity < 1, opacity,
      })))
    }
    addLine(leftEdge,  0, leftEdge,  -o.length, o.colors.shoulderLines)
    addLine(rightEdge, 0, rightEdge, -o.length, o.colors.shoulderLines)
    addLine(-islandHalf, 0, -islandHalf, -o.length, o.colors.shoulderLines)
    addLine( islandHalf, 0,  islandHalf, -o.length, o.colors.shoulderLines)

    const dashLen = (o.length / 30) * o.brokenLinesLengthPercentage
    const gapLen  = (o.length / 30) * (1 - o.brokenLinesLengthPercentage)
    for (let side = 0; side < 2; side++) {
      const roadStart = side === 0 ? leftEdge : islandHalf
      for (let lane = 1; lane < o.lanesPerRoad; lane++) {
        const x = roadStart + lane * laneW
        let z = 0
        while (z > -o.length) {
          addLine(x, z, x, z - dashLen, o.colors.brokenLines, 0.35)
          z -= dashLen + gapLen
        }
      }
    }

    // ── CAR LIGHTS ─────────────────────────────────────────────────
    // BoxGeometry gives width (X) + height (Y) + depth (Z=trail length).
    // Unlike flat planes, boxes are visible from any camera angle — no more
    // "edge-on invisible" problem from a nearly-horizontal camera.
    const allDisposables = []

    class CarLights {
      constructor(isLeft) {
        this.isLeft  = isLeft
        this.carData = []
        const N         = o.lightPairsPerRoadWay
        const carColors = isLeft ? o.colors.leftCars : o.colors.rightCars

        for (let i = 0; i < N; i++) {
          const color     = new THREE.Color(pickRand(carColors))
          const lane      = Math.floor(rand(0, o.lanesPerRoad))
          const roadStart = isLeft ? leftEdge : islandHalf
          const cx        = roadStart + (lane + 0.5) * laneW
          const halfW     = laneW * rand(o.carWidthPercentage[0], o.carWidthPercentage[1]) * 0.45
          const y         = rand(o.carFloorSeparation[0], o.carFloorSeparation[1]) * 0.06
          const z         = -rand(0, o.length)
          const len       = rand(o.carLightsLength[0] * 3, o.carLightsLength[1] * 3.5)
          const speed     = isLeft
            ? rand(o.movingAwaySpeed[0], o.movingAwaySpeed[1])
            : rand(Math.abs(o.movingCloserSpeed[0]), Math.abs(o.movingCloserSpeed[1]))

          // Core box: narrow, with real vertical height so it's visible horizontally
          const coreW  = Math.max(0.25, halfW * 0.5)
          const coreH  = 1.0   // vertical height → visible from side
          const glowW  = halfW * 3.5
          const glowH  = 3.0   // wider bloom vertically

          // Shared geometry per car: left and right lights use same shape
          const coreGeo = new THREE.BoxGeometry(coreW, coreH, len)
          const glowGeo = new THREE.BoxGeometry(glowW, glowH, len)
          allDisposables.push(coreGeo, glowGeo)

          const coreMat = new THREE.MeshBasicMaterial({
            color, transparent: true, opacity: 0.95,
            blending: THREE.AdditiveBlending, depthWrite: false,
          })
          const glowMat = new THREE.MeshBasicMaterial({
            color, transparent: true, opacity: 0.18,
            blending: THREE.AdditiveBlending, depthWrite: false,
          })
          allDisposables.push(coreMat, glowMat)

          const lx = cx - halfW
          const rx = cx + halfW
          const initCenter = this.isLeft ? z + len / 2 : z - len / 2
          const posY = y + coreH / 2   // sit on road surface

          const lCore = new THREE.Mesh(coreGeo, coreMat)
          const rCore = new THREE.Mesh(coreGeo, coreMat)
          const lGlow = new THREE.Mesh(glowGeo, glowMat)
          const rGlow = new THREE.Mesh(glowGeo, glowMat)

          lCore.position.set(lx, posY,       initCenter)
          rCore.position.set(rx, posY,       initCenter)
          lGlow.position.set(lx, posY,       initCenter)
          rGlow.position.set(rx, posY,       initCenter)

          scene.add(lCore, rCore, lGlow, rGlow)
          this.carData.push({ z, len, speed, lCore, rCore, lGlow, rGlow, posY })
        }
      }

      update(dt) {
        for (const car of this.carData) {
          if (this.isLeft) {
            car.z -= car.speed * dt
            if (car.z < -o.length) car.z = 4
          } else {
            car.z += car.speed * dt
            if (car.z > 4) car.z = -o.length + car.len
          }

          const centerZ = this.isLeft ? car.z + car.len / 2 : car.z - car.len / 2

          car.lCore.position.z = centerZ
          car.rCore.position.z = centerZ
          car.lGlow.position.z = centerZ
          car.rGlow.position.z = centerZ
        }
      }
    }

    const leftLights  = new CarLights(true)
    const rightLights = new CarLights(false)

    // ── LIGHT STICKS ──────────────────────────────────────────────
    const stickColor = new THREE.Color(o.colors.sticks)
    const stickPts   = []
    const spacing    = o.length / o.totalSideLightSticks
    for (let i = 0; i < o.totalSideLightSticks; i++) {
      const z = -(i * spacing + rand(0, spacing * 0.4))
      const h = rand(o.lightStickHeight[0], o.lightStickHeight[1])
      const w = rand(o.lightStickWidth[0], o.lightStickWidth[1])
      stickPts.push(
        new THREE.Vector3(leftEdge  - w, 0, z),
        new THREE.Vector3(leftEdge  - w, h, z),
        new THREE.Vector3(rightEdge + w, 0, z),
        new THREE.Vector3(rightEdge + w, h, z),
      )
    }
    const stickGeo = new THREE.BufferGeometry().setFromPoints(stickPts)
    const stickIdx = []
    for (let i = 0; i < o.totalSideLightSticks; i++) {
      stickIdx.push(i * 4, i * 4 + 1, i * 4 + 2, i * 4 + 3)
    }
    stickGeo.setIndex(stickIdx)
    scene.add(new THREE.LineSegments(stickGeo, new THREE.LineBasicMaterial({
      color: stickColor, transparent: true, opacity: 0.9,
      blending: THREE.AdditiveBlending, depthWrite: false,
    })))

    // ── ANIMATION LOOP ────────────────────────────────────────────
    let animId
    let elapsed = 0
    let curFov  = 110
    const clock = new THREE.Clock()

    const animate = () => {
      animId = requestAnimationFrame(animate)
      const dt = Math.min(clock.getDelta(), 0.05)
      elapsed += dt

      curFov += (o.fovSpeedUp - curFov) * dt * 0.1
      camera.fov = Math.min(curFov, o.fovSpeedUp)
      camera.updateProjectionMatrix()

      // Subtle road sway — dual-frequency for organic feel
      const sway = Math.sin(elapsed * 0.3) * 0.5 + Math.sin(elapsed * 0.75) * 0.12
      camera.position.x = sway
      camera.position.y = 3.5 + Math.sin(elapsed * 0.5) * 0.2
      camera.lookAt(sway * 0.06, 2, -o.length * 0.5)

      leftLights.update(dt * o.speedUp)
      rightLights.update(dt * o.speedUp)

      renderer.render(scene, camera)
    }
    animate()

    // ── RESIZE ────────────────────────────────────────────────────
    const onResize = () => {
      if (!container) return
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
      allDisposables.forEach(obj => obj.dispose && obj.dispose())
      renderer.dispose()
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div
      ref={mountRef}
      style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
    />
  )
}

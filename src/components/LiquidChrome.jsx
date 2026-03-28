import { useRef, useEffect } from 'react'
import { Renderer, Program, Mesh, Triangle } from 'ogl'

export default function LiquidChrome({
  baseColor = [0.1, 0.08, 0.0],
  speed = 0.2,
  amplitude = 0.3,
  frequencyX = 3,
  frequencyY = 3,
  interactive = true,
}) {
  const containerRef = useRef(null)
  const mouseRef = useRef({ x: 0.5, y: 0.5 })
  const targetMouseRef = useRef({ x: 0.5, y: 0.5 })

  useEffect(() => {
    if (!containerRef.current) return
    const container = containerRef.current

    const renderer = new Renderer({ antialias: true })
    const gl = renderer.gl
    gl.clearColor(0, 0, 0, 0)

    const vertexShader = `
      attribute vec2 position;
      attribute vec2 uv;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `

    const fragmentShader = `
      precision highp float;
      uniform float uTime;
      uniform vec3 uResolution;
      uniform vec3 uBaseColor;
      uniform float uAmplitude;
      uniform float uFrequencyX;
      uniform float uFrequencyY;
      uniform vec2 uMouse;
      varying vec2 vUv;

      vec4 renderImage(vec2 uvCoord) {
        vec2 fragCoord = uvCoord * uResolution.xy;
        vec2 uv = (2.0 * fragCoord - uResolution.xy) / min(uResolution.x, uResolution.y);

        for (float i = 1.0; i < 10.0; i++){
          uv.x += uAmplitude / i * cos(i * uFrequencyX * uv.y + uTime + uMouse.x * 3.14159);
          uv.y += uAmplitude / i * cos(i * uFrequencyY * uv.x + uTime + uMouse.y * 3.14159);
        }

        vec2 diff = (uvCoord - uMouse);
        float dist = length(diff);
        float falloff = exp(-dist * 20.0);
        float ripple = sin(10.0 * dist - uTime * 2.0) * 0.03;
        uv += (diff / (dist + 0.0001)) * ripple * falloff;

        vec3 color = uBaseColor / abs(sin(uTime - uv.y - uv.x));
        return vec4(color, 1.0);
      }

      void main() {
        gl_FragColor = renderImage(vUv);
      }
    `

    const geometry = new Triangle(gl)
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime:       { value: 0 },
        uResolution: { value: [gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height] },
        uBaseColor:  { value: baseColor },
        uAmplitude:  { value: amplitude },
        uFrequencyX: { value: frequencyX },
        uFrequencyY: { value: frequencyY },
        uMouse:      { value: [0.5, 0.5] },
      },
    })

    const mesh = new Mesh(gl, { geometry, program })

    function resize() {
      renderer.setSize(container.offsetWidth, container.offsetHeight)
      program.uniforms.uResolution.value = [gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height]
    }
    window.addEventListener('resize', resize)
    resize()

    function onMouseMove(e) {
      targetMouseRef.current.x = e.clientX / window.innerWidth
      targetMouseRef.current.y = 1 - e.clientY / window.innerHeight
    }

    if (interactive) {
      window.addEventListener('mousemove', onMouseMove)
    }

    gl.canvas.style.width = '100%'
    gl.canvas.style.height = '100%'
    gl.canvas.style.display = 'block'
    container.appendChild(gl.canvas)

    let animationId
    function update(t) {
      animationId = requestAnimationFrame(update)

      // Smooth mouse interpolation every frame
      mouseRef.current.x += 0.05 * (targetMouseRef.current.x - mouseRef.current.x)
      mouseRef.current.y += 0.05 * (targetMouseRef.current.y - mouseRef.current.y)

      program.uniforms.uTime.value = t * 0.001 * speed
      program.uniforms.uMouse.value = [mouseRef.current.x, mouseRef.current.y]

      renderer.render({ scene: mesh })
    }
    animationId = requestAnimationFrame(update)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      if (interactive) window.removeEventListener('mousemove', onMouseMove)
      if (gl.canvas.parentElement) gl.canvas.parentElement.removeChild(gl.canvas)
      gl.getExtension('WEBGL_lose_context')?.loseContext()
    }
  }, [baseColor, speed, amplitude, frequencyX, frequencyY, interactive])

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
  )
}

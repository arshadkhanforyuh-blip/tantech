import { useEffect, useRef, useState } from 'react'

const gold = '#FFD700'

/* ─────────────────────────────────────────────
   1. SOFTWARE & WEB — animated code terminal
───────────────────────────────────────────── */
const CODE_LINES = [
  { text: 'const app = createServer(config)', gold: false },
  { text: '  .use(authMiddleware())', gold: false },
  { text: '  .route("/api/v2", router)', gold: true },
  { text: '', gold: false },
  { text: 'async function deploy(env) {', gold: false },
  { text: '  await build({ target: env })', gold: false },
  { text: '  await scale({ replicas: 12 })', gold: true },
  { text: '  return { status: 200 }', gold: false },
  { text: '}', gold: false },
]

export function SoftwareVisual() {
  const [count, setCount] = useState(0)
  const [blink, setBlink] = useState(true)
  const dirRef = useRef(1)

  useEffect(() => {
    const t = setInterval(() => {
      setCount(c => {
        const next = c + dirRef.current
        if (next >= CODE_LINES.length) { dirRef.current = -1; return c }
        if (next < 0) {
          dirRef.current = 1
          setTimeout(() => { dirRef.current = 1 }, 800)
          return 0
        }
        return next
      })
    }, 300)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const t = setInterval(() => setBlink(b => !b), 530)
    return () => clearInterval(t)
  }, [])

  return (
    <div style={{ width: '100%', maxWidth: 420, fontFamily: 'monospace' }}>
      <div style={{ background: 'rgba(18,18,18,0.95)', border: '1px solid rgba(255,215,0,0.25)', borderBottom: 'none', padding: '10px 16px', display: 'flex', gap: 8, alignItems: 'center' }}>
        {['#ff5f57', '#febc2e', '#28c840'].map((c, i) => (
          <div key={i} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />
        ))}
        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginLeft: 8, letterSpacing: 1 }}>tantech-server.js</span>
      </div>
      <div style={{ background: 'rgba(10,10,10,0.95)', border: '1px solid rgba(255,215,0,0.25)', padding: '20px 20px', minHeight: 230 }}>
        {CODE_LINES.slice(0, count + 1).map((line, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: 5, fontSize: 13, lineHeight: 1.5 }}>
            <span style={{ color: 'rgba(255,215,0,0.2)', marginRight: 16, minWidth: 18, textAlign: 'right', userSelect: 'none', fontSize: 11 }}>{i + 1}</span>
            <span style={{ color: line.gold ? gold : 'rgba(245,245,240,0.7)' }}>{line.text}</span>
            {i === count && (
              <span style={{ display: 'inline-block', width: 2, height: 14, background: gold, marginLeft: 2, opacity: blink ? 1 : 0, transition: 'opacity 0.1s' }} />
            )}
          </div>
        ))}
      </div>
      <div style={{ background: gold, padding: '6px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 11, color: '#0A0A0A', fontWeight: 700, letterSpacing: 1 }}>● LIVE</span>
        <span style={{ fontSize: 11, color: '#0A0A0A', fontWeight: 600 }}>Node.js 20 · TypeScript</span>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   2. AI & WORKFLOW — neural network
───────────────────────────────────────────── */
const NN_INPUT  = [{ x: 60, y: 70 }, { x: 60, y: 145 }, { x: 60, y: 220 }, { x: 60, y: 295 }]
const NN_HIDDEN = [{ x: 200, y: 100 }, { x: 200, y: 183 }, { x: 200, y: 265 }]
const NN_OUTPUT = [{ x: 340, y: 130 }, { x: 340, y: 235 }]

export function AIVisual() {
  const [pulse, setPulse] = useState({ inp: 0, hid: 0, out: 0, step: 0 })

  useEffect(() => {
    const t = setInterval(() => {
      setPulse(p => {
        const step = (p.step + 1) % 4
        if (step === 0) return { inp: Math.floor(Math.random() * 4), hid: p.hid, out: p.out, step }
        if (step === 1) return { ...p, hid: Math.floor(Math.random() * 3), step }
        if (step === 2) return { ...p, out: Math.floor(Math.random() * 2), step }
        return { ...p, step }
      })
    }, 550)
    return () => clearInterval(t)
  }, [])

  const edges = []
  NN_INPUT.forEach((n, i) => NN_HIDDEN.forEach((h, j) => edges.push({ x1: n.x, y1: n.y, x2: h.x, y2: h.y, key: `ih${i}${j}` })))
  NN_HIDDEN.forEach((h, i) => NN_OUTPUT.forEach((o, j) => edges.push({ x1: h.x, y1: h.y, x2: o.x, y2: o.y, key: `ho${i}${j}` })))

  const activeIH = pulse.step >= 1 ? { x1: NN_INPUT[pulse.inp]?.x, y1: NN_INPUT[pulse.inp]?.y, x2: NN_HIDDEN[pulse.hid]?.x, y2: NN_HIDDEN[pulse.hid]?.y } : null
  const activeHO = pulse.step >= 2 ? { x1: NN_HIDDEN[pulse.hid]?.x, y1: NN_HIDDEN[pulse.hid]?.y, x2: NN_OUTPUT[pulse.out]?.x, y2: NN_OUTPUT[pulse.out]?.y } : null

  return (
    <div style={{ width: '100%', maxWidth: 420 }}>
      <div style={{ background: 'rgba(10,10,10,0.9)', border: '1px solid rgba(255,215,0,0.2)', padding: '20px 16px' }}>
        <div style={{ fontSize: 11, letterSpacing: 3, color: gold, fontFamily: 'Space Grotesk, sans-serif', marginBottom: 8 }}>NEURAL NETWORK — LIVE INFERENCE</div>
        <svg viewBox="0 0 400 365" style={{ width: '100%', overflow: 'visible' }}>
          {edges.map(e => <line key={e.key} x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2} stroke="rgba(255,215,0,0.1)" strokeWidth={1} />)}
          {activeIH && <line x1={activeIH.x1} y1={activeIH.y1} x2={activeIH.x2} y2={activeIH.y2} stroke={gold} strokeWidth={2}><animate attributeName="opacity" values="0.9;0.3;0.9" dur="0.55s" repeatCount="indefinite" /></line>}
          {activeHO && <line x1={activeHO.x1} y1={activeHO.y1} x2={activeHO.x2} y2={activeHO.y2} stroke={gold} strokeWidth={2}><animate attributeName="opacity" values="0.9;0.3;0.9" dur="0.55s" repeatCount="indefinite" /></line>}
          {NN_INPUT.map((n, i) => (
            <g key={i}>
              <circle cx={n.x} cy={n.y} r={16} fill="rgba(255,215,0,0.05)" stroke={pulse.inp === i && pulse.step >= 0 ? gold : 'rgba(255,215,0,0.25)'} strokeWidth={pulse.inp === i ? 2 : 1} />
              <text x={n.x} y={n.y + 4} textAnchor="middle" fontSize={9} fill={pulse.inp === i ? gold : 'rgba(255,215,0,0.4)'} fontFamily="monospace">IN</text>
            </g>
          ))}
          {NN_HIDDEN.map((n, i) => (
            <g key={i}>
              <circle cx={n.x} cy={n.y} r={20} fill="rgba(255,215,0,0.06)" stroke={pulse.hid === i && pulse.step >= 1 ? gold : 'rgba(255,215,0,0.25)'} strokeWidth={pulse.hid === i && pulse.step >= 1 ? 2 : 1} />
              <text x={n.x} y={n.y + 4} textAnchor="middle" fontSize={9} fill={pulse.hid === i && pulse.step >= 1 ? gold : 'rgba(255,215,0,0.4)'} fontFamily="monospace">H{i + 1}</text>
            </g>
          ))}
          {NN_OUTPUT.map((n, i) => (
            <g key={i}>
              <circle cx={n.x} cy={n.y} r={22} fill={pulse.out === i && pulse.step >= 2 ? 'rgba(255,215,0,0.15)' : 'rgba(255,215,0,0.05)'} stroke={pulse.out === i && pulse.step >= 2 ? gold : 'rgba(255,215,0,0.35)'} strokeWidth={pulse.out === i && pulse.step >= 2 ? 2.5 : 1} />
              <text x={n.x} y={n.y + 4} textAnchor="middle" fontSize={9} fill={pulse.out === i && pulse.step >= 2 ? gold : 'rgba(255,215,0,0.4)'} fontFamily="monospace">OUT</text>
            </g>
          ))}
          <text x={60}  y={345} textAnchor="middle" fontSize={10} fill="rgba(255,215,0,0.35)" fontFamily="Space Grotesk, sans-serif">INPUT</text>
          <text x={200} y={345} textAnchor="middle" fontSize={10} fill="rgba(255,215,0,0.35)" fontFamily="Space Grotesk, sans-serif">HIDDEN</text>
          <text x={340} y={345} textAnchor="middle" fontSize={10} fill="rgba(255,215,0,0.35)" fontFamily="Space Grotesk, sans-serif">OUTPUT</text>
        </svg>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   3. SHOPIFY — store + cart
───────────────────────────────────────────── */
const PRODUCTS = [
  { name: 'Premium Hoodie', price: '$89', tag: 'BEST SELLER', emoji: '👕' },
  { name: 'Limited Tee',    price: '$45', tag: 'NEW',         emoji: '👔' },
  { name: 'Cargo Pants',    price: '$120', tag: 'TRENDING',   emoji: '👖' },
  { name: 'Sneakers',       price: '$199', tag: 'HOT',        emoji: '👟' },
]

export function ShopifyVisual() {
  const [cart, setCart] = useState(0)
  const [flash, setFlash] = useState(-1)
  const [conv, setConv] = useState(0)
  const convRef = useRef(0)

  useEffect(() => {
    const t = setInterval(() => {
      convRef.current = Math.min(convRef.current + 1, 94)
      setConv(convRef.current)
    }, 45)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const t = setInterval(() => {
      const idx = Math.floor(Math.random() * PRODUCTS.length)
      setFlash(idx)
      setCart(c => c + 1)
      setTimeout(() => setFlash(-1), 700)
    }, 1600)
    return () => clearInterval(t)
  }, [])

  return (
    <div style={{ width: '100%', maxWidth: 400 }}>
      <div style={{ background: 'rgba(10,10,10,0.95)', border: '1px solid rgba(255,215,0,0.25)', borderBottom: 'none', padding: '12px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 18, letterSpacing: 3, color: gold }}>TANSTORE</span>
        <div style={{ position: 'relative' }}>
          <span style={{ fontSize: 20 }}>🛒</span>
          {cart > 0 && <span style={{ position: 'absolute', top: -6, right: -8, background: gold, color: '#0A0A0A', borderRadius: '50%', width: 18, height: 18, fontSize: 10, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Space Grotesk, sans-serif' }}>{cart}</span>}
        </div>
      </div>
      <div style={{ background: 'rgba(12,12,12,0.95)', border: '1px solid rgba(255,215,0,0.25)', borderTop: 'none', padding: 14, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {PRODUCTS.map((p, i) => (
          <div key={i} style={{ background: flash === i ? 'rgba(255,215,0,0.12)' : 'rgba(20,20,20,0.9)', border: `1px solid ${flash === i ? gold : 'rgba(255,215,0,0.1)'}`, padding: 12, transition: 'all 0.25s', position: 'relative', overflow: 'hidden' }}>
            <div style={{ background: gold, color: '#0A0A0A', fontSize: 9, fontWeight: 700, padding: '2px 6px', display: 'inline-block', marginBottom: 8, fontFamily: 'Space Grotesk, sans-serif', letterSpacing: 1 }}>{p.tag}</div>
            <div style={{ width: '100%', height: 48, background: 'rgba(255,215,0,0.04)', border: '1px solid rgba(255,215,0,0.08)', marginBottom: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>{p.emoji}</div>
            <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 11, color: 'rgba(245,245,240,0.6)', marginBottom: 3 }}>{p.name}</div>
            <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 15, color: gold, letterSpacing: 1 }}>{p.price}</div>
            {flash === i && <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,215,0,0.12)', fontSize: 28 }}>✓</div>}
          </div>
        ))}
      </div>
      <div style={{ background: 'rgba(8,8,8,0.95)', border: '1px solid rgba(255,215,0,0.25)', borderTop: 'none', padding: '10px 16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
          <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 11, color: 'rgba(255,215,0,0.6)' }}>CONVERSION RATE</span>
          <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 14, color: gold }}>{conv}%</span>
        </div>
        <div style={{ height: 4, background: 'rgba(255,215,0,0.08)', borderRadius: 2 }}>
          <div style={{ height: '100%', width: `${conv}%`, background: gold, borderRadius: 2, transition: 'width 0.04s linear' }} />
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   4. TAXATION & COMPLIANCE — chart + checklist
───────────────────────────────────────────── */
const TAX_BARS   = [{ q: 'Q1', v: 65 }, { q: 'Q2', v: 78 }, { q: 'Q3', v: 55 }, { q: 'Q4', v: 92 }]
const CHECKS     = ['Federal Tax Filing', 'State & Local Tax', 'IRS Compliance', 'Payroll 941/940', 'Entity Structuring']

export function TaxVisual() {
  const [grown, setGrown] = useState(false)
  const [checked, setChecked] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setGrown(true), 150)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const t = setInterval(() => {
      setChecked(c => (c >= CHECKS.length ? 0 : c + 1))
    }, 550)
    return () => clearInterval(t)
  }, [])

  return (
    <div style={{ width: '100%', maxWidth: 400 }}>
      <div style={{ background: 'rgba(10,10,10,0.9)', border: '1px solid rgba(255,215,0,0.2)', padding: 24 }}>
        <div style={{ fontSize: 11, letterSpacing: 3, color: gold, fontFamily: 'Space Grotesk, sans-serif', marginBottom: 20 }}>FISCAL YEAR OVERVIEW</div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, height: 120, marginBottom: 24 }}>
          {TAX_BARS.map((b, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 13, color: gold }}>{b.v}%</span>
              <div style={{ width: '100%', height: grown ? `${b.v}%` : '0%', background: `linear-gradient(180deg, ${gold} 0%, rgba(255,215,0,0.35) 100%)`, transition: `height ${0.8 + i * 0.15}s cubic-bezier(0.34,1.2,0.64,1)`, minHeight: 4 }} />
              <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 11, color: 'rgba(245,245,240,0.5)' }}>{b.q}</span>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(255,215,0,0.1)', paddingTop: 16 }}>
          <div style={{ fontSize: 11, letterSpacing: 2, color: 'rgba(255,215,0,0.5)', fontFamily: 'Space Grotesk, sans-serif', marginBottom: 10 }}>COMPLIANCE STATUS</div>
          {CHECKS.map((c, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <div style={{ width: 16, height: 16, border: `1.5px solid ${i < checked ? gold : 'rgba(255,215,0,0.25)'}`, background: i < checked ? gold : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s', flexShrink: 0 }}>
                {i < checked && <span style={{ color: '#0A0A0A', fontSize: 10, fontWeight: 900, lineHeight: 1 }}>✓</span>}
              </div>
              <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 13, color: i < checked ? 'rgba(245,245,240,0.9)' : 'rgba(245,245,240,0.35)', transition: 'color 0.3s' }}>{c}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   5. BENCH SALES — talent pipeline flow
───────────────────────────────────────────── */
const TALENT_POOL = [
  { role: 'Java Developer',  skill: 'Spring · AWS',      yoe: '5 YOE' },
  { role: '.NET Engineer',   skill: 'Azure · SQL',        yoe: '4 YOE' },
  { role: 'DevOps Lead',     skill: 'K8s · Terraform',   yoe: '7 YOE' },
  { role: 'Data Engineer',   skill: 'Spark · Snowflake', yoe: '3 YOE' },
]
const CLIENTS = ['FinTech Corp', 'HealthTech', 'EnterpriseAI']

export function BenchSalesVisual() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [placed, setPlaced] = useState(0)
  const [matchPct, setMatchPct] = useState(0)
  const [stage, setStage] = useState(0) // 0=select 1=match 2=place

  useEffect(() => {
    let s = 0
    const t = setInterval(() => {
      s = (s + 1) % 3
      setStage(s)
      if (s === 0) {
        setActiveIdx(i => (i + 1) % TALENT_POOL.length)
        setMatchPct(0)
      } else if (s === 1) {
        setMatchPct(Math.floor(Math.random() * 15) + 85)
      } else {
        setPlaced(p => p + 1)
      }
    }, 900)
    return () => clearInterval(t)
  }, [])

  const candidate = TALENT_POOL[activeIdx]
  const client = CLIENTS[activeIdx % CLIENTS.length]

  return (
    <div style={{ width: '100%', maxWidth: 420 }}>
      <div style={{ background: 'rgba(10,10,10,0.9)', border: '1px solid rgba(255,215,0,0.2)', padding: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 3, color: gold, fontFamily: 'Space Grotesk, sans-serif', marginBottom: 16 }}>TALENT PIPELINE — LIVE</div>

        {/* Pipeline stages */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 20 }}>
          {['SELECT', 'MATCH', 'PLACE'].map((label, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: stage >= i ? gold : 'rgba(255,215,0,0.08)', border: `2px solid ${stage >= i ? gold : 'rgba(255,215,0,0.2)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.4s', fontSize: 13 }}>
                  {stage > i ? <span style={{ color: '#0A0A0A', fontWeight: 900 }}>✓</span> : <span style={{ color: stage === i ? '#0A0A0A' : gold, fontSize: 10, fontWeight: 700 }}>{i + 1}</span>}
                </div>
                <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 9, color: stage >= i ? gold : 'rgba(255,215,0,0.3)', letterSpacing: 1, transition: 'color 0.4s' }}>{label}</span>
              </div>
              {i < 2 && <div style={{ height: 2, flex: 1, background: stage > i ? gold : 'rgba(255,215,0,0.12)', transition: 'background 0.4s', marginBottom: 22 }} />}
            </div>
          ))}
        </div>

        {/* Candidate card */}
        <div style={{ background: stage === 2 ? 'rgba(255,215,0,0.08)' : 'rgba(18,18,18,0.9)', border: `1px solid ${stage === 2 ? gold : 'rgba(255,215,0,0.15)'}`, padding: '14px 16px', marginBottom: 12, transition: 'all 0.4s', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 16, color: '#F5F5F0', letterSpacing: 2, marginBottom: 4 }}>{candidate.role}</div>
            <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 11, color: 'rgba(255,215,0,0.6)' }}>{candidate.skill}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 14, color: gold }}>{candidate.yoe}</div>
            {stage >= 1 && <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 11, color: gold, marginTop: 2 }}>{matchPct}% MATCH</div>}
          </div>
        </div>

        {/* Client */}
        <div style={{ background: 'rgba(18,18,18,0.9)', border: `1px solid ${stage === 2 ? gold : 'rgba(255,215,0,0.1)'}`, padding: '12px 16px', marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between', transition: 'border-color 0.4s' }}>
          <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 12, color: 'rgba(245,245,240,0.6)' }}>🏢 {client}</span>
          {stage === 2 && <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 13, color: gold, letterSpacing: 1 }}>PLACED ✓</span>}
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: 0, borderTop: '1px solid rgba(255,215,0,0.1)', paddingTop: 12 }}>
          {[['PLACED', placed], ['AVG MATCH', '92%'], ['TIME TO PLACE', '6 DAYS']].map(([l, v], i) => (
            <div key={i} style={{ flex: 1, textAlign: 'center', borderRight: i < 2 ? '1px solid rgba(255,215,0,0.08)' : 'none' }}>
              <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 18, color: gold }}>{v}</div>
              <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 9, color: 'rgba(255,215,0,0.4)', letterSpacing: 1 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   6. MANPOWER & STAFFING — org chart
───────────────────────────────────────────── */
const ORG = [
  { label: 'CTO',       level: 0, x: 195, y: 35,  parent: null },
  { label: 'Dev Lead',  level: 1, x: 90,  y: 115, parent: 0 },
  { label: 'Ops Lead',  level: 1, x: 300, y: 115, parent: 0 },
  { label: 'Frontend',  level: 2, x: 40,  y: 200, parent: 1 },
  { label: 'Backend',   level: 2, x: 140, y: 200, parent: 1 },
  { label: 'DevOps',    level: 2, x: 250, y: 200, parent: 2 },
  { label: 'QA',        level: 2, x: 350, y: 200, parent: 2 },
]

export function ManpowerVisual() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let dir = 1
    const t = setInterval(() => {
      setCount(c => {
        const next = c + dir
        if (next > ORG.length) { dir = -1; return c }
        if (next < 0) { dir = 1; return 0 }
        return next
      })
    }, 420)
    return () => clearInterval(t)
  }, [])

  return (
    <div style={{ width: '100%', maxWidth: 420 }}>
      <div style={{ background: 'rgba(10,10,10,0.9)', border: '1px solid rgba(255,215,0,0.2)', padding: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 3, color: gold, fontFamily: 'Space Grotesk, sans-serif', marginBottom: 8 }}>TEAM STRUCTURE BUILDING</div>
        <svg viewBox="0 0 390 255" style={{ width: '100%' }}>
          {ORG.map((node, i) => {
            if (i >= count || node.parent === null) return null
            const parent = ORG[node.parent]
            return <line key={`l${i}`} x1={parent.x} y1={parent.y + 18} x2={node.x} y2={node.y - 18} stroke="rgba(255,215,0,0.25)" strokeWidth={1} strokeDasharray="3 3" />
          })}
          {ORG.map((node, i) => {
            if (i >= count) return null
            const isTop = node.level === 0
            return (
              <g key={i}>
                <rect x={node.x - 38} y={node.y - 18} width={76} height={36} rx={3}
                  fill={isTop ? 'rgba(255,215,0,0.15)' : 'rgba(20,20,20,0.9)'}
                  stroke={isTop ? gold : 'rgba(255,215,0,0.3)'} strokeWidth={isTop ? 2 : 1} />
                <text x={node.x} y={node.y + 5} textAnchor="middle" fontSize={10}
                  fill={isTop ? gold : 'rgba(245,245,240,0.75)'} fontFamily="Space Grotesk, sans-serif" fontWeight="700">{node.label}</text>
              </g>
            )
          })}
        </svg>
        <div style={{ display: 'flex', gap: 0, borderTop: '1px solid rgba(255,215,0,0.1)', paddingTop: 10, marginTop: 4 }}>
          {[['ROLES FILLED', `${Math.min(count, ORG.length)}/${ORG.length}`], ['TIME TO HIRE', '8 DAYS'], ['RETENTION', '94%']].map(([l, v], i) => (
            <div key={i} style={{ flex: 1, textAlign: 'center', borderRight: i < 2 ? '1px solid rgba(255,215,0,0.08)' : 'none' }}>
              <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 16, color: gold }}>{v}</div>
              <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 9, color: 'rgba(255,215,0,0.4)', letterSpacing: 1 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   7. RPO & EXECUTIVE — growth chart + spotlight
───────────────────────────────────────────── */
const CHART_DATA = [22, 31, 28, 45, 52, 48, 67, 72, 68, 85, 91, 98]
const MONTHS     = ['J','F','M','A','M','J','J','A','S','O','N','D']
const EXECUTIVES = ['Chief Technology Officer', 'VP of Engineering', 'Head of Product', 'Director of Operations']

export function RPOVisual() {
  const [pts, setPts] = useState(1)
  const [execIdx, setExecIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setPts(p => (p >= CHART_DATA.length ? 1 : p + 1)), 380)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const t = setInterval(() => setExecIdx(e => (e + 1) % EXECUTIVES.length), 1800)
    return () => clearInterval(t)
  }, [])

  const W = 340, H = 110
  const polyline = CHART_DATA.slice(0, pts).map((v, i) => `${(i / (CHART_DATA.length - 1)) * W},${H - (v / 100) * H}`).join(' ')
  const lastX = ((pts - 1) / (CHART_DATA.length - 1)) * W
  const lastY = H - (CHART_DATA[pts - 1] / 100) * H

  return (
    <div style={{ width: '100%', maxWidth: 400 }}>
      <div style={{ background: 'rgba(10,10,10,0.9)', border: '1px solid rgba(255,215,0,0.2)', padding: 20 }}>
        {/* Exec spotlight */}
        <div style={{ background: 'rgba(255,215,0,0.06)', border: '1px solid rgba(255,215,0,0.18)', padding: '12px 14px', marginBottom: 18, display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'rgba(255,215,0,0.12)', border: `2px solid ${gold}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>👤</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 10, color: 'rgba(255,215,0,0.5)', letterSpacing: 2, marginBottom: 3 }}>PLACING NOW</div>
            <div key={execIdx} style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 14, letterSpacing: 1.5, color: '#F5F5F0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{EXECUTIVES[execIdx]}</div>
          </div>
          <div style={{ textAlign: 'right', flexShrink: 0 }}>
            <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 22, color: gold, lineHeight: 1 }}>98%</div>
            <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 9, color: 'rgba(255,215,0,0.5)' }}>MATCH</div>
          </div>
        </div>
        {/* Chart */}
        <div style={{ fontSize: 11, letterSpacing: 3, color: gold, fontFamily: 'Space Grotesk, sans-serif', marginBottom: 8 }}>PLACEMENT SUCCESS RATE</div>
        <svg viewBox={`0 0 ${W} ${H + 22}`} style={{ width: '100%', overflow: 'visible' }}>
          {[25, 50, 75, 100].map(v => <line key={v} x1={0} y1={H - (v / 100) * H} x2={W} y2={H - (v / 100) * H} stroke="rgba(255,215,0,0.06)" strokeWidth={1} />)}
          {pts > 1 && (
            <polygon points={`0,${H} ${polyline} ${lastX},${H}`} fill="rgba(255,215,0,0.07)" />
          )}
          {pts > 1 && <polyline points={polyline} fill="none" stroke={gold} strokeWidth={2} />}
          <circle cx={lastX} cy={lastY} r={5} fill={gold} />
          <circle cx={lastX} cy={lastY} r={5} fill="none" stroke={gold} strokeWidth={2}>
            <animate attributeName="r" values="5;13;5" dur="1s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
          </circle>
          <text x={lastX + 8} y={lastY - 5} fontSize={11} fill={gold} fontFamily="Bebas Neue, sans-serif">{CHART_DATA[pts - 1]}%</text>
          {MONTHS.slice(0, pts).map((m, i) => (
            <text key={i} x={(i / (CHART_DATA.length - 1)) * W} y={H + 16} textAnchor="middle" fontSize={9} fill="rgba(255,215,0,0.3)" fontFamily="Space Grotesk, sans-serif">{m}</text>
          ))}
        </svg>
      </div>
    </div>
  )
}

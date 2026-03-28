import { useEffect, useRef, useState } from 'react'

const gold = '#FFD700'
const goldDim = 'rgba(255,215,0,0.15)'
const goldMid = 'rgba(255,215,0,0.4)'

/* ─────────────────────────────────────────────
   1. SOFTWARE & WEB — animated code terminal
───────────────────────────────────────────── */
const codeLines = [
  { text: 'const app = createServer(config)', color: '#F5F5F0' },
  { text: '  .use(authMiddleware())', color: 'rgba(245,245,240,0.5)' },
  { text: '  .use(rateLimiter({ max: 500 }))', color: 'rgba(245,245,240,0.5)' },
  { text: '  .route("/api/v2", router)', color: gold },
  { text: '', color: '' },
  { text: 'async function deploy(env) {', color: '#F5F5F0' },
  { text: '  await build({ target: env })', color: 'rgba(245,245,240,0.5)' },
  { text: '  await scale({ replicas: 12 })', color: gold },
  { text: '  return { status: 200 }', color: 'rgba(245,245,240,0.7)' },
  { text: '}', color: '#F5F5F0' },
]

export function SoftwareVisual() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [cursor, setCursor] = useState(true)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      i++
      setVisibleLines(i)
      if (i >= codeLines.length) {
        clearInterval(interval)
        setTimeout(() => setVisibleLines(0), 1800)
      }
    }, 280)
    return () => clearInterval(interval)
  }, [visibleLines === 0 ? undefined : null])

  useEffect(() => {
    const t = setInterval(() => setCursor(c => !c), 500)
    return () => clearInterval(t)
  }, [])

  return (
    <div style={{ width: '100%', maxWidth: 420, fontFamily: 'monospace' }}>
      {/* Window bar */}
      <div style={{ background: 'rgba(20,20,20,0.9)', border: '1px solid rgba(255,215,0,0.2)', borderBottom: 'none', padding: '10px 16px', display: 'flex', gap: 8, alignItems: 'center' }}>
        {['#ff5f57','#febc2e','#28c840'].map((c, i) => <div key={i} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />)}
        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginLeft: 8, letterSpacing: 1 }}>tantech-app.js</span>
      </div>
      {/* Code area */}
      <div style={{ background: 'rgba(10,10,10,0.9)', border: '1px solid rgba(255,215,0,0.2)', padding: '20px 24px', minHeight: 220 }}>
        {codeLines.slice(0, visibleLines).map((line, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: 4, fontSize: 13, lineHeight: 1.6 }}>
            <span style={{ color: 'rgba(255,215,0,0.25)', marginRight: 16, minWidth: 20, textAlign: 'right', userSelect: 'none' }}>{i + 1}</span>
            <span style={{ color: line.color }}>{line.text}</span>
            {i === visibleLines - 1 && <span style={{ display: 'inline-block', width: 2, height: 14, background: gold, marginLeft: 2, opacity: cursor ? 1 : 0 }} />}
          </div>
        ))}
      </div>
      {/* Status bar */}
      <div style={{ background: gold, padding: '5px 16px', display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 11, color: '#0A0A0A', fontWeight: 700, letterSpacing: 1 }}>● RUNNING</span>
        <span style={{ fontSize: 11, color: '#0A0A0A', fontWeight: 600 }}>Node.js v20 · TypeScript</span>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   2. AI & WORKFLOW — neural network SVG
───────────────────────────────────────────── */
const nodes = {
  input:  [{ x: 60, y: 60 }, { x: 60, y: 130 }, { x: 60, y: 200 }, { x: 60, y: 270 }],
  hidden: [{ x: 190, y: 90 }, { x: 190, y: 165 }, { x: 190, y: 240 }],
  output: [{ x: 320, y: 120 }, { x: 320, y: 210 }],
}

export function AIVisual() {
  const [active, setActive] = useState({ input: -1, hidden: -1, output: -1 })
  const [pulses, setPulses] = useState([])

  useEffect(() => {
    let step = 0
    const seq = [
      () => setActive({ input: Math.floor(Math.random() * 4), hidden: -1, output: -1 }),
      () => setActive(a => ({ ...a, hidden: Math.floor(Math.random() * 3) })),
      () => setActive(a => ({ ...a, output: Math.floor(Math.random() * 2) })),
      () => { setActive({ input: -1, hidden: -1, output: -1 }); step = -1 },
    ]
    const t = setInterval(() => { seq[step % seq.length](); step++ }, 600)
    return () => clearInterval(t)
  }, [])

  const edges = []
  nodes.input.forEach((n, i) => nodes.hidden.forEach((h, j) => edges.push({ x1: n.x, y1: n.y, x2: h.x, y2: h.y, key: `ih-${i}-${j}` })))
  nodes.hidden.forEach((h, i) => nodes.output.forEach((o, j) => edges.push({ x1: h.x, y1: h.y, x2: o.x, y2: o.y, key: `ho-${i}-${j}` })))

  return (
    <div style={{ width: '100%', maxWidth: 400 }}>
      <div style={{ background: 'rgba(10,10,10,0.85)', border: '1px solid rgba(255,215,0,0.2)', padding: 24, position: 'relative' }}>
        <div style={{ fontSize: 11, letterSpacing: 3, color: gold, fontFamily: 'Space Grotesk, sans-serif', marginBottom: 16 }}>NEURAL NETWORK — LIVE INFERENCE</div>
        <svg viewBox="0 0 380 330" style={{ width: '100%', overflow: 'visible' }}>
          {/* Edges */}
          {edges.map(e => (
            <line key={e.key} x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2}
              stroke="rgba(255,215,0,0.12)" strokeWidth={1} />
          ))}
          {/* Animated active edges */}
          {active.input >= 0 && active.hidden >= 0 && nodes.input[active.input] && nodes.hidden[active.hidden] && (
            <line x1={nodes.input[active.input].x} y1={nodes.input[active.input].y}
              x2={nodes.hidden[active.hidden].x} y2={nodes.hidden[active.hidden].y}
              stroke={gold} strokeWidth={2} opacity={0.8}>
              <animate attributeName="opacity" values="0.8;0.2;0.8" dur="0.6s" repeatCount="indefinite" />
            </line>
          )}
          {active.hidden >= 0 && active.output >= 0 && nodes.hidden[active.hidden] && nodes.output[active.output] && (
            <line x1={nodes.hidden[active.hidden].x} y1={nodes.hidden[active.hidden].y}
              x2={nodes.output[active.output].x} y2={nodes.output[active.output].y}
              stroke={gold} strokeWidth={2} opacity={0.8}>
              <animate attributeName="opacity" values="0.8;0.2;0.8" dur="0.6s" repeatCount="indefinite" />
            </line>
          )}
          {/* Input nodes */}
          {nodes.input.map((n, i) => (
            <g key={i}>
              <circle cx={n.x} cy={n.y} r={16} fill="rgba(255,215,0,0.05)" stroke={active.input === i ? gold : 'rgba(255,215,0,0.3)'} strokeWidth={active.input === i ? 2 : 1} />
              {active.input === i && <circle cx={n.x} cy={n.y} r={16} fill="none" stroke={gold} strokeWidth={2}><animate attributeName="r" values="16;26;16" dur="0.6s" repeatCount="indefinite" /><animate attributeName="opacity" values="1;0;1" dur="0.6s" repeatCount="indefinite" /></circle>}
              <text x={n.x} y={n.y + 4} textAnchor="middle" fontSize={9} fill={active.input === i ? gold : 'rgba(255,215,0,0.5)'} fontFamily="monospace">IN</text>
            </g>
          ))}
          {/* Hidden nodes */}
          {nodes.hidden.map((n, i) => (
            <g key={i}>
              <circle cx={n.x} cy={n.y} r={20} fill="rgba(255,215,0,0.06)" stroke={active.hidden === i ? gold : 'rgba(255,215,0,0.3)'} strokeWidth={active.hidden === i ? 2 : 1} />
              <text x={n.x} y={n.y + 4} textAnchor="middle" fontSize={9} fill={active.hidden === i ? gold : 'rgba(255,215,0,0.5)'} fontFamily="monospace">H{i + 1}</text>
            </g>
          ))}
          {/* Output nodes */}
          {nodes.output.map((n, i) => (
            <g key={i}>
              <circle cx={n.x} cy={n.y} r={22} fill={active.output === i ? 'rgba(255,215,0,0.15)' : 'rgba(255,215,0,0.05)'} stroke={active.output === i ? gold : 'rgba(255,215,0,0.4)'} strokeWidth={active.output === i ? 2.5 : 1} />
              <text x={n.x} y={n.y + 4} textAnchor="middle" fontSize={9} fill={active.output === i ? gold : 'rgba(255,215,0,0.5)'} fontFamily="monospace">OUT</text>
            </g>
          ))}
          {/* Labels */}
          <text x={60} y={310} textAnchor="middle" fontSize={10} fill="rgba(255,215,0,0.4)" fontFamily="Space Grotesk, sans-serif">INPUT</text>
          <text x={190} y={310} textAnchor="middle" fontSize={10} fill="rgba(255,215,0,0.4)" fontFamily="Space Grotesk, sans-serif">HIDDEN</text>
          <text x={320} y={310} textAnchor="middle" fontSize={10} fill="rgba(255,215,0,0.4)" fontFamily="Space Grotesk, sans-serif">OUTPUT</text>
        </svg>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   3. SHOPIFY — animated store / cart
───────────────────────────────────────────── */
const products = [
  { name: 'Premium Hoodie', price: '$89', tag: 'BEST SELLER' },
  { name: 'Limited Tee', price: '$45', tag: 'NEW' },
  { name: 'Cargo Pants', price: '$120', tag: 'TRENDING' },
  { name: 'Sneakers', price: '$199', tag: 'HOT' },
]

export function ShopifyVisual() {
  const [cart, setCart] = useState(0)
  const [added, setAdded] = useState(null)
  const [conv, setConv] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setConv(c => Math.min(c + 1, 94)), 40)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const t = setInterval(() => {
      const idx = Math.floor(Math.random() * products.length)
      setAdded(idx)
      setCart(c => c + 1)
      setTimeout(() => setAdded(null), 800)
    }, 1800)
    return () => clearInterval(t)
  }, [])

  return (
    <div style={{ width: '100%', maxWidth: 400 }}>
      {/* Store header */}
      <div style={{ background: 'rgba(10,10,10,0.9)', border: '1px solid rgba(255,215,0,0.25)', borderBottom: 'none', padding: '12px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 18, letterSpacing: 3, color: gold }}>TANSTORE</span>
        <div style={{ position: 'relative' }}>
          <span style={{ fontSize: 20 }}>🛒</span>
          {cart > 0 && <span style={{ position: 'absolute', top: -6, right: -8, background: gold, color: '#0A0A0A', borderRadius: '50%', width: 18, height: 18, fontSize: 10, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Space Grotesk, sans-serif' }}>{cart}</span>}
        </div>
      </div>
      {/* Products grid */}
      <div style={{ background: 'rgba(12,12,12,0.9)', border: '1px solid rgba(255,215,0,0.25)', borderTop: 'none', padding: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {products.map((p, i) => (
          <div key={i} style={{ background: added === i ? 'rgba(255,215,0,0.12)' : 'rgba(20,20,20,0.8)', border: `1px solid ${added === i ? gold : 'rgba(255,215,0,0.1)'}`, padding: 12, transition: 'all 0.3s', position: 'relative' }}>
            <div style={{ background: gold, color: '#0A0A0A', fontSize: 9, fontWeight: 700, padding: '2px 6px', display: 'inline-block', marginBottom: 8, fontFamily: 'Space Grotesk, sans-serif', letterSpacing: 1 }}>{p.tag}</div>
            <div style={{ width: '100%', height: 50, background: 'rgba(255,215,0,0.05)', border: '1px solid rgba(255,215,0,0.08)', marginBottom: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>
              {['👕','👔','👖','👟'][i]}
            </div>
            <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 11, color: 'rgba(245,245,240,0.7)', marginBottom: 4 }}>{p.name}</div>
            <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 16, color: gold, letterSpacing: 1 }}>{p.price}</div>
            {added === i && <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,215,0,0.15)', fontSize: 24 }}>✓</div>}
          </div>
        ))}
      </div>
      {/* Conversion bar */}
      <div style={{ background: 'rgba(8,8,8,0.9)', border: '1px solid rgba(255,215,0,0.25)', borderTop: 'none', padding: '10px 16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
          <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 11, color: 'rgba(255,215,0,0.6)' }}>CONVERSION RATE</span>
          <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 14, color: gold }}>{conv}%</span>
        </div>
        <div style={{ height: 4, background: 'rgba(255,215,0,0.1)', borderRadius: 2 }}>
          <div style={{ height: '100%', width: `${conv}%`, background: gold, borderRadius: 2, transition: 'width 0.04s linear' }} />
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   4. TAXATION & COMPLIANCE — animated chart
───────────────────────────────────────────── */
const taxBars = [
  { label: 'Q1', value: 65, },
  { label: 'Q2', value: 78 },
  { label: 'Q3', value: 55 },
  { label: 'Q4', value: 92 },
]
const checks = ['GST Filing', 'TDS Returns', 'Income Tax', 'Audit Report', 'Compliance Cert']

export function TaxVisual() {
  const [heights, setHeights] = useState(taxBars.map(() => 0))
  const [checked, setChecked] = useState([])

  useEffect(() => {
    setTimeout(() => setHeights(taxBars.map(b => b.value)), 200)
  }, [])

  useEffect(() => {
    let i = 0
    const t = setInterval(() => {
      if (i < checks.length) { setChecked(c => [...c, i]); i++ }
      else { setChecked([]); i = 0 }
    }, 600)
    return () => clearInterval(t)
  }, [])

  return (
    <div style={{ width: '100%', maxWidth: 400 }}>
      <div style={{ background: 'rgba(10,10,10,0.9)', border: '1px solid rgba(255,215,0,0.2)', padding: 24 }}>
        <div style={{ fontSize: 11, letterSpacing: 3, color: gold, fontFamily: 'Space Grotesk, sans-serif', marginBottom: 20 }}>FISCAL YEAR OVERVIEW</div>
        {/* Bar chart */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, height: 120, marginBottom: 24 }}>
          {taxBars.map((b, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 13, color: gold }}>{b.value}%</span>
              <div style={{ width: '100%', height: `${heights[i]}%`, background: `linear-gradient(180deg, ${gold} 0%, rgba(255,215,0,0.4) 100%)`, transition: 'height 1s cubic-bezier(0.34, 1.56, 0.64, 1)', minHeight: 4 }} />
              <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 11, color: 'rgba(245,245,240,0.5)' }}>{b.label}</span>
            </div>
          ))}
        </div>
        {/* Compliance checklist */}
        <div style={{ borderTop: '1px solid rgba(255,215,0,0.1)', paddingTop: 16 }}>
          <div style={{ fontSize: 11, letterSpacing: 2, color: 'rgba(255,215,0,0.5)', fontFamily: 'Space Grotesk, sans-serif', marginBottom: 10 }}>COMPLIANCE STATUS</div>
          {checks.map((c, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, transition: 'all 0.3s' }}>
              <div style={{ width: 16, height: 16, border: `1.5px solid ${checked.includes(i) ? gold : 'rgba(255,215,0,0.3)'}`, background: checked.includes(i) ? gold : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s', flexShrink: 0 }}>
                {checked.includes(i) && <span style={{ color: '#0A0A0A', fontSize: 10, fontWeight: 900 }}>✓</span>}
              </div>
              <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 13, color: checked.includes(i) ? 'rgba(245,245,240,0.9)' : 'rgba(245,245,240,0.4)', transition: 'color 0.3s' }}>{c}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   5. BENCH SALES — talent matching network
───────────────────────────────────────────── */
const talent = [
  { label: 'Java Dev', x: 50, y: 60 },
  { label: '.NET Eng', x: 50, y: 140 },
  { label: 'DevOps', x: 50, y: 220 },
  { label: 'Data Eng', x: 50, y: 300 },
]
const clients = [
  { label: 'FinTech Co', x: 330, y: 100 },
  { label: 'HealthCare', x: 330, y: 200 },
  { label: 'TechCorp', x: 330, y: 300 },
]

export function BenchSalesVisual() {
  const [matched, setMatched] = useState([])
  const matchPairs = [
    [0, 0], [1, 0], [2, 1], [3, 2],
  ]

  useEffect(() => {
    let i = 0
    const t = setInterval(() => {
      if (i < matchPairs.length) {
        setMatched(m => [...m, matchPairs[i]])
        i++
      } else {
        setMatched([])
        i = 0
      }
    }, 700)
    return () => clearInterval(t)
  }, [])

  return (
    <div style={{ width: '100%', maxWidth: 420 }}>
      <div style={{ background: 'rgba(10,10,10,0.9)', border: '1px solid rgba(255,215,0,0.2)', padding: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 3, color: gold, fontFamily: 'Space Grotesk, sans-serif', marginBottom: 12 }}>TALENT MATCHING ENGINE</div>
        <svg viewBox="0 0 380 370" style={{ width: '100%' }}>
          {/* Connection lines */}
          {matchPairs.map(([ti, ci], idx) => {
            const t = talent[ti], c = clients[ci]
            const isActive = matched.some(([mt, mc]) => mt === ti && mc === ci)
            return (
              <line key={idx} x1={t.x + 50} y1={t.y} x2={c.x - 50} y2={c.y}
                stroke={isActive ? gold : 'rgba(255,215,0,0.08)'} strokeWidth={isActive ? 2 : 1}
                strokeDasharray={isActive ? 'none' : '4 4'}>
                {isActive && <animate attributeName="opacity" values="1;0.4;1" dur="0.8s" repeatCount="indefinite" />}
              </line>
            )
          })}
          {/* Talent nodes */}
          {talent.map((n, i) => {
            const isActive = matched.some(([ti]) => ti === i)
            return (
              <g key={i}>
                <rect x={n.x - 46} y={n.y - 18} width={92} height={36} rx={4} fill={isActive ? 'rgba(255,215,0,0.12)' : 'rgba(20,20,20,0.9)'} stroke={isActive ? gold : 'rgba(255,215,0,0.25)'} strokeWidth={isActive ? 1.5 : 1} />
                <text x={n.x} y={n.y - 2} textAnchor="middle" fontSize={10} fill={isActive ? gold : 'rgba(245,245,240,0.6)'} fontFamily="Space Grotesk, sans-serif" fontWeight="600">👤</text>
                <text x={n.x} y={n.y + 12} textAnchor="middle" fontSize={9} fill={isActive ? gold : 'rgba(245,245,240,0.5)'} fontFamily="Space Grotesk, sans-serif">{n.label}</text>
              </g>
            )
          })}
          {/* Client nodes */}
          {clients.map((n, i) => {
            const isActive = matched.some(([, ci]) => ci === i)
            return (
              <g key={i}>
                <rect x={n.x - 50} y={n.y - 20} width={100} height={40} rx={4} fill={isActive ? 'rgba(255,215,0,0.15)' : 'rgba(20,20,20,0.9)'} stroke={isActive ? gold : 'rgba(255,215,0,0.3)'} strokeWidth={isActive ? 2 : 1} />
                <text x={n.x} y={n.y - 2} textAnchor="middle" fontSize={10} fill={isActive ? '#0A0A0A' : gold} fontFamily="Space Grotesk, sans-serif">🏢</text>
                <text x={n.x} y={n.y + 14} textAnchor="middle" fontSize={9} fill={isActive ? gold : 'rgba(255,215,0,0.6)'} fontFamily="Space Grotesk, sans-serif" fontWeight="600">{n.label}</text>
              </g>
            )
          })}
          <text x={50} y={350} textAnchor="middle" fontSize={9} fill="rgba(255,215,0,0.35)" fontFamily="Space Grotesk, sans-serif">TALENT POOL</text>
          <text x={330} y={350} textAnchor="middle" fontSize={9} fill="rgba(255,215,0,0.35)" fontFamily="Space Grotesk, sans-serif">CLIENTS</text>
        </svg>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0 0', borderTop: '1px solid rgba(255,215,0,0.1)' }}>
          <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 11, color: 'rgba(255,215,0,0.5)' }}>MATCHED THIS WEEK</span>
          <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 16, color: gold }}>{matched.length * 3 + 14}</span>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   6. MANPOWER & STAFFING — org chart build
───────────────────────────────────────────── */
const orgNodes = [
  { label: 'CTO', level: 0, x: 190, y: 30, parent: null },
  { label: 'Dev Lead', level: 1, x: 90, y: 110, parent: 0 },
  { label: 'Ops Lead', level: 1, x: 290, y: 110, parent: 0 },
  { label: 'Frontend', level: 2, x: 40, y: 200, parent: 1 },
  { label: 'Backend', level: 2, x: 140, y: 200, parent: 1 },
  { label: 'DevOps', level: 2, x: 240, y: 200, parent: 2 },
  { label: 'QA Eng', level: 2, x: 340, y: 200, parent: 2 },
]

export function ManpowerVisual() {
  const [visible, setVisible] = useState(0)

  useEffect(() => {
    let i = 0
    const t = setInterval(() => {
      i++
      setVisible(i)
      if (i >= orgNodes.length) { clearInterval(t); setTimeout(() => setVisible(0), 2000) }
    }, 400)
    return () => clearInterval(t)
  }, [visible === 0 ? undefined : null])

  return (
    <div style={{ width: '100%', maxWidth: 420 }}>
      <div style={{ background: 'rgba(10,10,10,0.9)', border: '1px solid rgba(255,215,0,0.2)', padding: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 3, color: gold, fontFamily: 'Space Grotesk, sans-serif', marginBottom: 8 }}>TEAM STRUCTURE — BUILDING</div>
        <svg viewBox="0 0 380 270" style={{ width: '100%' }}>
          {/* Lines */}
          {orgNodes.map((node, i) => {
            if (node.parent === null || i >= visible) return null
            const parent = orgNodes[node.parent]
            return (
              <line key={`line-${i}`} x1={parent.x} y1={parent.y + 18} x2={node.x} y2={node.y - 18}
                stroke="rgba(255,215,0,0.3)" strokeWidth={1} strokeDasharray="3 3" />
            )
          })}
          {/* Nodes */}
          {orgNodes.map((node, i) => {
            if (i >= visible) return null
            const isTop = node.level === 0
            return (
              <g key={i}>
                <rect x={node.x - 36} y={node.y - 18} width={72} height={36} rx={3}
                  fill={isTop ? 'rgba(255,215,0,0.15)' : 'rgba(20,20,20,0.9)'}
                  stroke={isTop ? gold : 'rgba(255,215,0,0.3)'} strokeWidth={isTop ? 2 : 1} />
                <text x={node.x} y={node.y - 3} textAnchor="middle" fontSize={9}
                  fill={isTop ? gold : 'rgba(245,245,240,0.7)'} fontFamily="Space Grotesk, sans-serif" fontWeight="700">
                  {node.label}
                </text>
                <text x={node.x} y={node.y + 10} textAnchor="middle" fontSize={8}
                  fill="rgba(255,215,0,0.4)" fontFamily="Space Grotesk, sans-serif">
                  {['●','●●','●●●'][node.level]}
                </text>
              </g>
            )
          })}
        </svg>
        <div style={{ display: 'flex', gap: 16, paddingTop: 8, borderTop: '1px solid rgba(255,215,0,0.1)' }}>
          {[['ROLES FILLED', `${visible}/7`], ['TIME TO HIRE', '8 DAYS'], ['RETENTION', '94%']].map(([l, v], i) => (
            <div key={i} style={{ flex: 1, textAlign: 'center' }}>
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
   7. RPO & EXECUTIVE PLACEMENT — growth chart
───────────────────────────────────────────── */
const chartData = [22, 31, 28, 45, 52, 48, 67, 72, 68, 85, 91, 98]
const months = ['J','F','M','A','M','J','J','A','S','O','N','D']
const executives = ['Chief Technology Officer', 'VP of Engineering', 'Head of Product', 'Director of Operations']

export function RPOVisual() {
  const [progress, setProgress] = useState(0)
  const [currentExec, setCurrentExec] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setProgress(p => Math.min(p + 1, chartData.length - 1)), 400)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const t = setInterval(() => setCurrentExec(e => (e + 1) % executives.length), 1800)
    return () => clearInterval(t)
  }, [])

  const maxVal = 100
  const chartH = 120, chartW = 320
  const pts = chartData.slice(0, progress + 1).map((v, i) => `${(i / (chartData.length - 1)) * chartW},${chartH - (v / maxVal) * chartH}`).join(' ')

  return (
    <div style={{ width: '100%', maxWidth: 400 }}>
      <div style={{ background: 'rgba(10,10,10,0.9)', border: '1px solid rgba(255,215,0,0.2)', padding: 20 }}>
        {/* Executive spotlight */}
        <div style={{ background: 'rgba(255,215,0,0.06)', border: '1px solid rgba(255,215,0,0.2)', padding: '12px 16px', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,215,0,0.15)', border: `2px solid ${gold}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>👤</div>
          <div>
            <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 10, color: 'rgba(255,215,0,0.5)', letterSpacing: 2, marginBottom: 2 }}>PLACING NOW</div>
            <div key={currentExec} style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 15, letterSpacing: 2, color: '#F5F5F0', animation: 'fadeIn 0.4s ease' }}>{executives[currentExec]}</div>
          </div>
          <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
            <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 20, color: gold }}>98%</div>
            <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 9, color: 'rgba(255,215,0,0.5)' }}>MATCH</div>
          </div>
        </div>
        {/* Growth chart */}
        <div style={{ fontSize: 11, letterSpacing: 3, color: gold, fontFamily: 'Space Grotesk, sans-serif', marginBottom: 8 }}>PLACEMENT SUCCESS RATE</div>
        <svg viewBox={`0 0 ${chartW} ${chartH + 24}`} style={{ width: '100%', overflow: 'visible' }}>
          {/* Grid lines */}
          {[25, 50, 75, 100].map(v => (
            <line key={v} x1={0} y1={chartH - (v / maxVal) * chartH} x2={chartW} y2={chartH - (v / maxVal) * chartH}
              stroke="rgba(255,215,0,0.06)" strokeWidth={1} />
          ))}
          {/* Area fill */}
          {progress > 0 && (
            <polygon
              points={`0,${chartH} ${pts} ${(progress / (chartData.length - 1)) * chartW},${chartH}`}
              fill="rgba(255,215,0,0.07)" />
          )}
          {/* Line */}
          {progress > 0 && <polyline points={pts} fill="none" stroke={gold} strokeWidth={2} />}
          {/* Current dot */}
          {progress > 0 && (() => {
            const x = (progress / (chartData.length - 1)) * chartW
            const y = chartH - (chartData[progress] / maxVal) * chartH
            return <>
              <circle cx={x} cy={y} r={5} fill={gold} />
              <circle cx={x} cy={y} r={5} fill="none" stroke={gold} strokeWidth={2}>
                <animate attributeName="r" values="5;12;5" dur="1s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
              </circle>
              <text x={x + 8} y={y - 6} fontSize={11} fill={gold} fontFamily="Bebas Neue, sans-serif">{chartData[progress]}%</text>
            </>
          })()}
          {/* Month labels */}
          {months.slice(0, progress + 1).map((m, i) => (
            <text key={i} x={(i / (chartData.length - 1)) * chartW} y={chartH + 16}
              textAnchor="middle" fontSize={9} fill="rgba(255,215,0,0.35)" fontFamily="Space Grotesk, sans-serif">{m}</text>
          ))}
        </svg>
        <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }`}</style>
      </div>
    </div>
  )
}

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.25 } },
}

// ── TRUST PAGE HERO VISUAL ──────────────────────────────────────────────────
function TrustVisual() {
  const satellites = [
    // cx/cy = circle centre · lx/ly = label pos · anim = CSS class for icon
    { icon: '🍱', label: 'RATION',    cx: 170, cy: 62,  lx: 170, ly: 22,  anim: 'tv-bob'    },
    { icon: '🏠', label: 'SHELTER',   cx: 292, cy: 170, lx: 292, ly: 218, anim: 'tv-pulse'  },
    { icon: '📚', label: 'EDUCATION', cx: 170, cy: 278, lx: 170, ly: 326, anim: 'tv-wobble' },
    { icon: '🚨', label: 'RELIEF',    cx: 48,  cy: 170, lx: 48,  ly: 218, anim: 'tv-flash'  },
  ]

  return (
    <div style={{ width: '100%', maxWidth: 380, margin: '0 auto' }}>
      <style>{`
        /* ── heart lub-dub ── */
        @keyframes zariya-beat {
          0%   { transform: scale(1);    filter: drop-shadow(0 0 4px rgba(255,60,60,0.5)); }
          12%  { transform: scale(1.5);  filter: drop-shadow(0 0 16px rgba(255,60,60,1));  }
          24%  { transform: scale(1.06); filter: drop-shadow(0 0 6px rgba(255,60,60,0.6)); }
          38%  { transform: scale(1.32); filter: drop-shadow(0 0 11px rgba(255,60,60,0.9));}
          56%  { transform: scale(1);    filter: drop-shadow(0 0 4px rgba(255,60,60,0.4)); }
          100% { transform: scale(1);    filter: drop-shadow(0 0 4px rgba(255,60,60,0.4)); }
        }
        .zariya-heart {
          display: inline-block; transform-origin: center;
          animation: zariya-beat 0.85s ease-in-out infinite;
          font-size: 32px; line-height: 1;
        }

        /* ── ration: gentle float up-down (food being handed out) ── */
        @keyframes tv-bob {
          0%, 100% { transform: translateY(0px);  }
          50%       { transform: translateY(-7px); }
        }
        .tv-bob {
          display: inline-block; transform-origin: center;
          animation: tv-bob 2.2s ease-in-out infinite;
          font-size: 28px; line-height: 1;
        }

        /* ── shelter: warm slow scale-pulse (home breathing) ── */
        @keyframes tv-pulse {
          0%, 100% { transform: scale(1);    filter: drop-shadow(0 0 2px rgba(255,215,0,0.2)); }
          50%       { transform: scale(1.22); filter: drop-shadow(0 0 10px rgba(255,215,0,0.7)); }
        }
        .tv-pulse {
          display: inline-block; transform-origin: center;
          animation: tv-pulse 2.6s ease-in-out infinite;
          font-size: 28px; line-height: 1;
        }

        /* ── education: left-right page-flip wobble ── */
        @keyframes tv-wobble {
          0%, 100% { transform: rotate(0deg);  }
          20%       { transform: rotate(-10deg); }
          60%       { transform: rotate(10deg);  }
          80%       { transform: rotate(-4deg);  }
        }
        .tv-wobble {
          display: inline-block; transform-origin: center bottom;
          animation: tv-wobble 3s ease-in-out infinite;
          font-size: 28px; line-height: 1;
        }

        /* ── relief: urgent red-glow flash (emergency siren) ── */
        @keyframes tv-flash {
          0%, 100% { transform: scale(1);    filter: drop-shadow(0 0 2px rgba(255,50,50,0.3)); }
          25%       { transform: scale(1.28); filter: drop-shadow(0 0 12px rgba(255,50,50,1));  }
          50%       { transform: scale(1);    filter: drop-shadow(0 0 2px rgba(255,50,50,0.2)); }
          75%       { transform: scale(1.18); filter: drop-shadow(0 0 8px rgba(255,100,0,0.9));}
        }
        .tv-flash {
          display: inline-block; transform-origin: center;
          animation: tv-flash 0.7s ease-in-out infinite;
          font-size: 28px; line-height: 1;
        }
      `}</style>

      {/* viewBox 340 × 350 — extra 10px at bottom keeps EDUCATION label inside */}
      <svg viewBox="0 0 340 350" style={{ width: '100%', height: 'auto' }}>
        <defs>
          <radialGradient id="tg-core" cx="50%" cy="49%" r="50%">
            <stop offset="0%"   stopColor="#FFD700" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#FFD700" stopOpacity="0"    />
          </radialGradient>
          <radialGradient id="tg-red" cx="50%" cy="49%" r="50%">
            <stop offset="0%"   stopColor="#ff4444" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#ff4444" stopOpacity="0"    />
          </radialGradient>
          <filter id="tg-blur">
            <feGaussianBlur stdDeviation="2.5" />
          </filter>
        </defs>

        {/* Slow-rotating outer dashed ring */}
        <circle cx="170" cy="170" r="146" fill="none"
          stroke="rgba(255,215,0,0.07)" strokeWidth="1" strokeDasharray="6 10">
          <animateTransform attributeName="transform" type="rotate"
            from="0 170 170" to="360 170 170" dur="30s" repeatCount="indefinite" />
        </circle>

        {/* Mid ring */}
        <circle cx="170" cy="170" r="112" fill="none"
          stroke="rgba(255,215,0,0.05)" strokeWidth="1" />

        {/* Dashed spoke lines */}
        {satellites.map((s, i) => (
          <line key={i} x1="170" y1="170" x2={s.cx} y2={s.cy}
            stroke="rgba(255,215,0,0.18)" strokeWidth="1" strokeDasharray="5 5" />
        ))}

        {/* Flowing gold particles — 3 staggered per spoke */}
        {satellites.map((s, si) => {
          const path   = `M 170 170 L ${s.cx} ${s.cy}`
          const durSec = 2.4 + si * 0.15
          const dur    = `${durSec}s`
          return [0, 1, 2].map(j => (
            <circle key={`${si}-${j}`}
              r={Math.max(0.8, 4 - j * 1.3)}
              fill="#FFD700"
              opacity={0.85 - j * 0.28}
              filter="url(#tg-blur)">
              <animateMotion dur={dur}
                begin={`-${(j * durSec / 3).toFixed(2)}s`}
                repeatCount="indefinite" path={path} />
            </circle>
          ))
        })}

        {/* Heartbeat-synced red glow halo */}
        <circle cx="170" cy="170" r="68" fill="url(#tg-red)">
          <animate attributeName="r"       values="60;78;62;73;60" dur="0.85s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;1;0.65;0.9;0.5" dur="0.85s" repeatCount="indefinite" />
        </circle>

        {/* Gold glow halo */}
        <circle cx="170" cy="170" r="62" fill="url(#tg-core)">
          <animate attributeName="r"       values="58;72;58" dur="0.85s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0.95;0.5" dur="0.85s" repeatCount="indefinite" />
        </circle>

        {/* Expanding pulse ring */}
        <circle cx="170" cy="170" r="50" fill="none"
          stroke="rgba(255,80,80,0.55)" strokeWidth="1.5">
          <animate attributeName="r"       values="48;66;50;62;48" dur="0.85s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.9;0;0.6;0;0.9" dur="0.85s" repeatCount="indefinite" />
        </circle>

        {/* Center dark circle */}
        <circle cx="170" cy="170" r="48"
          fill="rgba(6,6,6,0.93)" stroke="#FFD700" strokeWidth="1.5" />

        {/* ❤️ beating heart — foreignObject gives full CSS animation */}
        <foreignObject x="138" y="136" width="64" height="52">
          <div xmlns="http://www.w3.org/1999/xhtml"
            style={{ width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <span className="zariya-heart">❤️</span>
          </div>
        </foreignObject>

        {/* ZARIYA wordmark */}
        <text x="170" y="191" textAnchor="middle"
          fill="#FFD700" fontSize="8" letterSpacing="3.5"
          fontFamily="'Bebas Neue', sans-serif">ZARIYA</text>

        {/* Satellite nodes */}
        {satellites.map((s, i) => (
          <g key={i}>
            {/* Glow halo */}
            <circle cx={s.cx} cy={s.cy} r="38"
              fill="rgba(255,215,0,0.06)" filter="url(#tg-blur)">
              <animate attributeName="opacity" values="0.3;0.9;0.3"
                dur={`${2 + i * 0.35}s`} repeatCount="indefinite" />
            </circle>
            {/* Circle border — larger r=34 for bigger icons */}
            <circle cx={s.cx} cy={s.cy} r="34"
              fill="rgba(6,6,6,0.93)" stroke="rgba(255,215,0,0.55)" strokeWidth="1.5">
              <animate attributeName="stroke-opacity" values="0.35;0.95;0.35"
                dur={`${2 + i * 0.35}s`} repeatCount="indefinite" />
            </circle>
            {/* Animated emoji icon via foreignObject */}
            <foreignObject x={s.cx - 22} y={s.cy - 22} width="44" height="44">
              <div xmlns="http://www.w3.org/1999/xhtml"
                style={{ width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <span className={s.anim}>{s.icon}</span>
              </div>
            </foreignObject>
            {/* Label outside circle */}
            <text x={s.lx} y={s.ly} textAnchor="middle"
              fill="rgba(255,215,0,0.75)" fontSize="7.5" letterSpacing="2"
              fontFamily="'Space Grotesk', sans-serif" fontWeight="600">
              {s.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}

const pillars = [
  { icon: '🍱', title: 'Ration Kit Distribution', desc: 'Providing essential monthly groceries to families struggling with food insecurity, ensuring no kitchen in our community goes cold.' },
  { icon: '🏠', title: 'Homeless Feeding Program', desc: 'Daily hot meal distributions for the homeless in Hyderabad, delivering dignity and nutrition to those on the streets.' },
  { icon: '📚', title: 'Educational Scholarships', desc: 'Empowering the next generation by covering tuition and supplies for bright students who lack the financial means to study.' },
  { icon: '🚨', title: 'Emergency Aid', desc: 'A rapid-response fund for medical emergencies and immediate relief during unforeseen crises.' },
]

const lifecycle = [
  { num: '01', title: 'Contribution', desc: 'Your donation is received and categorized based on the program of your choice.' },
  { num: '02', title: 'Sourcing & Vetting', desc: 'We source high-quality rations or vet scholarship applicants to ensure aid reaches the most deserving.' },
  { num: '03', title: 'Deployment', desc: 'Direct distribution of kits, meals, or funds with full photographic and receipt tracking.' },
  { num: '04', title: 'Impact Reporting', desc: 'Donors receive a digital report showing the tangible "good deed" their contribution enabled.' },
]

const stats = [
  { value: '5,000+', label: 'Meals Distributed Annually' },
  { value: '100%', label: 'Transparency — Zero Admin Fees' },
  { value: '97%', label: 'Donor Satisfaction' },
  { value: '80+', label: 'Scholarships Awarded' },
]

export default function Trust() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* Hero — two-column, aurora shows through */}
      <div style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', paddingTop: 140, paddingBottom: 80, position: 'relative' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }} className="trust-hero-grid">

            {/* Left — text */}
            <AnimatedSection direction="right">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,215,0,0.08)', border: '1px solid rgba(255,215,0,0.3)', padding: '6px 16px', marginBottom: 28 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#FFD700', display: 'inline-block' }} />
                <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 11, letterSpacing: 3, color: '#FFD700', textTransform: 'uppercase' }}>
                  Social Initiative by TanTech LLC
                </span>
              </div>
              <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(48px, 7vw, 96px)', letterSpacing: 4, lineHeight: 0.9, color: '#F5F5F0', marginBottom: 20, textShadow: '0 4px 40px rgba(0,0,0,0.9)' }}>
                ZARIYA-E-<br /><span style={{ color: '#FFD700' }}>AL-AMAAL</span>
              </h1>
              <p style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(16px, 2vw, 24px)', letterSpacing: 3, color: 'rgba(245,245,240,0.55)', marginBottom: 20, textShadow: '0 2px 16px rgba(0,0,0,0.9)' }}>
                THE MEANS OF GOOD DEEDS
              </p>
              <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 16, color: 'rgba(245,245,240,0.7)', maxWidth: 500, lineHeight: 1.8, marginBottom: 36, textShadow: '0 2px 16px rgba(0,0,0,0.9)' }}>
                We bridge the gap between those who wish to give and those in urgent need — a transparent, efficient pipeline for food, shelter, and education.
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <a href="mailto:info@tantech-llc.com?subject=Zariya Donation" className="btn-primary">Donate Now →</a>
                <a href="#pillars" className="btn-outline">Our Programs</a>
              </div>
            </AnimatedSection>

            {/* Right — animated visual */}
            <AnimatedSection direction="left">
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <TrustVisual />
              </div>
            </AnimatedSection>

          </div>
        </div>
        <style>{`
          .trust-hero-grid { grid-template-columns: 1fr 1fr !important; }
          @media (max-width: 768px) { .trust-hero-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </div>

      {/* Stats — glassmorphic, not solid */}
      <div
        style={{
          padding: '60px 0',
          background: 'rgba(8,8,8,0.55)',
          backdropFilter: 'blur(10px)',
          borderTop: '1px solid rgba(255,215,0,0.15)',
          borderBottom: '1px solid rgba(255,215,0,0.15)',
        }}
      >
        <div className="container">
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}
            className="trust-stats"
          >
            {stats.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: 'clamp(36px, 5vw, 56px)',
                      color: '#FFD700',
                      letterSpacing: 2,
                      lineHeight: 1,
                      marginBottom: 8,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: 13,
                      color: 'rgba(245,245,240,0.55)',
                      letterSpacing: 2,
                      textTransform: 'uppercase',
                      fontWeight: 600,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
        <style>{`
          .trust-stats { grid-template-columns: repeat(4, 1fr); }
          @media (max-width: 768px) { .trust-stats { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 400px) { .trust-stats { grid-template-columns: 1fr !important; } }
        `}</style>
      </div>

      {/* Mission */}
      <div className="section" style={{ background: 'rgba(5,5,5,0.45)', backdropFilter: 'blur(8px)' }}>
        <div className="container">
          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}
            className="mission-grid"
          >
            <AnimatedSection direction="right">
              <span className="section-label">Our Mission</span>
              <h2
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: 'clamp(36px, 6vw, 64px)',
                  letterSpacing: 3,
                  color: '#F5F5F0',
                  lineHeight: 0.95,
                  marginBottom: 24,
                }}
              >
                DIGNITY. OPPORTUNITY. <span style={{ color: '#FFD700' }}>HOPE.</span>
              </h2>
              <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 15, color: 'rgba(245,245,240,0.6)', lineHeight: 1.9, marginBottom: 20 }}>
                We believe in a world where every person, regardless of their background, has the right to dignity, opportunity, and hope.
              </p>
              <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 15, color: 'rgba(245,245,240,0.6)', lineHeight: 1.9, marginBottom: 40 }}>
                84% of our team members come from the very communities we serve. Zero administrative fees means 100% of every donation reaches those who need it.
              </p>
              <a
                href="mailto:info@tantech-llc.com?subject=Zariya Donation"
                className="btn-primary"
              >
                Donate Now →
              </a>
            </AnimatedSection>

            <AnimatedSection direction="left">
              <div style={{ position: 'relative', padding: 40 }}>
                <div
                  style={{
                    background: 'rgba(8,8,8,0.68)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,215,0,0.15)',
                    padding: '48px 40px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,215,0,0.05) 0%, transparent 60%)' }} />
                  <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 14, letterSpacing: 4, color: '#FFD700', marginBottom: 24, position: 'relative' }}>
                    OUR COMMITMENT
                  </div>
                  <div style={{ position: 'relative' }}>
                    {[
                      { pct: '84%', label: 'Team from served communities' },
                      { pct: '100%', label: 'Of donations reach recipients' },
                      { pct: '97%', label: 'Donor satisfaction rate' },
                    ].map((item, i) => (
                      <div key={i} style={{ marginBottom: 28 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                          <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 14, color: 'rgba(245,245,240,0.7)' }}>{item.label}</span>
                          <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 20, color: '#FFD700', letterSpacing: 2 }}>{item.pct}</span>
                        </div>
                        <div style={{ height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 2 }}>
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: item.pct }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: i * 0.2 }}
                            style={{ height: '100%', background: '#FFD700', borderRadius: 2 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ position: 'absolute', top: 0, right: 0, width: 2, height: 80, background: '#FFD700' }} />
                <div style={{ position: 'absolute', top: 0, right: 0, width: 80, height: 2, background: '#FFD700' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: 2, height: 80, background: '#FFD700' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: 80, height: 2, background: '#FFD700' }} />
              </div>
            </AnimatedSection>
          </div>
        </div>
        <style>{`
          .mission-grid { grid-template-columns: 1fr 1fr; }
          @media (max-width: 768px) { .mission-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </div>

      {/* Pillars */}
      <div id="pillars" className="section" style={{ background: 'rgba(5,5,5,0.35)', backdropFilter: 'blur(8px)' }}>
        <div className="container">
          <AnimatedSection>
            <span className="section-label">What We Do</span>
            <h2 className="section-title">PILLARS OF <span style={{ color: '#FFD700' }}>SERVICE</span></h2>
          </AnimatedSection>
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, marginTop: 48 }}
            className="pillars-grid"
          >
            {pillars.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div
                  style={{
                    background: 'rgba(10,10,10,0.55)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,215,0,0.1)',
                    borderLeft: '4px solid #FFD700',
                    padding: '36px 32px',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderLeftColor = '#FFF176'
                    e.currentTarget.style.background = 'rgba(255,215,0,0.04)'
                    e.currentTarget.style.transform = 'translateX(8px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderLeftColor = '#FFD700'
                    e.currentTarget.style.background = 'rgba(10,10,10,0.55)'
                    e.currentTarget.style.transform = 'translateX(0)'
                  }}
                >
                  <div style={{ fontSize: 36, marginBottom: 16 }}>{p.icon}</div>
                  <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 22, letterSpacing: 2, color: '#FFD700', marginBottom: 12 }}>{p.title}</h3>
                  <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 14, color: 'rgba(245,245,240,0.6)', lineHeight: 1.7 }}>{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <style>{`
            .pillars-grid { grid-template-columns: repeat(2, 1fr); }
            @media (max-width: 640px) { .pillars-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </div>

      {/* Process */}
      <div className="section" style={{ background: 'rgba(5,5,5,0.45)', backdropFilter: 'blur(8px)' }}>
        <div className="container">
          <AnimatedSection>
            <span className="section-label">How It Works</span>
            <h2 className="section-title">TRANSPARENCY <span style={{ color: '#FFD700' }}>LIFECYCLE</span></h2>
          </AnimatedSection>
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, marginTop: 48 }}
            className="lifecycle-grid"
          >
            {lifecycle.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.1} style={{ height: '100%' }}>
                <div
                  style={{
                    background: 'rgba(10,10,10,0.6)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,215,0,0.1)',
                    padding: '40px 28px',
                    position: 'relative',
                    transition: 'all 0.3s',
                    height: '100%',
                    boxSizing: 'border-box',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,215,0,0.4)'
                    e.currentTarget.style.background = 'rgba(255,215,0,0.03)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,215,0,0.1)'
                    e.currentTarget.style.background = 'rgba(10,10,10,0.6)'
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: 72,
                      color: 'rgba(255,215,0,0.08)',
                      position: 'absolute',
                      top: 12,
                      right: 20,
                      lineHeight: 1,
                      letterSpacing: -2,
                    }}
                  >
                    {step.num}
                  </div>
                  <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 20, letterSpacing: 2, color: '#FFD700', marginBottom: 12, position: 'relative' }}>{step.title}</h3>
                  <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 14, color: 'rgba(245,245,240,0.55)', lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <style>{`
            .lifecycle-grid { grid-template-columns: repeat(4, 1fr); }
            @media (max-width: 900px) { .lifecycle-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (max-width: 500px) { .lifecycle-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </div>

      {/* Vision CTA */}
      <div
        style={{
          padding: '100px 0',
          background: 'rgba(5,5,5,0.4)',
          backdropFilter: 'blur(8px)',
          textAlign: 'center',
          borderTop: '1px solid rgba(255,215,0,0.1)',
        }}
      >
        <div className="container">
          <AnimatedSection>
            <span className="section-label" style={{ textAlign: 'center', display: 'block' }}>Ready to Help?</span>
            <h2
              style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: 'clamp(36px, 6vw, 72px)',
                letterSpacing: 4,
                color: '#F5F5F0',
                marginBottom: 20,
                lineHeight: 1,
                textShadow: '0 4px 30px rgba(0,0,0,0.8)',
              }}
            >
              BE THE <span style={{ color: '#FFD700' }}>MEANS</span> OF GOOD DEEDS
            </h2>
            <p
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 17,
                color: 'rgba(245,245,240,0.5)',
                maxWidth: 560,
                margin: '0 auto 48px',
                lineHeight: 1.8,
              }}
            >
              Together, we can ensure dignity, opportunity, and hope for every person in our community.
            </p>
            <a
              href="mailto:info@tantech-llc.com?subject=Zariya Donation Inquiry"
              className="btn-primary"
              style={{ fontSize: 20, padding: '16px 48px' }}
            >
              Support Zariya →
            </a>
          </AnimatedSection>
        </div>
      </div>

    </motion.div>
  )
}

import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
}

const services = [
  {
    icon: '⚡',
    title: 'Software & Web Solutions',
    desc: 'Enterprise-grade applications bridging complex business logic with intuitive UX.',
    path: '/software-solutions',
  },
  {
    icon: '🤖',
    title: 'AI & Workflow Automation',
    desc: 'Deploy autonomous systems that transform raw data into predictive business intelligence.',
    path: '/ai-tools',
  },
  {
    icon: '🛒',
    title: 'Shopify Development',
    desc: 'Conversion-optimized Shopify engines using custom Liquid code and data-driven UI.',
    path: '/shopify-sols',
  },
  {
    icon: '📊',
    title: 'Taxation & Compliance',
    desc: 'Proactive fiscal strategies and rigorous compliance frameworks for global commerce.',
    path: '/tax',
  },
  {
    icon: '🤝',
    title: 'Bench Sales & Placement',
    desc: 'Elite network of Tier-1 vendors maximizing talent utilization and minimizing downtime.',
    path: '/bench-sales',
  },
  {
    icon: '👥',
    title: 'Manpower & Staffing',
    desc: 'Technical vetting by senior engineers ensuring precise fits for your stack and culture.',
    path: '/manpower-staffing',
  },
  {
    icon: '🚀',
    title: 'RPO & Executive Placement',
    desc: 'C-suite and key technical leaders sourced for your growth trajectory.',
    path: '/rpo',
  },
]

const stats = [
  { value: 200, suffix: '+', label: 'Projects Delivered' },
  { value: 5, suffix: '+', label: 'Years of Excellence' },
  { value: 50, suffix: '+', label: 'Team Members' },
  { value: 97, suffix: '%', label: 'Client Satisfaction' },
]

const faqs = [
  {
    q: 'What does Tantech offer?',
    a: 'Tantech is a multi-service partner providing high-end software solutions, AI tool integration, Shopify development, and essential business operations like taxation, manpower, and bench sales.',
  },
  {
    q: 'Who does Tantech work with?',
    a: 'We partner with everyone from ambitious startups to established corporations looking to modernize their tech stack or streamline their administrative and staffing needs.',
  },
  {
    q: 'Do you offer custom pricing?',
    a: 'We offer both. While some services like Shopify builds can be packaged, most of our software and AI solutions are quoted based on specific scope and complexity.',
  },
  {
    q: 'How do I get started?',
    a: "Just click 'Book a Call' to share a few details about your project. Our team will reach out within 24 hours to schedule a discovery call.",
  },
]

function CounterStat({ value, suffix, label }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = Math.ceil(value / 60)
    const interval = setInterval(() => {
      start += step
      if (start >= value) { setCount(value); clearInterval(interval) }
      else setCount(start)
    }, 16)
    return () => clearInterval(interval)
  }, [inView, value])

  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(52px, 7vw, 80px)', letterSpacing: 3, color: '#0A0A0A', lineHeight: 1, marginBottom: 8 }}>
        {count}{suffix}
      </div>
      <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 13, letterSpacing: 3, color: 'rgba(10,10,10,0.65)', textTransform: 'uppercase', fontWeight: 600 }}>
        {label}
      </div>
    </div>
  )
}

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false)
  return (
    <AnimatedSection delay={index * 0.08}>
      <div style={{ borderBottom: '1px solid rgba(255,215,0,0.12)', overflow: 'hidden' }}>
        <button
          onClick={() => setOpen(!open)}
          style={{ width: '100%', background: 'none', border: 'none', padding: '24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', gap: 16 }}
        >
          <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 20, letterSpacing: 2, color: open ? '#FFD700' : '#F5F5F0', textAlign: 'left', transition: 'color 0.3s' }}>
            {q}
          </span>
          <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 24, color: '#FFD700', transition: 'transform 0.3s', transform: open ? 'rotate(45deg)' : 'rotate(0deg)', flexShrink: 0 }}>
            +
          </span>
        </button>
        <motion.div initial={false} animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }} transition={{ duration: 0.3 }} style={{ overflow: 'hidden' }}>
          <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 15, color: 'rgba(245,245,240,0.6)', lineHeight: 1.8, paddingBottom: 24, paddingRight: 40 }}>
            {a}
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

function LogoCard3D() {
  const logoRef   = useRef(null)
  const glowRef   = useRef(null)
  const rafRef    = useRef(null)
  const current   = useRef({ rotX: 0, rotY: 0, gx: 50, gy: 50 })
  const target    = useRef({ rotX: 0, rotY: 0, gx: 50, gy: 50 })
  const baseAngle = useRef(0)
  const hovered   = useRef(false)

  useEffect(() => {
    function lerp(a, b, t) { return a + (b - a) * t }
    function tick() {
      // Always spin Y slowly
      baseAngle.current += hovered.current ? 0.3 : 0.6

      const c = current.current
      const t = target.current
      c.rotX = lerp(c.rotX, t.rotX, 0.08)
      c.rotY = lerp(c.rotY, t.rotY, 0.08)
      c.gx   = lerp(c.gx,   t.gx,   0.08)
      c.gy   = lerp(c.gy,   t.gy,   0.08)

      const totalY = baseAngle.current + c.rotY
      const totalX = Math.sin(baseAngle.current * Math.PI / 180) * 12 + c.rotX

      if (logoRef.current) {
        logoRef.current.style.transform =
          `perspective(600px) rotateX(${totalX}deg) rotateY(${totalY}deg)`
      }
      if (glowRef.current) {
        glowRef.current.style.background =
          `radial-gradient(circle at ${c.gx}% ${c.gy}%, rgba(255,215,0,0.18) 0%, transparent 65%)`
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top)  / rect.height
    target.current.rotY =  (x - 0.5) * 60
    target.current.rotX = -(y - 0.5) * 40
    target.current.gx   = x * 100
    target.current.gy   = y * 100
  }

  function handleMouseEnter() { hovered.current = true }

  function handleMouseLeave() {
    hovered.current = false
    target.current.rotX = 0
    target.current.rotY = 0
    target.current.gx   = 50
    target.current.gy   = 50
  }

  return (
    <div onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div
        style={{
          background: 'rgba(15,15,15,0.7)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,215,0,0.2)',
          padding: 60,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div ref={glowRef} style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(255,215,0,0.08) 0%, transparent 65%)', transition: 'none' }} />
        <img
          ref={logoRef}
          src="/logo-dark.png"
          alt="TanTech LLC"
          style={{
            width: '70%',
            maxWidth: 280,
            filter: 'brightness(0) invert(1) drop-shadow(0 0 30px rgba(255,215,0,0.35))',
            position: 'relative',
            zIndex: 1,
            willChange: 'transform',
          }}
        />
        {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((pos) => (
          <div key={pos} style={{ position: 'absolute', [pos.includes('top') ? 'top' : 'bottom']: 0, [pos.includes('left') ? 'left' : 'right']: 0, width: 40, height: 40, borderTop: pos.includes('top') ? '2px solid rgba(255,215,0,0.5)' : 'none', borderBottom: pos.includes('bottom') ? '2px solid rgba(255,215,0,0.5)' : 'none', borderLeft: pos.includes('left') ? '2px solid rgba(255,215,0,0.5)' : 'none', borderRight: pos.includes('right') ? '2px solid rgba(255,215,0,0.5)' : 'none' }} />
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* ── HERO — transparent, animation shows through fully ── */}
      <div
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: 100,
          paddingBottom: 80,
        }}
      >
        {/* Subtle bottom gradient so sections below feel connected */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '35%',
            background: 'linear-gradient(0deg, rgba(0,0,0,0.6) 0%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* Hero content */}
        <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '90px' }}>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(255,215,0,0.1)',
                border: '1px solid rgba(255,215,0,0.3)',
                padding: '6px 16px',
                marginBottom: 28,
                backdropFilter: 'blur(10px)',
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#FFD700', animation: 'pulse 2s infinite', display: 'inline-block' }} />
              <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 12, letterSpacing: 3, color: '#FFD700', textTransform: 'uppercase' }}>
                Available for new projects
              </span>
            </div>

            <h1
              style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: 'clamp(52px, 10vw, 130px)',
                letterSpacing: 4,
                lineHeight: 0.9,
                color: '#F5F5F0',
                marginBottom: 28,
                maxWidth: 900,
                textShadow: '0 4px 40px rgba(0,0,0,0.8)',
              }}
            >
              INTEGRATED TECH &{' '}
              <span style={{ color: '#FFD700' }}>BUSINESS SOLUTIONS</span>
              {' '}FOR GROWING ENTERPRISES
            </h1>

            <p
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 18,
                color: 'rgba(245,245,240,0.75)',
                maxWidth: 580,
                lineHeight: 1.8,
                marginBottom: 40,
                textShadow: '0 2px 20px rgba(0,0,0,0.9)',
              }}
            >
              From custom software architecture to strategic tax compliance, we provide the technical and administrative infrastructure modern businesses need to lead their industry.
            </p>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary" style={{ fontSize: 20, padding: '16px 40px' }}>Book a Call</Link>
              <Link to="/services" className="btn-outline" style={{ fontSize: 20, padding: '16px 40px' }}>Our Services</Link>
            </div>
          </motion.div>
        </div>


        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(0.8); }
          }
        `}</style>
      </div>

      {/* ── SERVICES — glass panel ── */}
      <div className="section glass-section">
        <div className="container">
          <AnimatedSection>
            <span className="section-label">What We Do</span>
            <h2 className="section-title">OUR <span style={{ color: '#FFD700' }}>SERVICES</span></h2>
            <p className="section-desc" style={{ marginBottom: 60 }}>
              Seven core capabilities. One integrated partner. Everything your growing enterprise needs to operate, scale, and lead.
            </p>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 2 }}>
            {services.map((svc, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <Link
                  to={svc.path}
                  style={{
                    display: 'block',
                    background: 'rgba(10,10,10,0.6)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,215,0,0.08)',
                    padding: '36px 32px',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,215,0,0.4)'
                    e.currentTarget.style.background = 'rgba(20,20,20,0.75)'
                    e.currentTarget.style.transform = 'translateY(-6px)'
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(255,215,0,0.08)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,215,0,0.08)'
                    e.currentTarget.style.background = 'rgba(10,10,10,0.6)'
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <div style={{ position: 'absolute', top: 0, left: 0, width: 3, height: '100%', background: '#FFD700', transform: 'scaleY(0)', transformOrigin: 'top', transition: 'transform 0.3s ease' }} className="svc-accent" />
                  <div style={{ fontSize: 36, marginBottom: 16 }}>{svc.icon}</div>
                  <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 24, letterSpacing: 2, color: '#F5F5F0', marginBottom: 12 }}>{svc.title}</h3>
                  <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 14, color: 'rgba(245,245,240,0.55)', lineHeight: 1.7, marginBottom: 20 }}>{svc.desc}</p>
                  <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 12, letterSpacing: 2, color: '#FFD700', textTransform: 'uppercase' }}>Learn More →</span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* ── ABOUT — glass panel ── */}
      <div className="section glass-section-dark" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="about-grid">
            {/* Logo card — 3D mouse-tracking tilt */}
            <AnimatedSection direction="right">
              <LogoCard3D /></AnimatedSection>

            {/* Text */}
            <AnimatedSection direction="left">
              <span className="section-label">About Agency</span>
              <h2 className="section-title">WE ARE A <span style={{ color: '#FFD700' }}>BOUTIQUE</span> TECH AGENCY</h2>
              <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 15, color: 'rgba(245,245,240,0.65)', lineHeight: 1.9, marginBottom: 20 }}>
                We are a boutique agency of passionate experts specializing in the intersection of technology and business operations. At Tantech, we believe in a culture of continuous learning and collective success.
              </p>
              <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 15, color: 'rgba(245,245,240,0.65)', lineHeight: 1.9, marginBottom: 40 }}>
                By focusing on remarkable projects and high-impact results, we turn ambitious ideas into scalable realities.
              </p>
              <div style={{ display: 'flex', gap: 16 }}>
                <Link to="/about" className="btn-primary">Our Story</Link>
                <Link to="/contact" className="btn-outline">Work With Us</Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
        <style>{`@media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
      </div>

      {/* ── STATS — yellow band, signature brand element ── */}
      <div style={{ padding: '80px 0', background: 'rgba(255,215,0,0.92)', backdropFilter: 'blur(10px)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 40 }} className="stats-grid">
            {stats.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <CounterStat value={stat.value} suffix={stat.suffix} label={stat.label} />
              </AnimatedSection>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) { .stats-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 400px) { .stats-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </div>

      {/* ── TESTIMONIAL — glass card ── */}
      <div className="section glass-section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative' }}>
          <AnimatedSection>
            <span className="section-label" style={{ textAlign: 'center', display: 'block' }}>Client Feedback</span>
            <div
              style={{
                maxWidth: 860,
                margin: '0 auto',
                textAlign: 'center',
                padding: '60px 48px',
                background: 'rgba(10,10,10,0.7)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,215,0,0.15)',
                position: 'relative',
              }}
            >
              <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 120, color: 'rgba(255,215,0,0.07)', position: 'absolute', top: -20, left: 30, lineHeight: 1 }}>"</div>
              <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(16px, 2.5vw, 20px)', color: 'rgba(245,245,240,0.85)', lineHeight: 1.8, marginBottom: 32, position: 'relative', fontStyle: 'italic' }}>
                The network TanTech provides is unparalleled. They managed our consultant placement lifecycle with incredible speed, connecting us with Tier-1 vendors and prime partners almost immediately. Our bench time has been virtually eliminated thanks to their strategic talent marketing.
              </p>
              <div style={{ width: 40, height: 2, background: '#FFD700', margin: '0 auto 20px' }} />
              <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 18, letterSpacing: 3, color: '#FFD700' }}>NAS X Solution</div>
              <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 12, color: 'rgba(245,245,240,0.4)', letterSpacing: 2, textTransform: 'uppercase', marginTop: 4 }}>Operations Manager</div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* ── FAQ — glass section ── */}
      <div className="section glass-section-dark">
        <div className="container">
          <AnimatedSection>
            <span className="section-label">FAQ</span>
            <h2 className="section-title">COMMON <span style={{ color: '#FFD700' }}>QUESTIONS</span></h2>
          </AnimatedSection>
          <div style={{ maxWidth: 800, marginTop: 48, borderTop: '1px solid rgba(255,215,0,0.12)' }}>
            {faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} index={i} />)}
          </div>
        </div>
      </div>

      {/* ── CTA — transparent with glow ── */}
      <div style={{ padding: '120px 0', textAlign: 'center', position: 'relative', overflow: 'hidden', borderTop: '1px solid rgba(255,215,0,0.1)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(255,215,0,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative' }}>
          <AnimatedSection>
            <span className="section-label" style={{ display: 'block', textAlign: 'center' }}>Ready to Scale?</span>
            <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(48px, 8vw, 100px)', letterSpacing: 4, lineHeight: 0.9, color: '#F5F5F0', marginBottom: 24, textShadow: '0 4px 40px rgba(0,0,0,0.8)' }}>
              LET'S BUILD SOMETHING<br /><span style={{ color: '#FFD700' }}>REMARKABLE</span>
            </h2>
            <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 17, color: 'rgba(245,245,240,0.55)', maxWidth: 500, margin: '0 auto 48px', lineHeight: 1.8 }}>
              Have a project, idea, or challenge? We'd love to hear it. Let's collaborate and bring something meaningful to life.
            </p>
            <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary" style={{ fontSize: 20, padding: '18px 52px' }}>Get in Touch</Link>
              <Link to="/about" className="btn-outline" style={{ fontSize: 20, padding: '18px 52px' }}>Learn About Us</Link>
            </div>
          </AnimatedSection>
        </div>
      </div>

    </motion.div>
  )
}

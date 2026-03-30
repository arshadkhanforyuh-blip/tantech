import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import AnimatedSection from './AnimatedSection'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.1 } },
}

export default function ServicePage({ service, heroVisual }) {
  const { label, title, subtitle, description, features = [], process = [], stack = [], icon, photos = [] } = service

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* ── HERO ── */}
      <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', position: 'relative', paddingBottom: 80, paddingTop: 140 }}>
        <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: heroVisual ? '1fr 1fr' : '1fr', gap: 60, alignItems: 'center' }} className="service-hero-grid">
            <AnimatedSection direction="right">
              <span className="section-label">{label}</span>
              <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(42px, 7vw, 100px)', color: '#F5F5F0', letterSpacing: 4, lineHeight: 0.9, marginBottom: 24, textShadow: '0 4px 40px rgba(0,0,0,0.9)' }}>
                {title.split('\n').map((line, i) => (
                  <span key={i} style={{ display: 'block' }}>
                    {line.includes('|') ? line.split('|').map((part, j) => (
                      <span key={j} style={j % 2 === 1 ? { color: '#FFD700' } : {}}>{part}</span>
                    )) : line}
                  </span>
                ))}
              </h1>
              <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 17, color: 'rgba(245,245,240,0.7)', maxWidth: 520, lineHeight: 1.8, textShadow: '0 2px 16px rgba(0,0,0,0.9)', marginBottom: 40 }}>
                {description}
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn-primary">Get Started</Link>
                <Link to="/services" className="btn-outline">All Services</Link>
              </div>
            </AnimatedSection>
            {heroVisual && (
              <AnimatedSection direction="left">
                <div style={{ display: 'flex', justifyContent: 'center' }}>{heroVisual}</div>
              </AnimatedSection>
            )}
          </div>
        </div>
      </div>
      <style>{`.service-hero-grid { grid-template-columns: ${heroVisual ? '1fr 1fr' : '1fr'} !important; } @media (max-width: 768px) { .service-hero-grid { grid-template-columns: 1fr !important; } }`}</style>

      {/* ── FEATURES — glass panel ── */}
      {features.length > 0 && (
        <div className="section glass-section">
          <div className="container">
            <AnimatedSection>
              <span className="section-label">What We Offer</span>
              <h2 className="section-title">{subtitle}</h2>
            </AnimatedSection>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginTop: 48 }}>
              {features.map((feat, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div
                    className="card"
                    style={{ height: '100%' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,215,0,0.5)'
                      e.currentTarget.style.transform = 'translateY(-6px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,215,0,0.1)'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    <div style={{ fontSize: 32, marginBottom: 16, filter: 'drop-shadow(0 0 8px rgba(255,215,0,0.5))' }}>{feat.icon}</div>
                    <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 22, letterSpacing: 2, color: '#FFD700', marginBottom: 12 }}>{feat.title}</h3>
                    <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 14, color: 'rgba(245,245,240,0.6)', lineHeight: 1.7 }}>{feat.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── PHOTO GALLERY ── */}
      {photos.length >= 2 && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', position: 'relative' }} className="service-gallery">
            {photos.map((url, i) => (
              <div key={i} style={{ height: 420, position: 'relative', overflow: 'hidden' }}>
                <img
                  src={url}
                  alt=""
                  loading="lazy"
                  style={{
                    width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                    filter: 'grayscale(100%) brightness(0.32) contrast(1.15)',
                    transition: 'transform 0.9s cubic-bezier(0.16,1,0.3,1), filter 0.9s ease',
                  }}
                  onError={e => { e.currentTarget.style.display = 'none' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'scale(1.06)'
                    e.currentTarget.style.filter = 'grayscale(60%) brightness(0.48) contrast(1.1)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'scale(1)'
                    e.currentTarget.style.filter = 'grayscale(100%) brightness(0.32) contrast(1.15)'
                  }}
                />
                <div style={{
                  position: 'absolute', inset: 0, pointerEvents: 'none',
                  background: i === 0
                    ? 'linear-gradient(135deg, rgba(255,215,0,0.13) 0%, transparent 55%)'
                    : 'linear-gradient(225deg, rgba(255,215,0,0.10) 0%, transparent 55%)',
                }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 90, pointerEvents: 'none', background: 'linear-gradient(0deg, rgba(0,0,0,0.75) 0%, transparent 100%)' }} />
                {i === 0 && (
                  <div style={{ position: 'absolute', bottom: 22, left: 28, fontFamily: 'Space Grotesk, sans-serif', fontSize: 10, letterSpacing: 4, color: 'rgba(255,215,0,0.55)', textTransform: 'uppercase' }}>
                    In Practice
                  </div>
                )}
              </div>
            ))}
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', width: 1, background: 'rgba(255,215,0,0.18)', zIndex: 2, pointerEvents: 'none' }} />
          </div>
          <div style={{ height: 2, background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.45) 30%, rgba(255,215,0,0.45) 70%, transparent)' }} />
          <style>{`@media(max-width:640px){.service-gallery{grid-template-columns:1fr!important;}.service-gallery>div{height:260px!important;}}`}</style>
        </div>
      )}

      {/* ── TECH STACK — glass panel ── */}
      {stack.length > 0 && (
        <div className="section glass-section-dark">
          <div className="container">
            <AnimatedSection>
              <span className="section-label">Technology</span>
              <h2 className="section-title">OUR <span style={{ color: '#FFD700' }}>STACK</span></h2>
            </AnimatedSection>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 40 }}>
              {stack.map((tech, i) => (
                <AnimatedSection key={i} delay={i * 0.06}>
                  <div
                    style={{
                      background: 'rgba(18,18,18,0.95)',
                      border: '1px solid rgba(255,215,0,0.15)',
                      padding: '12px 24px',
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: 14,
                      fontWeight: 600,
                      color: '#F5F5F0',
                      letterSpacing: 1,
                      transition: 'all 0.3s',
                      cursor: 'default',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#FFD700'
                      e.currentTarget.style.color = '#FFD700'
                      e.currentTarget.style.background = 'rgba(255,215,0,0.08)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,215,0,0.15)'
                      e.currentTarget.style.color = '#F5F5F0'
                      e.currentTarget.style.background = 'rgba(15,15,15,0.65)'
                    }}
                  >
                    {tech}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── PROCESS — glass panel ── */}
      {process.length > 0 && (
        <div className="section glass-section">
          <div className="container">
            <AnimatedSection>
              <span className="section-label">Methodology</span>
              <h2 className="section-title">OUR <span style={{ color: '#FFD700' }}>PROCESS</span></h2>
            </AnimatedSection>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 2, marginTop: 48 }}>
              {process.map((step, i) => (
                <AnimatedSection key={i} delay={i * 0.1} style={{ height: '100%' }}>
                  <div
                    style={{
                      background: 'rgba(10,10,10,0.98)',
                      border: '1px solid rgba(255,215,0,0.1)',
                      padding: '40px 28px',
                      position: 'relative',
                      transition: 'all 0.3s',
                      height: '100%',
                      boxSizing: 'border-box',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(20,20,20,0.8)'
                      e.currentTarget.style.borderColor = 'rgba(255,215,0,0.35)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(8,8,8,0.7)'
                      e.currentTarget.style.borderColor = 'rgba(255,215,0,0.1)'
                    }}
                  >
                    <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 72, color: 'rgba(255,215,0,0.08)', position: 'absolute', top: 12, right: 20, lineHeight: 1, letterSpacing: -2 }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 20, letterSpacing: 2, color: '#FFD700', marginBottom: 12, position: 'relative' }}>{step.title}</h3>
                    <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 14, color: 'rgba(245,245,240,0.55)', lineHeight: 1.7, position: 'relative' }}>{step.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── CTA — transparent ── */}
      <div style={{ padding: '100px 0', textAlign: 'center', borderTop: '1px solid rgba(255,215,0,0.1)' }}>
        <div className="container">
          <AnimatedSection>
            <span className="section-label" style={{ textAlign: 'center', display: 'block' }}>Ready to Start?</span>
            <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(40px, 6vw, 80px)', letterSpacing: 4, color: '#F5F5F0', marginBottom: 20, textShadow: '0 4px 30px rgba(0,0,0,0.8)' }}>
              LET'S BUILD SOMETHING <span style={{ color: '#FFD700' }}>GREAT</span>
            </h2>
            <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 16, color: 'rgba(245,245,240,0.5)', marginBottom: 40 }}>
              Book a free discovery call and let's discuss how we can help you scale.
            </p>
            <Link to="/contact" className="btn-primary" style={{ fontSize: 20, padding: '16px 48px' }}>Book a Call →</Link>
          </AnimatedSection>
        </div>
      </div>

    </motion.div>
  )
}

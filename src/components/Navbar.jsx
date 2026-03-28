import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const serviceItems = [
  { icon: '⚡', label: 'Software & Web Solutions', path: '/software-solutions' },
  { icon: '🤖', label: 'AI & Workflow Automation',  path: '/ai-tools' },
  { icon: '🛒', label: 'Shopify Development',       path: '/shopify-sols' },
  { icon: '📊', label: 'Taxation & Compliance',     path: '/tax' },
  { icon: '🤝', label: 'Bench Sales & Placement',   path: '/bench-sales' },
  { icon: '👥', label: 'Manpower & Staffing',       path: '/manpower-staffing' },
  { icon: '🚀', label: 'RPO & Executive Placement', path: '/rpo' },
]

const navLinks = [
  { label: 'Home',    path: '/' },
  { label: 'About',  path: '/about' },
  { label: 'Trust',  path: '/trust' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]               = useState(false)
  const [menuOpen, setMenuOpen]               = useState(false)
  const [dropOpen, setDropOpen]               = useState(false)
  const [mobileServOpen, setMobileServOpen]   = useState(false)
  const location                              = useLocation()
  const closeTimer                            = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setDropOpen(false)
    setMobileServOpen(false)
  }, [location.pathname])

  function openDrop()  { clearTimeout(closeTimer.current); setDropOpen(true) }
  function closeDrop() { closeTimer.current = setTimeout(() => setDropOpen(false), 160) }

  const isServiceActive = serviceItems.some(s => location.pathname === s.path) || location.pathname === '/services'

  const linkStyle = (active) => ({
    fontFamily: 'Space Grotesk, sans-serif',
    fontSize: 13,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: active ? '#FFD700' : 'rgba(245,245,240,0.7)',
    padding: '8px 14px',
    position: 'relative',
    transition: 'color 0.2s ease',
    fontWeight: 500,
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 5,
  })

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          transition: 'all 0.3s ease',
          background: scrolled ? 'rgba(10,10,10,0.95)' : 'rgba(0,0,0,0.55)',
          backdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(255,215,0,0.15)' : 'none',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>

          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <img src="/logo-dark.png" alt="TanTech LLC"
              style={{ height: 44, width: 'auto', filter: 'brightness(0) invert(1)' }}
              onError={(e) => { e.target.style.display = 'none' }} />
            <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 22, letterSpacing: 4, color: '#FFD700' }}>
              TANTECH
            </span>
          </Link>

          {/* ── Desktop Nav ── */}
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }} className="desktop-nav">

            {/* Home */}
            <Link to="/" style={linkStyle(location.pathname === '/')}
              onMouseEnter={e => e.currentTarget.style.color = '#FFD700'}
              onMouseLeave={e => { if (location.pathname !== '/') e.currentTarget.style.color = 'rgba(245,245,240,0.7)' }}>
              Home
              {location.pathname === '/' && (
                <motion.span layoutId="nav-underline"
                  style={{ position: 'absolute', bottom: 0, left: 14, right: 14, height: 2, background: '#FFD700', display: 'block' }} />
              )}
            </Link>

            {/* Services — with dropdown */}
            <div style={{ position: 'relative' }} onMouseEnter={openDrop} onMouseLeave={closeDrop}>
              <Link to="/services"
                style={linkStyle(isServiceActive)}
                onMouseEnter={e => e.currentTarget.style.color = '#FFD700'}
                onMouseLeave={e => { if (!isServiceActive) e.currentTarget.style.color = 'rgba(245,245,240,0.7)' }}>
                Services
                <span style={{ fontSize: 9, opacity: 0.7, transition: 'transform 0.2s', display: 'inline-block', transform: dropOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>▾</span>
                {isServiceActive && (
                  <motion.span layoutId="nav-underline"
                    style={{ position: 'absolute', bottom: 0, left: 14, right: 14, height: 2, background: '#FFD700', display: 'block' }} />
                )}
              </Link>

              <AnimatePresence>
                {dropOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.15 }}
                    style={{
                      position: 'absolute', top: 'calc(100% + 4px)', left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'rgba(8,8,8,0.97)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255,215,0,0.18)',
                      minWidth: 270,
                      zIndex: 200,
                      overflow: 'hidden',
                    }}
                  >
                    {serviceItems.map((svc) => (
                      <Link key={svc.path} to={svc.path}
                        style={{
                          display: 'flex', alignItems: 'center', gap: 10,
                          padding: '11px 18px',
                          fontFamily: 'Space Grotesk, sans-serif',
                          fontSize: 13, fontWeight: 500,
                          color: location.pathname === svc.path ? '#FFD700' : 'rgba(245,245,240,0.72)',
                          transition: 'all 0.15s',
                          borderLeft: location.pathname === svc.path ? '2px solid #FFD700' : '2px solid transparent',
                          background: location.pathname === svc.path ? 'rgba(255,215,0,0.05)' : 'transparent',
                          textDecoration: 'none',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.background = 'rgba(255,215,0,0.07)'
                          e.currentTarget.style.color = '#FFD700'
                          e.currentTarget.style.borderLeftColor = '#FFD700'
                        }}
                        onMouseLeave={e => {
                          if (location.pathname !== svc.path) {
                            e.currentTarget.style.background = 'transparent'
                            e.currentTarget.style.color = 'rgba(245,245,240,0.72)'
                            e.currentTarget.style.borderLeftColor = 'transparent'
                          }
                        }}
                      >
                        <span style={{ fontSize: 17, flexShrink: 0 }}>{svc.icon}</span>
                        <span style={{ flex: 1 }}>{svc.label}</span>
                        <span style={{ fontSize: 11, opacity: 0.35 }}>→</span>
                      </Link>
                    ))}
                    <div style={{ borderTop: '1px solid rgba(255,215,0,0.1)', padding: '8px 18px' }}>
                      <Link to="/services"
                        style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 12, letterSpacing: 2.5, color: '#FFD700', opacity: 0.8 }}
                        onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                        onMouseLeave={e => e.currentTarget.style.opacity = '0.8'}>
                        VIEW ALL SERVICES →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Remaining links */}
            {navLinks.filter(l => l.label !== 'Home').map((link) => (
              <Link key={link.path} to={link.path}
                style={linkStyle(location.pathname === link.path)}
                onMouseEnter={e => e.currentTarget.style.color = '#FFD700'}
                onMouseLeave={e => { if (location.pathname !== link.path) e.currentTarget.style.color = 'rgba(245,245,240,0.7)' }}>
                {link.label}
                {location.pathname === link.path && (
                  <motion.span layoutId="nav-underline"
                    style={{ position: 'absolute', bottom: 0, left: 14, right: 14, height: 2, background: '#FFD700', display: 'block' }} />
                )}
              </Link>
            ))}

            <Link to="/contact" className="btn-primary" style={{ fontSize: 14, padding: '10px 24px', marginLeft: 16 }}>
              Book a Call
            </Link>
          </div>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'none' }}
            className="hamburger" aria-label="Toggle menu">
            <div style={{ width: 24, height: 2, background: menuOpen ? '#FFD700' : '#F5F5F0', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none', marginBottom: 5 }} />
            <div style={{ width: 24, height: 2, background: menuOpen ? 'transparent' : '#F5F5F0', transition: 'all 0.3s', marginBottom: 5 }} />
            <div style={{ width: 24, height: 2, background: menuOpen ? '#FFD700' : '#F5F5F0', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
          </button>
        </div>

        {/* ── Mobile Menu ── */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              style={{ background: 'rgba(10,10,10,0.98)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(255,215,0,0.15)', overflow: 'hidden' }}
            >
              <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 4 }}>
                {/* Home */}
                <Link to="/" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 28, letterSpacing: 3, color: location.pathname === '/' ? '#FFD700' : '#F5F5F0', padding: '12px 0', borderBottom: '1px solid rgba(255,215,0,0.08)', display: 'block', transition: 'color 0.2s' }}>
                  Home
                </Link>

                {/* Services — expandable */}
                <div>
                  <button
                    onClick={() => setMobileServOpen(!mobileServOpen)}
                    style={{
                      width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                      fontFamily: 'Bebas Neue, sans-serif', fontSize: 28, letterSpacing: 3,
                      color: isServiceActive ? '#FFD700' : '#F5F5F0',
                      padding: '12px 0', borderBottom: mobileServOpen ? 'none' : '1px solid rgba(255,215,0,0.08)',
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      transition: 'color 0.2s',
                    }}
                  >
                    Services
                    <span style={{ fontSize: 20, transform: mobileServOpen ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.25s', color: '#FFD700' }}>+</span>
                  </button>

                  <AnimatePresence>
                    {mobileServOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ overflow: 'hidden', borderBottom: '1px solid rgba(255,215,0,0.08)', marginBottom: 4 }}
                      >
                        {serviceItems.map((svc) => (
                          <Link key={svc.path} to={svc.path}
                            style={{
                              display: 'flex', alignItems: 'center', gap: 12,
                              padding: '10px 0 10px 16px',
                              fontFamily: 'Space Grotesk, sans-serif', fontSize: 14, fontWeight: 500,
                              color: location.pathname === svc.path ? '#FFD700' : 'rgba(245,245,240,0.65)',
                              borderLeft: location.pathname === svc.path ? '2px solid #FFD700' : '2px solid rgba(255,215,0,0.2)',
                              marginLeft: 8, transition: 'color 0.2s',
                            }}>
                            <span style={{ fontSize: 18 }}>{svc.icon}</span>
                            {svc.label}
                          </Link>
                        ))}
                        <Link to="/services"
                          style={{ display: 'block', padding: '10px 0 10px 16px', marginLeft: 8, fontFamily: 'Bebas Neue, sans-serif', fontSize: 14, letterSpacing: 2, color: '#FFD700', opacity: 0.75 }}>
                          VIEW ALL →
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Rest of links */}
                {navLinks.filter(l => l.label !== 'Home').map((link) => (
                  <Link key={link.path} to={link.path}
                    style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 28, letterSpacing: 3, color: location.pathname === link.path ? '#FFD700' : '#F5F5F0', padding: '12px 0', borderBottom: '1px solid rgba(255,215,0,0.08)', display: 'block', transition: 'color 0.2s' }}>
                    {link.label}
                  </Link>
                ))}

                <Link to="/contact" className="btn-primary" style={{ marginTop: 16, textAlign: 'center' }}>
                  Book a Call
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger   { display: block !important; }
        }
      `}</style>
    </>
  )
}

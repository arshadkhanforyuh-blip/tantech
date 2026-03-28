import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Trust', path: '/trust' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.3s ease',
          background: scrolled ? 'rgba(10,10,10,0.95)' : 'rgba(0,0,0,0.55)',
          backdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(255,215,0,0.15)' : 'none',
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 72,
          }}
        >
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <img
              src="/logo-dark.png"
              alt="TanTech LLC"
              style={{ height: 44, width: 'auto', filter: 'brightness(0) invert(1)' }}
              onError={(e) => { e.target.style.display = 'none' }}
            />
            <span
              style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: 22,
                letterSpacing: 4,
                color: '#FFD700',
              }}
            >
              TANTECH
            </span>
          </Link>

          {/* Desktop Nav */}
          <div
            style={{
              display: 'flex',
              gap: 8,
              alignItems: 'center',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: 13,
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                  color:
                    location.pathname === link.path
                      ? '#FFD700'
                      : 'rgba(245,245,240,0.7)',
                  padding: '8px 14px',
                  position: 'relative',
                  transition: 'color 0.2s ease',
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => (e.target.style.color = '#FFD700')}
                onMouseLeave={(e) => {
                  if (location.pathname !== link.path) {
                    e.target.style.color = 'rgba(245,245,240,0.7)'
                  }
                }}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.span
                    layoutId="nav-underline"
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 14,
                      right: 14,
                      height: 2,
                      background: '#FFD700',
                      display: 'block',
                    }}
                  />
                )}
              </Link>
            ))}

            <Link
              to="/contact"
              className="btn-primary"
              style={{ fontSize: 14, padding: '10px 24px', marginLeft: 16 }}
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 8,
              display: 'none',
            }}
            className="hamburger"
            aria-label="Toggle menu"
          >
            <div
              style={{
                width: 24,
                height: 2,
                background: menuOpen ? '#FFD700' : '#F5F5F0',
                transition: 'all 0.3s ease',
                transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none',
                marginBottom: 5,
              }}
            />
            <div
              style={{
                width: 24,
                height: 2,
                background: menuOpen ? 'transparent' : '#F5F5F0',
                transition: 'all 0.3s ease',
                marginBottom: 5,
              }}
            />
            <div
              style={{
                width: 24,
                height: 2,
                background: menuOpen ? '#FFD700' : '#F5F5F0',
                transition: 'all 0.3s ease',
                transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
              }}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                background: 'rgba(10,10,10,0.98)',
                backdropFilter: 'blur(20px)',
                borderTop: '1px solid rgba(255,215,0,0.15)',
                overflow: 'hidden',
              }}
            >
              <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 4 }}>
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    style={{
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: 28,
                      letterSpacing: 3,
                      color: location.pathname === link.path ? '#FFD700' : '#F5F5F0',
                      padding: '12px 0',
                      borderBottom: '1px solid rgba(255,215,0,0.08)',
                      display: 'block',
                      transition: 'color 0.2s',
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="btn-primary"
                  style={{ marginTop: 16, textAlign: 'center' }}
                >
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
          .hamburger { display: block !important; }
        }
      `}</style>
    </>
  )
}

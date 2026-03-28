import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const serviceLinks = [
  { label: 'Software & Web Solutions', path: '/software-solutions' },
  { label: 'AI & Workflow Automation', path: '/ai-tools' },
  { label: 'Shopify Development', path: '/shopify-sols' },
  { label: 'Taxation & Compliance', path: '/tax' },
  { label: 'Bench Sales & Placement', path: '/bench-sales' },
  { label: 'Manpower & Staffing', path: '/manpower-staffing' },
  { label: 'RPO & Executive Placement', path: '/rpo' },
]

const quickLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Trust Initiative', path: '/trust' },
  { label: 'Contact Us', path: '/contact' },
]

export default function Footer() {
  return (
    <footer
      style={{
        background: 'rgba(3,3,3,0.82)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(255,215,0,0.12)',
        padding: '80px 0 40px',
      }}
    >
      <div className="container">
        {/* Top row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1.5fr',
            gap: 48,
            marginBottom: 60,
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <img
                src="/logo-dark.png"
                alt="TanTech"
                style={{ height: 48, width: 'auto', filter: 'brightness(0) invert(1)' }}
                onError={(e) => { e.target.style.display = 'none' }}
              />
              <span
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: 28,
                  letterSpacing: 6,
                  color: '#FFD700',
                }}
              >
                TANTECH LLC
              </span>
            </Link>
            <p
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 14,
                color: 'rgba(245,245,240,0.5)',
                lineHeight: 1.8,
                marginBottom: 24,
                maxWidth: 300,
              }}
            >
              An international technology house reimagining the intersection of high-performance code and business operations.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { icon: 'in', label: 'LinkedIn', href: 'https://linkedin.com/company/tantech-llc-consulting' },
                { icon: 'ig', label: 'Instagram', href: 'https://www.instagram.com/tantechllc/' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: 40,
                    height: 40,
                    border: '1px solid rgba(255,215,0,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Bebas Neue, sans-serif',
                    fontSize: 14,
                    color: '#FFD700',
                    transition: 'all 0.3s',
                    letterSpacing: 1,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#FFD700'
                    e.currentTarget.style.color = '#0A0A0A'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.color = '#FFD700'
                  }}
                >
                  {s.icon.toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: 18,
                letterSpacing: 3,
                color: '#FFD700',
                marginBottom: 20,
              }}
            >
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {quickLinks.map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: 14,
                    color: 'rgba(245,245,240,0.55)',
                    transition: 'color 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFD700')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245,245,240,0.55)')}
                >
                  <span style={{ color: '#FFD700', fontSize: 10 }}>▶</span>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: 18,
                letterSpacing: 3,
                color: '#FFD700',
                marginBottom: 20,
              }}
            >
              Our Services
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {serviceLinks.map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: 13,
                    color: 'rgba(245,245,240,0.55)',
                    transition: 'color 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFD700')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245,245,240,0.55)')}
                >
                  <span style={{ color: '#FFD700', fontSize: 10 }}>▶</span>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,215,0,0.1)', paddingTop: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 13, color: 'rgba(245,245,240,0.3)' }}>
            © 2026 — All rights reserved. TanTech LLC
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            <a
              href="mailto:info@tantech-llc.com"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 13, color: 'rgba(245,245,240,0.4)', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.target.style.color = '#FFD700')}
              onMouseLeave={(e) => (e.target.style.color = 'rgba(245,245,240,0.4)')}
            >
              info@tantech-llc.com
            </a>
            <a
              href="tel:+17734448207"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 13, color: 'rgba(245,245,240,0.4)', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.target.style.color = '#FFD700')}
              onMouseLeave={(e) => (e.target.style.color = 'rgba(245,245,240,0.4)')}
            >
              +1 (773) 444-8207
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}

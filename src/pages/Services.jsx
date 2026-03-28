import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.1 } },
}

const services = [
  {
    num: '01',
    icon: '⚡',
    title: 'Software & Web Solutions',
    short: 'Enterprise-grade applications built to scale.',
    desc: 'We engineer high-performance, enterprise-grade applications that bridge the gap between complex business logic and intuitive user experience.',
    tags: ['React', 'Next.js', 'Node.js', 'AWS'],
    path: '/software-solutions',
  },
  {
    num: '02',
    icon: '🤖',
    title: 'AI & Workflow Automation',
    short: 'Intelligent systems. Infinite scale.',
    desc: 'We leverage specialized machine learning expertise to deploy autonomous systems that transform raw data into predictive, cost-saving business intelligence.',
    tags: ['Python', 'TensorFlow', 'MLOps', 'OpenAI'],
    path: '/ai-tools',
  },
  {
    num: '03',
    icon: '🛒',
    title: 'Shopify Development',
    short: 'Conversion-optimized eCommerce at scale.',
    desc: 'We move beyond basic templates to build conversion-optimized Shopify engines using custom Liquid code and data-driven UI/UX architecture.',
    tags: ['Shopify', 'Liquid', 'Hydrogen', 'Storefront API'],
    path: '/shopify-sols',
  },
  {
    num: '04',
    icon: '📊',
    title: 'Taxation & Compliance',
    short: 'Protect your bottom line globally.',
    desc: 'We protect your bottom line by architecting proactive fiscal strategies and rigorous compliance frameworks tailored for global commerce.',
    tags: ['IRS Compliance', 'GST/VAT', 'Tax Strategy', 'Audit Defense'],
    path: '/tax',
  },
  {
    num: '05',
    icon: '🤝',
    title: 'Bench Sales & Placement',
    short: 'Maximize talent. Minimize downtime.',
    desc: 'We maximize talent utilization and minimize downtime by leveraging an elite network of Tier-1 vendors and prime implementation partners.',
    tags: ['Tier-1 Vendors', 'Prime Partners', 'H1B', 'GC/Citizen'],
    path: '/bench-sales',
  },
  {
    num: '06',
    icon: '👥',
    title: 'Manpower & Staffing',
    short: 'The right hire, the first time.',
    desc: 'We eliminate hiring friction through technical vetting by senior engineers, ensuring every hire is a precise fit for both your stack and your culture.',
    tags: ['Technical Vetting', 'W2/C2C', 'Contract', 'Full-Time'],
    path: '/manpower-staffing',
  },
  {
    num: '07',
    icon: '🚀',
    title: 'RPO & Executive Placement',
    short: 'C-suite and key leaders for IPO readiness.',
    desc: 'We eliminate RPO talent gaps by sourcing C-suite and key technical leaders, aligning equity incentives, and streamlining HR processes.',
    tags: ['C-Suite', 'Equity Alignment', 'RPO', 'Executive Search'],
    path: '/rpo',
  },
]

export default function Services() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {/* Hero */}
      <div
        style={{
          paddingTop: 160,
          paddingBottom: 80,
          background: 'rgba(5,5,5,0.6)', backdropFilter: 'blur(14px)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(255,215,0,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,215,0,0.04) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="container" style={{ position: 'relative' }}>
          <AnimatedSection>
            <span className="section-label">What We Do</span>
            <h1
              style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: 'clamp(60px, 11vw, 130px)',
                letterSpacing: 4,
                lineHeight: 0.9,
                color: '#F5F5F0',
                marginBottom: 28,
              }}
            >
              OUR <span style={{ color: '#FFD700' }}>SERVICES</span>
            </h1>
            <p
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 18,
                color: 'rgba(245,245,240,0.6)',
                maxWidth: 600,
                lineHeight: 1.8,
              }}
            >
              Seven core capabilities. One integrated partner. Everything your growing enterprise needs to operate, scale, and lead its industry.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Services List */}
      <div style={{ background: 'rgba(8,8,8,0.72)', backdropFilter: 'blur(14px)' }}>
        <div className="container" style={{ padding: '0 24px' }}>
          {services.map((svc, i) => (
            <AnimatedSection key={i} delay={0}>
              <Link
                to={svc.path}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr auto',
                  gap: 40,
                  alignItems: 'center',
                  padding: '48px 0',
                  borderBottom: '1px solid rgba(255,215,0,0.1)',
                  transition: 'all 0.3s',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
                className="service-row"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,215,0,0.02)'
                  e.currentTarget.style.paddingLeft = '16px'
                  e.currentTarget.style.paddingRight = '16px'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.paddingLeft = '0'
                  e.currentTarget.style.paddingRight = '0'
                }}
              >
                <div
                  style={{
                    fontFamily: 'Bebas Neue, sans-serif',
                    fontSize: 52,
                    color: 'rgba(255,215,0,0.15)',
                    letterSpacing: -2,
                    lineHeight: 1,
                  }}
                >
                  {svc.num}
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 10 }}>
                    <span style={{ fontSize: 28 }}>{svc.icon}</span>
                    <h2
                      style={{
                        fontFamily: 'Bebas Neue, sans-serif',
                        fontSize: 'clamp(22px, 3vw, 36px)',
                        letterSpacing: 2,
                        color: '#F5F5F0',
                        margin: 0,
                      }}
                    >
                      {svc.title}
                    </h2>
                  </div>
                  <p
                    style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: 15,
                      color: 'rgba(245,245,240,0.55)',
                      lineHeight: 1.7,
                      marginBottom: 16,
                      maxWidth: 600,
                    }}
                  >
                    {svc.desc}
                  </p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {svc.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          background: 'rgba(255,215,0,0.07)',
                          border: '1px solid rgba(255,215,0,0.2)',
                          color: 'rgba(245,245,240,0.6)',
                          fontSize: 11,
                          padding: '4px 12px',
                          fontFamily: 'Space Grotesk, sans-serif',
                          letterSpacing: 1,
                          fontWeight: 500,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: 'Bebas Neue, sans-serif',
                    fontSize: 28,
                    color: '#FFD700',
                    transition: 'transform 0.3s',
                  }}
                  className="arrow-icon"
                >
                  →
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div
        style={{
          padding: '100px 0',
          background: 'rgba(5,5,5,0.6)', backdropFilter: 'blur(14px)',
          textAlign: 'center',
          borderTop: '1px solid rgba(255,215,0,0.1)',
        }}
      >
        <div className="container">
          <AnimatedSection>
            <span className="section-label" style={{ display: 'block', textAlign: 'center' }}>Not Sure Where to Start?</span>
            <h2
              style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: 'clamp(36px, 6vw, 72px)',
                letterSpacing: 4,
                color: '#F5F5F0',
                marginBottom: 20,
              }}
            >
              LET'S TALK ABOUT{' '}
              <span style={{ color: '#FFD700' }}>YOUR NEEDS</span>
            </h2>
            <p
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 16,
                color: 'rgba(245,245,240,0.5)',
                marginBottom: 40,
                maxWidth: 500,
                margin: '0 auto 40px',
              }}
            >
              Book a free discovery call. We'll discuss your goals and recommend the right mix of services to help you scale.
            </p>
            <Link to="/contact" className="btn-primary" style={{ fontSize: 20, padding: '16px 48px' }}>
              Book a Free Call →
            </Link>
          </AnimatedSection>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .service-row { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </motion.div>
  )
}

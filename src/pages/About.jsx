import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.1 } },
}

const steps = [
  {
    num: '01',
    title: 'Discovery & Insight',
    desc: "We start by diving deep into your brand's story, goals, and audience. This helps us uncover what truly sets you apart and guides every creative decision ahead.",
    icon: '🔍',
  },
  {
    num: '02',
    title: 'Strategy Driven Design',
    desc: 'Every idea we bring to life is backed by strategy. We combine creativity with data-driven thinking to craft digital experiences that connect and convert.',
    icon: '🎯',
  },
  {
    num: '03',
    title: 'Evolve & Refine',
    desc: "Design doesn't stop at delivery. We analyze, adapt, and refine continuously, ensuring your brand grows stronger with every iteration.",
    icon: '🔄',
  },
]

const values = [
  { icon: '⚡', title: 'Speed', desc: 'We move fast without breaking things. Rapid iteration, decisive action.' },
  { icon: '🏆', title: 'Excellence', desc: 'We hold ourselves to the highest standard in everything we deliver.' },
  { icon: '🤝', title: 'Partnership', desc: 'Your success is our success. We invest in long-term relationships.' },
  { icon: '💡', title: 'Innovation', desc: 'Cutting-edge solutions built for the demands of tomorrow.' },
]

export default function About() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {/* Hero */}
      <div
        style={{
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'flex-end',
          paddingBottom: 80,
          paddingTop: 160,
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
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '40%',
            background: 'linear-gradient(0deg, #0A0A0A 0%, transparent 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '20%',
            right: '5%',
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,215,0,0.05) 0%, transparent 70%)',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <AnimatedSection>
            <span className="section-label">About TanTech</span>
            <h1
              style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: 'clamp(60px, 12vw, 140px)',
                letterSpacing: 4,
                lineHeight: 0.85,
                color: '#F5F5F0',
                marginBottom: 32,
              }}
            >
              HELLO,<br />
              WE ARE <span style={{ color: '#FFD700' }}>TANTECH.</span>
            </h1>
            <p
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 20,
                color: 'rgba(245,245,240,0.65)',
                maxWidth: 660,
                lineHeight: 1.8,
              }}
            >
              We're a team of specialists creating integrated tech and business solutions that drive transformation for ambitious companies worldwide.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Story */}
      <div className="section glass-section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 80,
              alignItems: 'center',
            }}
            className="story-grid"
          >
            <AnimatedSection direction="right">
              <span className="section-label">Our Story</span>
              <h2 className="section-title">
                FROM MODEST ORIGINS TO A <span style={{ color: '#FFD700' }}>RELIABLE</span> DIGITAL ALLY
              </h2>
              <p
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: 15,
                  color: 'rgba(245,245,240,0.6)',
                  lineHeight: 1.9,
                  marginBottom: 20,
                }}
              >
                We help ambitious companies navigate the digital landscape with precision, intelligence, and speed. Expect high-performance software architecture, seamless Shopify ecosystems, and elite staffing solutions crafted to power your next big leap.
              </p>
              <p
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: 15,
                  color: 'rgba(245,245,240,0.6)',
                  lineHeight: 1.9,
                  marginBottom: 40,
                }}
              >
                We help brands grow through strategy, design, and technology. At TanTech, we believe in a culture of continuous learning and collective success — turning ambitious ideas into scalable realities.
              </p>
              <Link to="/contact" className="btn-primary">Work With Us</Link>
            </AnimatedSection>

            <AnimatedSection direction="left">
              <div
                style={{
                  position: 'relative',
                  padding: 40,
                }}
              >
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
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(135deg, rgba(255,215,0,0.05) 0%, transparent 60%)',
                    }}
                  />
                  <div
                    style={{
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: 14,
                      letterSpacing: 4,
                      color: '#FFD700',
                      marginBottom: 20,
                    }}
                  >
                    OUR TAGLINE
                  </div>
                  <p
                    style={{
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: 'clamp(24px, 4vw, 40px)',
                      letterSpacing: 2,
                      color: '#F5F5F0',
                      lineHeight: 1.2,
                      position: 'relative',
                    }}
                  >
                    AN INTERNATIONAL TECHNOLOGY HOUSE REIMAGINING THE INTERSECTION OF HIGH-PERFORMANCE CODE AND BUSINESS OPERATIONS.
                  </p>
                </div>
                {/* Decorative elements */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: 2,
                    height: 80,
                    background: '#FFD700',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: 80,
                    height: 2,
                    background: '#FFD700',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: 2,
                    height: 80,
                    background: '#FFD700',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: 80,
                    height: 2,
                    background: '#FFD700',
                  }}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
        <style>{`
          .story-grid { grid-template-columns: 1fr 1fr; }
          @media (max-width: 768px) { .story-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </div>

      {/* Values */}
      <div className="section glass-section-dark">
        <div className="container">
          <AnimatedSection>
            <span className="section-label">Core Values</span>
            <h2 className="section-title">
              WHAT WE <span style={{ color: '#FFD700' }}>STAND FOR</span>
            </h2>
          </AnimatedSection>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 2,
              marginTop: 48,
            }}
            className="values-grid"
          >
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.1} style={{ height: '100%' }}>
                <div
                  style={{
                    background: 'rgba(8,8,8,0.68)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,215,0,0.08)',
                    padding: '40px 28px',
                    transition: 'all 0.3s',
                    cursor: 'default',
                    flex: 1,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,215,0,0.03)'
                    e.currentTarget.style.borderColor = 'rgba(255,215,0,0.4)'
                    e.currentTarget.style.transform = 'translateY(-6px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#111'
                    e.currentTarget.style.borderColor = 'rgba(255,215,0,0.08)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <div style={{ fontSize: 36, marginBottom: 20 }}>{v.icon}</div>
                  <h3
                    style={{
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: 24,
                      letterSpacing: 2,
                      color: '#FFD700',
                      marginBottom: 12,
                    }}
                  >
                    {v.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: 14,
                      color: 'rgba(245,245,240,0.55)',
                      lineHeight: 1.7,
                    }}
                  >
                    {v.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <style>{`
            .values-grid { grid-template-columns: repeat(4, 1fr); }
            @media (max-width: 900px) { .values-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (max-width: 500px) { .values-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </div>

      {/* Approach */}
      <div className="section glass-section">
        <div className="container">
          <AnimatedSection>
            <span className="section-label">Our Approach</span>
            <h2 className="section-title">
              HOW WE <span style={{ color: '#FFD700' }}>WORK</span>
            </h2>
          </AnimatedSection>
          <div style={{ marginTop: 60, position: 'relative' }}>
            {/* Connecting line */}
            <div
              style={{
                position: 'absolute',
                top: 32,
                left: 32,
                right: 32,
                height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.3), transparent)',
                pointerEvents: 'none',
              }}
              className="hide-mobile"
            />
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 24,
              }}
              className="approach-grid"
            >
              {steps.map((step, i) => (
                <AnimatedSection key={i} delay={i * 0.15} style={{ height: '100%' }}>
                  <div
                    style={{
                      background: 'rgba(8,8,8,0.68)',
                    backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255,215,0,0.1)',
                      padding: '48px 32px',
                      position: 'relative',
                      transition: 'all 0.3s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,215,0,0.5)'
                      e.currentTarget.style.transform = 'translateY(-8px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,215,0,0.1)'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    <div
                      style={{
                        width: 56,
                        height: 56,
                        border: '2px solid #FFD700',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'Bebas Neue, sans-serif',
                        fontSize: 22,
                        color: '#FFD700',
                        marginBottom: 24,
                        letterSpacing: 2,
                        background: 'rgba(255,215,0,0.05)',
                      }}
                    >
                      {step.num}
                    </div>
                    <div style={{ fontSize: 28, marginBottom: 16 }}>{step.icon}</div>
                    <h3
                      style={{
                        fontFamily: 'Bebas Neue, sans-serif',
                        fontSize: 24,
                        letterSpacing: 2,
                        color: '#F5F5F0',
                        marginBottom: 16,
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontSize: 14,
                        color: 'rgba(245,245,240,0.55)',
                        lineHeight: 1.8,
                      }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          .approach-grid { grid-template-columns: repeat(3, 1fr); }
          @media (max-width: 800px) { .approach-grid { grid-template-columns: 1fr !important; } .hide-mobile { display: none !important; } }
        `}</style>
      </div>

      {/* CTA */}
      <div
        style={{
          padding: '100px 0',
          background: 'rgba(255,215,0,0.92)',
          backdropFilter: 'blur(10px)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="container" style={{ position: 'relative' }}>
          <AnimatedSection>
            <h2
              style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: 'clamp(40px, 7vw, 80px)',
                letterSpacing: 4,
                color: '#0A0A0A',
                marginBottom: 20,
              }}
            >
              READY TO WORK TOGETHER?
            </h2>
            <p
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 17,
                color: 'rgba(10,10,10,0.65)',
                marginBottom: 40,
                maxWidth: 500,
                margin: '0 auto 40px',
              }}
            >
              Let's build something meaningful. Our team is ready to help you scale.
            </p>
            <Link
              to="/contact"
              style={{
                display: 'inline-block',
                background: '#0A0A0A',
                color: '#FFD700',
                padding: '16px 48px',
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: 20,
                letterSpacing: 3,
                transition: 'all 0.3s',
                clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#1A1A1A'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#0A0A0A'
              }}
            >
              Get In Touch →
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </motion.div>
  )
}

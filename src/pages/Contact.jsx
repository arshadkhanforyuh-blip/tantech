import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.1 } },
}

const inputStyle = {
  width: '100%',
  background: 'rgba(10,10,10,0.65)', backdropFilter: 'blur(12px)',
  border: '1px solid rgba(255,215,0,0.15)',
  color: '#F5F5F0',
  padding: '14px 18px',
  fontFamily: 'Space Grotesk, sans-serif',
  fontSize: 15,
  outline: 'none',
  transition: 'border-color 0.3s',
}

const labelStyle = {
  fontFamily: 'Space Grotesk, sans-serif',
  fontSize: 11,
  letterSpacing: 3,
  color: 'rgba(255,215,0,0.8)',
  textTransform: 'uppercase',
  display: 'block',
  marginBottom: 8,
}

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    budget: '',
    source: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

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
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '60%',
            transform: 'translate(-50%, -50%)',
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,215,0,0.06) 0%, transparent 70%)',
          }}
        />
        <div className="container" style={{ position: 'relative' }}>
          <AnimatedSection>
            <span className="section-label">Get In Touch</span>
            <h1
              style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: 'clamp(52px, 10vw, 120px)',
                letterSpacing: 4,
                lineHeight: 0.9,
                color: '#F5F5F0',
                marginBottom: 24,
              }}
            >
              LET'S BUILD SOMETHING{' '}
              <span style={{ color: '#FFD700' }}>TOGETHER</span>
            </h1>
            <p
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 18,
                color: 'rgba(245,245,240,0.6)',
                maxWidth: 580,
                lineHeight: 1.8,
              }}
            >
              Have a project, idea, or challenge? We'd love to hear it. Let's collaborate and bring something meaningful to life.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Form + Info */}
      <div className="section" style={{ background: 'rgba(8,8,8,0.72)', backdropFilter: 'blur(14px)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.5fr 1fr',
              gap: 60,
              alignItems: 'start',
            }}
            className="contact-grid"
          >
            {/* Form */}
            <AnimatedSection direction="right">
              {submitted ? (
                <div
                  style={{
                    background: 'rgba(10,10,10,0.65)', backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,215,0,0.3)',
                    padding: 60,
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: 64, marginBottom: 24 }}>✅</div>
                  <h2
                    style={{
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: 40,
                      letterSpacing: 3,
                      color: '#FFD700',
                      marginBottom: 16,
                    }}
                  >
                    MESSAGE SENT!
                  </h2>
                  <p
                    style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: 16,
                      color: 'rgba(245,245,240,0.6)',
                      lineHeight: 1.8,
                    }}
                  >
                    Thank you for reaching out. We'll get back to you within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: 20,
                      marginBottom: 20,
                    }}
                    className="form-2col"
                  >
                    <div>
                      <label style={labelStyle}>Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = '#FFD700')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(255,215,0,0.15)')}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Company</label>
                      <input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = '#FFD700')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(255,215,0,0.15)')}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: 20 }}>
                    <label style={labelStyle}>Email *</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = '#FFD700')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255,215,0,0.15)')}
                    />
                  </div>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: 20,
                      marginBottom: 20,
                    }}
                    className="form-2col"
                  >
                    <div>
                      <label style={labelStyle}>Project Budget</label>
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        style={{ ...inputStyle, cursor: 'pointer' }}
                        onFocus={(e) => (e.target.style.borderColor = '#FFD700')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(255,215,0,0.15)')}
                      >
                        <option value="">Select budget range</option>
                        <option value="<5k">Under $5,000</option>
                        <option value="5k-15k">$5,000 – $15,000</option>
                        <option value="15k-50k">$15,000 – $50,000</option>
                        <option value="50k+">$50,000+</option>
                        <option value="enterprise">Enterprise (Custom)</option>
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>How did you hear about us?</label>
                      <select
                        name="source"
                        value={form.source}
                        onChange={handleChange}
                        style={{ ...inputStyle, cursor: 'pointer' }}
                        onFocus={(e) => (e.target.style.borderColor = '#FFD700')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(255,215,0,0.15)')}
                      >
                        <option value="">Select source</option>
                        <option value="google">Google Search</option>
                        <option value="social">Social Media</option>
                        <option value="friend">Friend or Colleague</option>
                        <option value="ad">Online Advertisement</option>
                        <option value="blog">Blog or Article</option>
                        <option value="newsletter">Newsletter or Email</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ marginBottom: 20 }}>
                    <label style={labelStyle}>How Can We Help? *</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                      style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={(e) => (e.target.style.borderColor = '#FFD700')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255,215,0,0.15)')}
                    >
                      <option value="">Select a service</option>
                      <option value="ai">AI Tools</option>
                      <option value="software">Software Solutions</option>
                      <option value="shopify">Shopify</option>
                      <option value="bench">Bench Sales</option>
                      <option value="tax">Taxation</option>
                      <option value="manpower">Manpower</option>
                      <option value="rpo">RPO</option>
                      <option value="other">Other / General Inquiry</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: 28 }}>
                    <label style={labelStyle}>Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your project, goals, or challenges..."
                      style={{ ...inputStyle, resize: 'vertical', fontFamily: 'Space Grotesk, sans-serif' }}
                      onFocus={(e) => (e.target.style.borderColor = '#FFD700')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255,215,0,0.15)')}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', fontSize: 18, padding: '16px', justifyContent: 'center' }}>
                    Send Message →
                  </button>
                </form>
              )}
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection direction="left">
              <div style={{ position: 'sticky', top: 100 }}>
                <h3
                  style={{
                    fontFamily: 'Bebas Neue, sans-serif',
                    fontSize: 32,
                    letterSpacing: 3,
                    color: '#F5F5F0',
                    marginBottom: 32,
                  }}
                >
                  CONTACT INFO
                </h3>

                {[
                  { icon: '✉️', label: 'General', value: 'info@tantech-llc.com', href: 'mailto:info@tantech-llc.com' },
                  { icon: '💼', label: 'HR & Staffing', value: 'hr@tantech-llc.com', href: 'mailto:hr@tantech-llc.com' },
                  { icon: '📞', label: 'Phone', value: '+1 (773) 444-8207', href: 'tel:+17734448207' },
                ].map((item) => (
                  <a
                    key={item.value}
                    href={item.href}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 16,
                      padding: '20px 0',
                      borderBottom: '1px solid rgba(255,215,0,0.08)',
                      transition: 'all 0.2s',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.paddingLeft = '8px'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.paddingLeft = '0'
                    }}
                  >
                    <span style={{ fontSize: 20 }}>{item.icon}</span>
                    <div>
                      <div
                        style={{
                          fontFamily: 'Space Grotesk, sans-serif',
                          fontSize: 11,
                          letterSpacing: 3,
                          color: 'rgba(255,215,0,0.6)',
                          textTransform: 'uppercase',
                          marginBottom: 4,
                        }}
                      >
                        {item.label}
                      </div>
                      <div
                        style={{
                          fontFamily: 'Space Grotesk, sans-serif',
                          fontSize: 15,
                          color: '#F5F5F0',
                          fontWeight: 500,
                        }}
                      >
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}

                {/* Promise cards */}
                <div style={{ marginTop: 40 }}>
                  {[
                    { icon: '⚡', title: '24-Hour Response', desc: 'We respond to every inquiry within one business day.' },
                    { icon: '🔒', title: 'Confidential', desc: 'Your information is always kept private and secure.' },
                    { icon: '🌍', title: 'Global Reach', desc: 'We work with clients across the US, India, and beyond.' },
                  ].map((item) => (
                    <div
                      key={item.title}
                      style={{
                        background: 'rgba(10,10,10,0.65)', backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255,215,0,0.1)',
                        padding: '20px 24px',
                        marginBottom: 12,
                        display: 'flex',
                        gap: 16,
                        alignItems: 'flex-start',
                      }}
                    >
                      <span style={{ fontSize: 22 }}>{item.icon}</span>
                      <div>
                        <div
                          style={{
                            fontFamily: 'Bebas Neue, sans-serif',
                            fontSize: 16,
                            letterSpacing: 2,
                            color: '#FFD700',
                            marginBottom: 4,
                          }}
                        >
                          {item.title}
                        </div>
                        <div
                          style={{
                            fontFamily: 'Space Grotesk, sans-serif',
                            fontSize: 13,
                            color: 'rgba(245,245,240,0.5)',
                            lineHeight: 1.6,
                          }}
                        >
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .form-2col { grid-template-columns: 1fr !important; }
        }
        select option { background: #111; color: #F5F5F0; }
      `}</style>
    </motion.div>
  )
}

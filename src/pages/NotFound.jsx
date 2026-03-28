import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 24px',
      }}
    >
      <div>
        <div
          style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: 'clamp(100px, 20vw, 200px)',
            color: 'rgba(255,215,0,0.12)',
            letterSpacing: 8,
            lineHeight: 1,
            marginBottom: 0,
          }}
        >
          404
        </div>
        <h1
          style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: 'clamp(32px, 6vw, 64px)',
            letterSpacing: 4,
            color: '#F5F5F0',
            marginBottom: 16,
            marginTop: -24,
          }}
        >
          PAGE NOT <span style={{ color: '#FFD700' }}>FOUND</span>
        </h1>
        <p
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 16,
            color: 'rgba(245,245,240,0.5)',
            marginBottom: 40,
            maxWidth: 400,
            margin: '0 auto 40px',
            lineHeight: 1.8,
          }}
        >
          Looks like this page doesn't exist. Let's get you back on track.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn-primary">Back to Home</Link>
          <Link to="/contact" className="btn-outline">Contact Us</Link>
        </div>
      </div>
    </motion.div>
  )
}

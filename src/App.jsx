import { Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense, useLayoutEffect, Component } from 'react'
import { AnimatePresence } from 'framer-motion'


class ErrorBoundary extends Component {
  state = { error: false }
  static getDerivedStateFromError() { return { error: true } }
  render() {
    if (this.state.error) return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0A0A0A' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 48, color: '#FFD700', letterSpacing: 4 }}>OOPS</div>
          <p style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'rgba(245,245,240,0.5)', marginBottom: 24 }}>Something went wrong. Please refresh.</p>
          <button onClick={() => window.location.reload()} style={{ background: '#FFD700', color: '#0A0A0A', border: 'none', padding: '12px 32px', fontFamily: 'Bebas Neue, sans-serif', fontSize: 18, letterSpacing: 2, cursor: 'pointer' }}>REFRESH</button>
        </div>
      </div>
    )
    return this.props.children
  }
}
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LiquidChrome from './components/LiquidChrome'
import SoftAurora from './components/SoftAurora'

// Code-split all pages so they load on demand
const Home              = lazy(() => import('./pages/Home'))
const About             = lazy(() => import('./pages/About'))
const Services          = lazy(() => import('./pages/Services'))
const Trust             = lazy(() => import('./pages/Trust'))
const Contact           = lazy(() => import('./pages/Contact'))
const SoftwareSolutions = lazy(() => import('./pages/services/SoftwareSolutions'))
const AITools           = lazy(() => import('./pages/services/AITools'))
const Shopify           = lazy(() => import('./pages/services/Shopify'))
const Tax               = lazy(() => import('./pages/services/Tax'))
const BenchSales        = lazy(() => import('./pages/services/BenchSales'))
const Manpower          = lazy(() => import('./pages/services/Manpower'))
const RPO               = lazy(() => import('./pages/services/RPO'))

function ScrollToTop() {
  const { pathname } = useLocation()
  // useLayoutEffect fires before paint — scroll resets instantly, no flash of old position
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  const location = useLocation()
  const isTrust = location.pathname === '/trust'

  return (
    <>
      {/* ── FIXED BACKGROUND — one WebGL context at a time ── */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, background: '#000' }}>
        {isTrust ? (
          <SoftAurora
            color1="#FFD700"
            color2="#ffffff"
            speed={0.6}
            scale={1.5}
            brightness={2.2}
            noiseFrequency={2.5}
            noiseAmplitude={1.0}
            bandHeight={0.5}
            bandSpread={1.5}
            octaveDecay={0.1}
            layerOffset={1.0}
            colorSpeed={1.0}
            mouseInfluence={0.25}
          />
        ) : (
          <LiquidChrome
            baseColor={[0.1, 0.082, 0.0]}
            speed={0.2}
            amplitude={0.3}
            frequencyX={3}
            frequencyY={3}
            interactive={true}
          />
        )}
      </div>

      {/* ── SITE CONTENT — layered above animation ── */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <ScrollToTop />
        <Navbar />
        <ErrorBoundary>
        <Suspense fallback={null}>
          <AnimatePresence mode="sync">
            <Routes location={location} key={location.pathname}>
              <Route path="/"                   element={<Home />} />
              <Route path="/about"              element={<About />} />
              <Route path="/services"           element={<Services />} />
              <Route path="/trust"              element={<Trust />} />
              <Route path="/contact"            element={<Contact />} />
              <Route path="/software-solutions" element={<SoftwareSolutions />} />
              <Route path="/ai-tools"           element={<AITools />} />
              <Route path="/shopify-sols"       element={<Shopify />} />
              <Route path="/tax"                element={<Tax />} />
              <Route path="/bench-sales"        element={<BenchSales />} />
              <Route path="/manpower-staffing"  element={<Manpower />} />
              <Route path="/rpo"                element={<RPO />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
        </ErrorBoundary>
        <Footer />
      </div>
    </>
  )
}

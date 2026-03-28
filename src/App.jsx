import { Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
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
  useEffect(() => {
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
        <Footer />
      </div>
    </>
  )
}

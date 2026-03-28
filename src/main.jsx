import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// Disable browser native scroll restoration — React Router handles scroll via ScrollToTop.
// Without this, the browser re-scrolls to a saved position AFTER lazy chunks finish loading,
// which causes the "page loads from the bottom" flash on every navigation and hard refresh.
if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

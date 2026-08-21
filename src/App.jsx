import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Cursor from './components/Cursor.jsx'
import PageDots from './components/PageDots.jsx'
import Home from './pages/Home.jsx'
import Approche from './pages/Approche.jsx'
import Expertise from './pages/Expertise.jsx'
import Pourquoi from './pages/Pourquoi.jsx'
import Diagnostic from './pages/Diagnostic.jsx'

// Réalisations and Insights are pulled from routing for now (placeholder
// content, not ready to publish) — pages/Realisations.jsx and
// pages/Insights.jsx are left in place to re-enable later.

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

// Short cross-fade on route change so navigation doesn't cut instantly from
// one page to the next — the hero below still replays its own entrance.
function RouteFade({ children }) {
  const { pathname } = useLocation()
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    setEntered(false)
    const raf = requestAnimationFrame(() => setEntered(true))
    return () => cancelAnimationFrame(raf)
  }, [pathname])

  return (
    <div className={`route-fade ${entered ? 'route-enter' : ''}`}>
      {children}
    </div>
  )
}

export default function App() {
  return (
    <>
      <Cursor />
      <Nav />
      <PageDots />
      <ScrollToTop />
      <RouteFade>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/approche" element={<Approche />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/pourquoi" element={<Pourquoi />} />
          <Route path="/diagnostic" element={<Diagnostic />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </RouteFade>
      <Footer />
    </>
  )
}

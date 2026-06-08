import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Cursor from './components/Cursor.jsx'
import PageDots from './components/PageDots.jsx'
import Home from './pages/Home.jsx'
import Approche from './pages/Approche.jsx'
import Expertise from './pages/Expertise.jsx'
import Realisations from './pages/Realisations.jsx'
import Insights from './pages/Insights.jsx'
import Pourquoi from './pages/Pourquoi.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <Cursor />
      <Nav />
      <PageDots />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/approche" element={<Approche />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/pourquoi" element={<Pourquoi />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

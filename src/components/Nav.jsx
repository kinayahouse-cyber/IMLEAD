import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'

const LINKS = [
  { to: '/approche', label: 'Approche' },
  { to: '/expertise', label: 'Expertise' },
  { to: '/realisations', label: 'Réalisations' },
  { to: '/insights', label: 'Insights' },
  { to: '/pourquoi', label: 'Pourquoi' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Close the mobile drawer whenever the route changes.
  useEffect(() => setOpen(false), [location.pathname])

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <nav>
        <Link to="/" className="nav-logo" aria-label="IMLEAD — Accueil">
        <img
          alt="IMLEAD"
          src="/assets/logo-C3iXneUp.svg"
          style={{ height: 36, width: 'auto', display: 'block' }}
        />
      </Link>

      {/* Desktop navigation — hidden on mobile */}
      <ul className="nav-links hidden md:flex">
        {LINKS.map((l) => (
          <li key={l.to}>
            <NavLink to={l.to} className={({ isActive }) => (isActive ? 'active' : '')}>
              {l.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <Link to="/diagnostic" className="nav-cta hidden md:inline-block">
        <span>Diagnostic</span>
      </Link>

      {/* Mobile hamburger — hidden on desktop */}
      <button
        type="button"
        className={`mob-menu-btn md:hidden ${open ? 'open' : ''}`}
        aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>
      </nav>

      {/* Mobile drawer — rendered as a sibling of <nav> (not a child) so its
          fixed inset:0 resolves against the viewport. The nav's backdrop-filter
          would otherwise make it the containing block and shrink the drawer. */}
      <div className={`mob-drawer md:hidden ${open ? 'open' : ''}`}>
        <div className="mob-drawer-links">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `mob-drawer-link ${isActive ? 'active' : ''}`}
            >
              {l.label}
              <span>→</span>
            </NavLink>
          ))}
        </div>
        <Link to="/diagnostic" className="mob-drawer-cta" onClick={() => setOpen(false)}>
          Obtenir mon diagnostic
        </Link>
      </div>
    </>
  )
}

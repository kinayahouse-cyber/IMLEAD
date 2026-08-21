import { useNavigate, useLocation } from 'react-router-dom'

// Vertical page indicator on the right edge (desktop only). Hidden below md.
const PAGES = [
  { to: '/', title: 'Accueil' },
  { to: '/approche', title: 'Approche' },
  { to: '/expertise', title: 'Expertise' },
  { to: '/pourquoi', title: 'Pourquoi' },
  { to: '/diagnostic', title: 'Diagnostic' },
]

export default function PageDots() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <div className="page-nav hidden md:flex">
      {PAGES.map((p) => {
        const active = pathname === p.to
        return (
          <button
            key={p.title}
            className={`page-dot ${active ? 'active' : ''}`}
            title={p.title}
            aria-label={`Aller à la page ${p.title}`}
            onClick={() => navigate(p.to)}
          />
        )
      })}
    </div>
  )
}

import { useEffect, useRef, useState } from 'react'

const HOVER_SELECTOR =
  'a, button, [role="button"], [role="radio"], [role="checkbox"], input, select, textarea, ' +
  '.service-card, .avantage-card, .project-card, .ins-card, .stat-item, .timeline-step, .page-dot, .opt, .faq-question'

// Bronze dot + trailing ring that follows the pointer. Only mounted on devices
// with a fine pointer (mouse) so it never interferes with touch on mobile.
// The ring grows and the dot shrinks over anything interactive, so the
// cursor itself becomes a piece of feedback instead of a static follower.
export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    setEnabled(true)

    let ringX = 0
    let ringY = 0
    let mouseX = 0
    let mouseY = 0
    let raf

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dot.current) {
        dot.current.style.left = `${mouseX}px`
        dot.current.style.top = `${mouseY}px`
      }
    }

    const loop = () => {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      if (ring.current) {
        ring.current.style.left = `${ringX}px`
        ring.current.style.top = `${ringY}px`
      }
      raf = requestAnimationFrame(loop)
    }

    const setHovering = (on) => {
      dot.current?.classList.toggle('hovering', on)
      ring.current?.classList.toggle('hovering', on)
    }

    const onOver = (e) => {
      if (e.target.closest?.(HOVER_SELECTOR)) setHovering(true)
    }
    const onOut = (e) => {
      const target = e.target.closest?.(HOVER_SELECTOR)
      if (!target) return
      const to = e.relatedTarget
      if (!to || !target.contains(to)) setHovering(false)
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      cancelAnimationFrame(raf)
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <div id="cursor" className="cursor" ref={dot} />
      <div id="cursor-ring" className="cursor-ring" ref={ring} style={{ left: 0, top: 0 }} />
    </>
  )
}

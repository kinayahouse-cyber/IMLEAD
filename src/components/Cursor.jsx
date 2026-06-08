import { useEffect, useRef, useState } from 'react'

// Bronze dot + trailing ring that follows the pointer. Only mounted on devices
// with a fine pointer (mouse) so it never interferes with touch on mobile.
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

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', onMove)
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

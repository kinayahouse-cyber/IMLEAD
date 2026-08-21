import { useEffect, useRef, useState } from 'react'

// Adds .reveal (+ .in-view once scrolled into frame) to its wrapper. Keeps
// the hero's mount-triggered .anim-* system untouched — this only covers
// below-the-fold content, which previously had no entrance motion at all.
export default function Reveal({
  as: As = 'div',
  delay = 0,
  scale = false,
  className = '',
  style,
  children,
  ...rest
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const base = scale ? 'reveal-scale' : 'reveal'

  return (
    <As
      ref={ref}
      className={`${base} ${visible ? 'in-view' : ''} ${className}`.trim()}
      style={{ ...style, transitionDelay: visible ? `${delay}ms` : '0ms' }}
      {...rest}
    >
      {children}
    </As>
  )
}

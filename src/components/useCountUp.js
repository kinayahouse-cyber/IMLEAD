import { useEffect, useRef, useState } from 'react'

// Counts from 0 to `target` once the element scrolls into view. Small and
// dependency-free — used for the hero KPI so it reads as a live figure
// rather than decorative background type.
export default function useCountUp(target, { duration = 1400, start = false } = {}) {
  const [value, setValue] = useState(0)
  const ran = useRef(false)

  useEffect(() => {
    if (!start || ran.current) return
    ran.current = true
    const startTime = performance.now()
    let raf
    const tick = (now) => {
      const progress = Math.min(1, (now - startTime) / duration)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, target, duration])

  return value
}

import { useEffect, useRef, useCallback } from 'react'

const SparkleCursor = () => {
  const lastSparkleTime = useRef(0)

  const createSparkle = useCallback((x, y) => {
    const sparkle = document.createElement('div')
    sparkle.className = 'sparkle-particle'

    const size = 8 + Math.random() * 12
    const colors = ['#ff6b6b', '#ff0000', '#ff69b4', '#ffd700', '#ffffff', '#ff1493']
    const color = colors[Math.floor(Math.random() * colors.length)]

    const offsetX = (Math.random() - 0.5) * 30
    const offsetY = (Math.random() - 0.5) * 30

    sparkle.style.cssText = `
      left: ${x + offsetX}px;
      top: ${y + offsetY}px;
      width: ${size}px;
      height: ${size}px;
      background: radial-gradient(circle, ${color} 0%, transparent 70%);
      border-radius: 50%;
      box-shadow: 0 0 ${size}px ${color};
    `

    document.body.appendChild(sparkle)

    setTimeout(() => {
      if (sparkle.parentNode) {
        sparkle.parentNode.removeChild(sparkle)
      }
    }, 800)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const now = Date.now()
      if (now - lastSparkleTime.current > 50) {
        createSparkle(e.clientX, e.clientY)
        lastSparkleTime.current = now
      }
    }

    const handleClick = (e) => {
      // Create burst of sparkles on click
      for (let i = 0; i < 8; i++) {
        setTimeout(() => {
          createSparkle(e.clientX, e.clientY)
        }, i * 30)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('click', handleClick)
    }
  }, [createSparkle])

  return null
}

export default SparkleCursor

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function CursorGlow() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
      const el = document.elementFromPoint(e.clientX, e.clientY)
      if (el) {
        const tag = el.tagName.toLowerCase()
        const cursor = window.getComputedStyle(el).cursor
        setIsPointer(
          cursor === 'pointer' ||
          tag === 'a' ||
          tag === 'button' ||
          el.closest('a') !== null ||
          el.closest('button') !== null
        )
      }
    }

    const handleLeave = () => setIsVisible(false)
    const handleEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseleave', handleLeave)
    document.addEventListener('mouseenter', handleEnter)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseleave', handleLeave)
      document.removeEventListener('mouseenter', handleEnter)
    }
  }, [])

  return (
    <>
      {/* Outer glow blob — slow follow */}
      <motion.div
        animate={{
          x: mousePos.x - 150,
          y: mousePos.y - 150,
          opacity: isVisible ? 1 : 0,
          scale: isPointer ? 1.4 : 1,
        }}
        transition={{ type: 'spring', stiffness: 60, damping: 20 }}
        className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none z-[998]"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 70%)',
        }}
      />

      {/* Ring — medium follow */}
      <motion.div
        animate={{
          x: mousePos.x - 16,
          y: mousePos.y - 16,
          opacity: isVisible ? 1 : 0,
          scale: isPointer ? 1.8 : 1,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[999]"
        style={{
          border: '1.5px solid rgba(139,92,246,0.5)',
        }}
      />

      {/* Dot — instant follow */}
      <motion.div
        animate={{
          x: mousePos.x - 4,
          y: mousePos.y - 4,
          opacity: isVisible ? 1 : 0,
          scale: isPointer ? 2 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[1000]"
        style={{
          background: isPointer ? '#a78bfa' : 'rgba(167,139,250,0.8)',
          boxShadow: isPointer ? '0 0 12px rgba(139,92,246,0.8)' : '0 0 6px rgba(139,92,246,0.4)',
        }}
      />
    </>
  )
}

export default CursorGlow
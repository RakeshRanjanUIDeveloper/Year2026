import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

function ThemeToggle() {
  const { isDark, setIsDark } = useTheme()

  return (
    <motion.button
      onClick={() => setIsDark(!isDark)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="relative w-14 h-7 rounded-full border border-purple-500/30 bg-white/5 hover:border-purple-400/50 transition-all duration-300 flex items-center px-1"
      aria-label="Toggle theme"
    >
      <motion.div
        animate={{ x: isDark ? 0 : 28 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className={'w-5 h-5 rounded-full flex items-center justify-center text-xs shadow-lg ' +
          (isDark ? 'bg-purple-500' : 'bg-amber-400')}
      >
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.span
              key="moon"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.15 }}
            >
              🌙
            </motion.span>
          ) : (
            <motion.span
              key="sun"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.15 }}
            >
              ☀️
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle
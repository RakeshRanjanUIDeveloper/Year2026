import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

function ThemeToggle() {
  const { isDark, setIsDark } = useTheme()

  return (
    <motion.button
      onClick={() => setIsDark(!isDark)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 bg-white/5 border border-purple-500/30 hover:border-purple-400/50 px-3 py-1.5 rounded-full transition-all duration-300"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.span
            key="purple"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="text-xs text-purple-300 font-mono flex items-center gap-1.5"
          >
            <span className="w-2 h-2 rounded-full bg-purple-400 inline-block" />
            Purple
          </motion.span>
        ) : (
          <motion.span
            key="cyan"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="text-xs text-cyan-300 font-mono flex items-center gap-1.5"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" />
            Cyan
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  )
}

export default ThemeToggle
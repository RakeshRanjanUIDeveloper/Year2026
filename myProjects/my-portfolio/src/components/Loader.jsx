import { motion, AnimatePresence } from 'framer-motion'

function Loader({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[999] bg-[#0f0c29] flex flex-col items-center justify-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-8"
          >
            <div className="text-5xl font-bold text-white">
              <span className="text-purple-400">R</span>R
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mt-2 origin-left rounded-full"
            />
          </motion.div>

          {/* Animated dots */}
          <div className="flex items-center gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -10, 0], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
                className="w-2 h-2 bg-purple-400 rounded-full"
              />
            ))}
          </div>

          {/* Loading text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-500 text-sm mt-6 tracking-widest uppercase font-mono"
          >
            Loading Portfolio...
          </motion.p>

          {/* Background blobs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-700/20 rounded-full blur-[80px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-700/20 rounded-full blur-[80px] animate-pulse" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader
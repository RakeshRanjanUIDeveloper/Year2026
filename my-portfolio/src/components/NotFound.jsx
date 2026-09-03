import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

function NotFound() {
  return (
    <div className="min-h-screen bg-[#0f0c29] flex items-center justify-center px-6 relative overflow-hidden">

      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-700/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-700/20 rounded-full blur-[120px]" />

      <div className="relative z-10 text-center">

        {/* 404 */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[150px] md:text-[200px] font-bold leading-none text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 select-none">
            404
          </h1>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
            Page not found
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-md mx-auto leading-relaxed">
            Looks like this page took a wrong turn. Let's get you back to the portfolio.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href="/"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30">
            Back to Home
          </a>
          <a href="mailto:devrakeshranjan08@gmail.com"
            className="border border-purple-500/40 hover:border-purple-400 text-purple-300 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:bg-purple-900/30">
            Contact Me
          </a>
        </motion.div>

        {/* Fun note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-gray-600 text-sm mt-12 font-mono"
        >
          Error 404 — Even senior devs hit dead ends sometimes 😄
        </motion.p>

      </div>
    </div>
  )
}

export default NotFound
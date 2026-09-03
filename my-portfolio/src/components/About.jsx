import { motion } from 'framer-motion'
import { aboutMe, personalInfo } from '../data/portfolioData'

function About() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-purple-400 text-sm tracking-widest uppercase mb-3">Get To Know Me</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">About Me</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Left — Avatar */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center text-8xl shadow-2xl shadow-purple-900/50">
              👨‍💻
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white/5 border border-purple-500/30 backdrop-blur-sm rounded-xl px-4 py-2">
              <p className="text-purple-300 text-sm font-medium">11+ Years</p>
              <p className="text-gray-400 text-xs">of Experience</p>
            </div>
            <div className="absolute -top-4 -left-4 bg-white/5 border border-purple-500/30 backdrop-blur-sm rounded-xl px-4 py-2">
              <p className="text-purple-300 text-sm font-medium">Accenture</p>
              <p className="text-gray-400 text-xs">Current Company</p>
            </div>
          </div>
        </motion.div>

        {/* Right — Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            {aboutMe.bio}
          </p>

          <div className="grid grid-cols-1 gap-3 mb-8">
            {aboutMe.highlights.map((point) => (
              <div key={point} className="flex items-center gap-3 bg-white/5 border border-purple-500/20 rounded-xl px-4 py-3 backdrop-blur-sm">
                <span className="text-purple-400 text-lg">▹</span>
                <span className="text-gray-300 text-sm">{point}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a href={personalInfo.github} target="_blank" rel="noreferrer"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105">
              View GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer"
              className="border border-purple-500/40 hover:border-purple-400 text-purple-300 hover:text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-purple-900/30">
              LinkedIn Profile
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default About
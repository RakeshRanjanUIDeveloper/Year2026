import { motion } from 'framer-motion'
import { experiences } from '../data/portfolioData'

function Experience() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-purple-400 text-sm tracking-widest uppercase mb-3">Where I've Worked</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">Experience</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="relative">

        {/* Vertical Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-purple-500/20 transform md:-translate-x-px" />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative flex flex-col md:flex-row gap-8 mb-12"
          >
            {/* Circle on timeline */}
            <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-[#0f0c29] transform -translate-x-1/2 mt-6 z-10 shadow-lg shadow-purple-500/50" />

            {/* Left — Company & Duration */}
            <div className="md:w-1/2 md:text-right md:pr-12 pl-16 md:pl-0">
              <div className="bg-white/5 border border-purple-500/20 backdrop-blur-sm rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-1">{exp.company}</h3>
                <p className="text-purple-400 font-medium mb-2">{exp.role}</p>
                <div className="flex md:justify-end items-center gap-2">
                  <span className="bg-purple-900/50 text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-500/30">
                    {exp.duration}
                  </span>
                  <span className="bg-cyan-900/50 text-cyan-300 text-xs px-3 py-1 rounded-full border border-cyan-500/30">
                    {exp.years}
                  </span>
                </div>
              </div>
            </div>

            {/* Right — Bullet Points */}
            <div className="md:w-1/2 md:pl-12 pl-16 md:pl-0">
              <div className="bg-white/5 border border-purple-500/20 backdrop-blur-sm rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300">
                <ul className="space-y-3">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                      <span className="text-purple-400 mt-1 shrink-0">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  )
}

export default Experience
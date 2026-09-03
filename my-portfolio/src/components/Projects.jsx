import { motion } from 'framer-motion'
import { projects } from '../data/portfolioData'
import { FaGithub } from 'react-icons/fa'

function Projects() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-purple-400 text-sm tracking-widest uppercase mb-3">What I've Built</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">Projects</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="bg-white/5 border border-purple-500/20 backdrop-blur-sm rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/30 group"
          >
            {/* Card Top Banner */}
            <div className={'h-2 bg-gradient-to-r ' + project.color} />

            <div className="p-6">

              {/* Icon */}
              <div className={'w-12 h-12 rounded-xl bg-gradient-to-br ' + project.color + ' flex items-center justify-center text-2xl mb-4 shadow-lg'}>
                {index === 0 ? '🛒' : index === 1 ? '💼' : '📋'}
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-lg mb-3 group-hover:text-purple-300 transition-colors duration-200">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="bg-purple-900/40 text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-500/20">
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-purple-500/10">
                <a href={project.github} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200">
                  <FaGithub className="text-base" />
                  Code
                </a>
                <a href={project.live} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200">
                  ↗ Live Demo
                </a>
              </div>

            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default Projects
import { motion } from 'framer-motion'
import { techStack } from '../data/portfolioData'

const categoryConfig = {
  language:  { label: 'Languages',        icon: '🧠', color: 'from-purple-500 to-indigo-500',  border: 'border-purple-500/30', glow: 'hover:shadow-purple-500/20' },
  framework: { label: 'Frameworks',       icon: '⚛️', color: 'from-cyan-500 to-blue-500',      border: 'border-cyan-500/30',   glow: 'hover:shadow-cyan-500/20' },
  state:     { label: 'State Management', icon: '🔄', color: 'from-pink-500 to-rose-500',      border: 'border-pink-500/30',   glow: 'hover:shadow-pink-500/20' },
  testing:   { label: 'Testing',          icon: '🧪', color: 'from-green-500 to-emerald-500',  border: 'border-green-500/30',  glow: 'hover:shadow-green-500/20' },
  platform:  { label: 'Platforms',        icon: '☁️', color: 'from-amber-500 to-orange-500',   border: 'border-amber-500/30',  glow: 'hover:shadow-amber-500/20' },
  styling:   { label: 'Styling',          icon: '🎨', color: 'from-violet-500 to-purple-500',  border: 'border-violet-500/30', glow: 'hover:shadow-violet-500/20' },
}

function TechStack() {
  const categories = [...new Set(techStack.map((t) => t.category))]

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-purple-400 text-sm tracking-widest uppercase mb-3">What I Work With</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">Tech Stack</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        <p className="text-gray-400 mt-4 text-sm max-w-xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {categories.map((category, catIndex) => {
          const config = categoryConfig[category]
          const items = techStack.filter((t) => t.category === category)

          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={'w-10 h-10 rounded-xl bg-gradient-to-br ' + config.color + ' flex items-center justify-center text-lg shadow-lg'}>
                  {config.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">{config.label}</h3>
                  <p className="text-gray-500 text-xs">{items.length} technologies</p>
                </div>
                <div className={'ml-auto h-px flex-1 bg-gradient-to-r ' + config.color + ' opacity-20'} />
              </div>

              {/* Tech Pills */}
              <div className="flex flex-wrap gap-2">
                {items.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={'group relative cursor-default rounded-xl border px-4 py-2 ' + config.border + ' bg-white/5 hover:bg-white/10 transition-all duration-200 hover:shadow-lg ' + config.glow}
                  >
                    <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-200">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          )
        })}
      </div>

      {/* Bottom Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-12 grid grid-cols-3 gap-4"
      >
        {[
          { value: '11+', label: 'Years Coding',      color: 'text-purple-400' },
          { value: '12',  label: 'Technologies',      color: 'text-cyan-400' },
          { value: '3+',  label: 'Projects Shipped',  color: 'text-pink-400' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center backdrop-blur-sm hover:border-white/20 transition-all duration-300">
            <div className={'text-3xl font-bold mb-1 ' + stat.color}>{stat.value}</div>
            <div className="text-gray-400 text-xs tracking-wide uppercase">{stat.label}</div>
          </div>
        ))}
      </motion.div>

    </section>
  )
}

export default TechStack
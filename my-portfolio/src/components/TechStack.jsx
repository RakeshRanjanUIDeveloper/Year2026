import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { techStack } from '../data/portfolioData'

const tabs = [
  { key: 'all',       label: 'All' },
  { key: 'language',  label: 'Languages' },
  { key: 'framework', label: 'Framework' },
  { key: 'state',     label: 'State' },
  { key: 'styling',   label: 'Styling' },
  { key: 'testing',   label: 'Testing' },
  { key: 'platform',  label: 'Platforms' },
  { key: 'tools',     label: 'Tools' },
]

const categoryConfig = {
  language:  { color: 'from-purple-500 to-indigo-500',  bg: 'bg-purple-500',  text: 'text-purple-400',  border: 'border-purple-500/30',  pill: 'bg-purple-900/40 text-purple-300 border-purple-500/20' },
  framework: { color: 'from-cyan-500 to-blue-500',      bg: 'bg-cyan-500',    text: 'text-cyan-400',    border: 'border-cyan-500/30',    pill: 'bg-cyan-900/40 text-cyan-300 border-cyan-500/20' },
  state:     { color: 'from-pink-500 to-rose-500',      bg: 'bg-pink-500',    text: 'text-pink-400',    border: 'border-pink-500/30',    pill: 'bg-pink-900/40 text-pink-300 border-pink-500/20' },
  styling:   { color: 'from-violet-500 to-purple-500',  bg: 'bg-violet-500',  text: 'text-violet-400',  border: 'border-violet-500/30',  pill: 'bg-violet-900/40 text-violet-300 border-violet-500/20' },
  testing:   { color: 'from-green-500 to-emerald-500',  bg: 'bg-green-500',   text: 'text-green-400',   border: 'border-green-500/30',   pill: 'bg-green-900/40 text-green-300 border-green-500/20' },
  platform:  { color: 'from-amber-500 to-orange-500',   bg: 'bg-amber-500',   text: 'text-amber-400',   border: 'border-amber-500/30',   pill: 'bg-amber-900/40 text-amber-300 border-amber-500/20' },
  tools:     { color: 'from-teal-500 to-cyan-500',      bg: 'bg-teal-500',    text: 'text-teal-400',    border: 'border-teal-500/30',    pill: 'bg-teal-900/40 text-teal-300 border-teal-500/20' },
}

const levelLabel = (level) => {
  if (level >= 90) return 'Expert'
  if (level >= 80) return 'Advanced'
  if (level >= 70) return 'Proficient'
  return 'Familiar'
}

const levelColor = (level) => {
  if (level >= 90) return 'text-green-400'
  if (level >= 80) return 'text-cyan-400'
  if (level >= 70) return 'text-purple-400'
  return 'text-gray-400'
}

function TechStack() {
  const [activeTab, setActiveTab] = useState('all')
  const [hoveredTech, setHoveredTech] = useState(null)

  const filtered = activeTab === 'all'
    ? techStack
    : techStack.filter((t) => t.category === activeTab)

  const topSkills = [...techStack].sort((a, b) => b.level - a.level).slice(0, 6)

  return (
    <section className="py-32 px-6 max-w-6xl mx-auto relative overflow-hidden">

      {/* Background */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="text-purple-400 text-sm tracking-widest uppercase font-mono">04. Tech Stack</span>
        <div className="flex-1 h-px bg-gradient-to-r from-purple-500/50 to-transparent" />
      </motion.div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
          Tools of
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
            my trade.
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl">
          11+ years of hands-on experience across the full frontend spectrum — from pixel-perfect UI to robust state management and testing.
        </p>
      </motion.div>

      {/* Top Skills Highlight Row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <p className="text-gray-500 text-xs tracking-widest uppercase font-mono mb-5">Core expertise</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {topSkills.map((tech, i) => {
            const config = categoryConfig[tech.category]
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.02 }}
                className={'group relative overflow-hidden rounded-2xl border p-5 cursor-default transition-all duration-300 bg-white/5 hover:bg-white/10 ' + config.border}
              >
                {/* Glow */}
                <div className={'absolute inset-0 bg-gradient-to-br ' + config.color + ' opacity-0 group-hover:opacity-10 transition-opacity duration-300'} />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white font-semibold text-sm">{tech.name}</span>
                    <span className={'text-xs font-mono ' + levelColor(tech.level)}>{levelLabel(tech.level)}</span>
                  </div>

                  {/* Progress bar */}
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: tech.level + '%' }}
                      transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
                      viewport={{ once: true }}
                      className={'h-full rounded-full bg-gradient-to-r ' + config.color}
                    />
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <span className={'text-xs ' + config.text}>{tech.category}</span>
                    <span className="text-gray-500 text-xs font-mono">{tech.level}%</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <p className="text-gray-500 text-xs tracking-widest uppercase font-mono mb-5">Browse by category</p>
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => {
            const count = tab.key === 'all'
              ? techStack.length
              : techStack.filter((t) => t.category === tab.key).length
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={'px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2 ' +
                  (activeTab === tab.key
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/40'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10')}
              >
                {tab.label}
                <span className={'text-xs px-1.5 py-0.5 rounded-full ' +
                  (activeTab === tab.key ? 'bg-white/20' : 'bg-white/10')}>
                  {count}
                </span>
              </button>
            )
          })}
        </div>
      </motion.div>

      {/* Skills Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14"
        >
          {filtered.map((tech, i) => {
            const config = categoryConfig[tech.category]
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25, delay: i * 0.04 }}
                whileHover={{ y: -4, scale: 1.04 }}
                onHoverStart={() => setHoveredTech(tech.name)}
                onHoverEnd={() => setHoveredTech(null)}
                className={'group relative cursor-default rounded-2xl border p-4 transition-all duration-200 ' + config.border + ' bg-white/5 hover:bg-white/10 hover:shadow-lg'}
              >
                <div className={'absolute inset-0 rounded-2xl bg-gradient-to-br ' + config.color + ' opacity-0 group-hover:opacity-10 transition-opacity duration-200'} />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white text-sm font-medium group-hover:text-white transition-colors">{tech.name}</span>
                    <div className={'w-1.5 h-1.5 rounded-full ' + config.bg} />
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: hoveredTech === tech.name ? tech.level + '%' : '30%' }}
                      transition={{ duration: 0.4 }}
                      className={'h-full rounded-full bg-gradient-to-r ' + config.color}
                    />
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className={'text-xs ' + config.text}>{levelLabel(tech.level)}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </AnimatePresence>

      {/* Bottom Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { value: '11+', label: 'Years coding',      color: 'from-purple-400 to-indigo-400' },
          { value: '22',  label: 'Technologies',      color: 'from-cyan-400 to-blue-400' },
          { value: '6',   label: 'Expert level',      color: 'from-green-400 to-emerald-400' },
          { value: '3',   label: 'MS Certifications', color: 'from-amber-400 to-orange-400' },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            <div className={'text-3xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r ' + stat.color}>
              {stat.value}
            </div>
            <div className="text-gray-400 text-xs tracking-wide uppercase">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  )
}

export default TechStack
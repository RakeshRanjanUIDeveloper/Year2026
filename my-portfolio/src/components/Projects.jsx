import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, enterpriseProjects } from '../data/portfolioData'
import { FaGithub } from 'react-icons/fa'

function Projects() {
  const [activeTab, setActiveTab] = useState('enterprise')

  return (
    <section className="py-32 px-6 max-w-6xl mx-auto relative overflow-hidden">

      <div className="absolute top-20 right-0 w-96 h-96 rounded-full blur-[120px] pointer-events-none" style={{ background: 'var(--blob-3)' }} />
      <div className="absolute bottom-20 left-0 w-80 h-80 rounded-full blur-[100px] pointer-events-none" style={{ background: 'var(--blob-1)' }} />

      {/* Section label */}
      <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="flex items-center gap-4 mb-16">
        <span className="text-purple-400 text-sm tracking-widest uppercase font-mono">03. Projects</span>
        <div className="flex-1 h-px bg-gradient-to-r from-purple-500/50 to-transparent" />
      </motion.div>

      {/* Heading */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="mb-12">
        <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-4" style={{ color: 'var(--text-primary)' }}>
          Things I've
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">built & shipped.</span>
        </h2>
        <p className="text-lg max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
          From enterprise platforms serving thousands of users to personal projects exploring new ideas.
        </p>
      </motion.div>

      {/* Tabs */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="flex items-center gap-2 mb-12 p-1.5 border border-white/10 rounded-2xl w-fit" style={{ backgroundColor: 'var(--card-bg)' }}>
        {[
          { key: 'enterprise', label: '🏢 Enterprise Work', count: enterpriseProjects.length },
          { key: 'personal',   label: '⚡ Personal Builds', count: projects.length },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={'relative px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ' +
              (activeTab === tab.key
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/50'
                : 'hover:text-white')}
            style={activeTab !== tab.key ? { color: 'var(--text-secondary)' } : {}}
          >
            {tab.label}
            <span className={'ml-2 text-xs px-2 py-0.5 rounded-full ' +
              (activeTab === tab.key ? 'bg-white/20 text-white' : 'bg-white/10')}
              style={activeTab !== tab.key ? { color: 'var(--text-muted)' } : {}}>
              {tab.count}
            </span>
          </button>
        ))}
      </motion.div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">

        {/* Enterprise Projects */}
        {activeTab === 'enterprise' && (
          <motion.div key="enterprise" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
            <div className="space-y-4">
              {enterpriseProjects.map((project, i) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ x: 6 }}
                  className="group flex flex-col md:flex-row md:items-center gap-6 p-6 rounded-2xl border border-white/10 hover:border-purple-500/40 backdrop-blur-sm transition-all duration-300 cursor-default"
                  style={{ backgroundColor: 'var(--card-bg)' }}
                >
                  <div className={'w-14 h-14 rounded-2xl bg-gradient-to-br ' + project.color + ' flex items-center justify-center text-2xl shadow-lg shrink-0'}>
                    {project.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-bold text-lg group-hover:text-purple-300 transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>
                        {project.name}
                      </h3>
                      <span className="text-xs text-purple-400 bg-purple-900/40 border border-purple-500/20 px-3 py-1 rounded-full">
                        {project.role}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>{project.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs border border-white/10 px-2 py-1 rounded-lg" style={{ color: 'var(--text-secondary)', backgroundColor: 'var(--card-bg)' }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="shrink-0 text-right">
                    <div className={'text-sm font-bold bg-gradient-to-r ' + project.color + ' bg-clip-text text-transparent'}>
                      {project.impact}
                    </div>
                    <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>Impact</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-8 flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-purple-900/20 to-indigo-900/20 border border-purple-500/10">
              <span className="text-2xl">🏢</span>
              <div>
                <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>All enterprise projects delivered at Accenture</p>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>2015 — Present · Frontend Development Lead</p>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-xs">Active</span>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Personal Projects */}
        {activeTab === 'personal' && (
          <motion.div key="personal" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
            <div className="grid md:grid-cols-3 gap-6">
              {projects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/30"
                  style={{ backgroundColor: 'var(--card-bg)' }}
                >
                  <div className={'h-1.5 bg-gradient-to-r ' + project.color} />

                  <div className="p-6 relative">
                    <div className={'w-12 h-12 rounded-xl bg-gradient-to-br ' + project.color + ' flex items-center justify-center text-2xl mb-5 shadow-lg'}>
                      {project.icon}
                    </div>

                    <h3 className="font-bold text-lg mb-3 group-hover:text-purple-300 transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>
                      {project.title}
                    </h3>

                    <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
  <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-purple-500/30" style={{ color: 'var(--text-primary)', backgroundColor: 'var(--card-bg)', borderColor: 'rgba(139,92,246,0.3)' }}>
    {t}
  </span>
))}
                    </div>

                    <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                      <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-purple-400 text-sm transition-all duration-200 hover:gap-3" style={{ color: 'var(--text-secondary)' }}>
                        <FaGithub /> Code
                      </a>
                      <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-purple-400 text-sm transition-all duration-200 hover:gap-3" style={{ color: 'var(--text-secondary)' }}>
                        ↗ Live Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-8 p-5 rounded-2xl border border-white/5 flex items-center gap-4">
              <span className="text-2xl">💡</span>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Personal projects built to explore new patterns, tech stacks, and product ideas outside of enterprise work.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}

export default Projects
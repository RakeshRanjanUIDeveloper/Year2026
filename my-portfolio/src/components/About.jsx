import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { aboutMe, personalInfo } from '../data/portfolioData'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50])

  return (
    <section ref={ref} className="py-32 px-6 max-w-6xl mx-auto relative overflow-hidden">

      {/* Floating background accent */}
      <motion.div style={{ y }} className="absolute top-20 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      <motion.div style={{ y }} className="absolute bottom-20 left-0 w-72 h-72 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="text-purple-400 text-sm tracking-widest uppercase font-mono">01. About Me</span>
        <div className="flex-1 h-px bg-gradient-to-r from-purple-500/50 to-transparent" />
      </motion.div>

      {/* Main layout */}
      <div className="grid md:grid-cols-5 gap-16 items-center mb-24">

        {/* Left — Big statement text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:col-span-3"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-8">
            I craft
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              digital experiences
            </span>
            that matter.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            {aboutMe.bio}
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>Currently at</span>
            <span className="text-purple-400 font-medium">Accenture</span>
            <span>·</span>
            <span className="text-white font-medium">Frontend Development Lead</span>
          </div>
        </motion.div>

        {/* Right — Visual identity card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:col-span-2 relative"
        >
          <div className="relative">
            {/* Main card */}
            <div className="relative bg-gradient-to-br from-purple-900/60 to-indigo-900/60 border border-purple-500/30 rounded-3xl p-8 backdrop-blur-sm overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/20 rounded-full blur-[60px]" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-[40px]" />

              <div className="relative z-10 text-center">
                              <div className="w-24 h-24 rounded-2xl overflow-hidden mx-auto mb-4 ring-2 ring-purple-500/50 shadow-xl shadow-purple-900/50">
                <img
                  src="/rakesh-photo.jpg"
                  alt="Rakesh Ranjan"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white font-bold text-xl mb-1">Rakesh Ranjan</h3>
                <p className="text-purple-300 text-sm mb-6">Frontend Development Lead</p>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: '11+', label: 'Years' },
                    { value: '12+', label: 'Projects' },
                    { value: '1',   label: 'Company' },
                    { value: '∞',   label: 'Passion' },
                  ].map((s) => (
                    <div key={s.label} className="bg-white/10 rounded-2xl py-3 px-2 text-center">
                      <div className="text-xl font-bold text-white">{s.value}</div>
                      <div className="text-gray-400 text-xs">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating tag */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-4 -right-4 bg-green-500/20 border border-green-500/40 backdrop-blur-sm rounded-2xl px-4 py-2"
            >
              <span className="text-green-400 text-xs font-medium flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                Open to work
              </span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5 }}
              className="absolute -bottom-4 -left-4 bg-purple-500/20 border border-purple-500/40 backdrop-blur-sm rounded-2xl px-4 py-2"
            >
              <span className="text-purple-300 text-xs font-medium">⚡ React Expert</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Highlights — horizontal scrolling feel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-24"
      >
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: '🏆', title: '11+ Years', desc: 'of frontend expertise', color: 'from-purple-600/20 to-purple-900/20', border: 'border-purple-500/20', accent: 'text-purple-400' },
            { icon: '⚛️', title: 'React Pro', desc: 'TypeScript & modern patterns', color: 'from-cyan-600/20 to-cyan-900/20', border: 'border-cyan-500/20', accent: 'text-cyan-400' },
            { icon: '🧪', title: 'Test First', desc: 'Jest & Playwright coverage', color: 'from-green-600/20 to-green-900/20', border: 'border-green-500/20', accent: 'text-green-400' },
            { icon: '🚀', title: 'Team Lead', desc: 'Mentoring & code reviews', color: 'from-pink-600/20 to-pink-900/20', border: 'border-pink-500/20', accent: 'text-pink-400' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={'bg-gradient-to-br ' + item.color + ' border ' + item.border + ' rounded-2xl p-6 cursor-default transition-all duration-300 hover:shadow-2xl'}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className={'font-bold text-lg mb-1 ' + item.accent}>{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom — timeline style currently doing */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="flex items-center gap-4 mb-10">
          <span className="text-gray-500 text-sm tracking-widest uppercase font-mono">Currently focused on</span>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {[
            { icon: '⚛️', text: 'React & TypeScript architecture', tag: 'Daily' },
            { icon: '🔄', text: 'Redux-Saga complex state management', tag: 'Expert' },
            { icon: '🧪', text: 'Playwright & Jest test automation', tag: 'Active' },
            { icon: '🏢', text: 'Enterprise SharePoint solutions', tag: 'Lead' },
          ].map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ x: 6 }}
              className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all duration-200 group cursor-default border border-transparent hover:border-purple-500/20"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-gray-300 text-sm flex-1">{item.text}</span>
              <span className="text-xs text-purple-400 bg-purple-900/30 border border-purple-500/20 px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">{item.tag}</span>
            </motion.div>
          ))}
        </div>

        {/* Connect strip */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-gradient-to-r from-purple-900/30 via-indigo-900/20 to-cyan-900/30 border border-purple-500/20">
          <div>
            <p className="text-white font-semibold mb-1">Want to work together?</p>
            <p className="text-gray-400 text-sm">I'm open to new roles, freelance, and collaborations.</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a href={personalInfo.github} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105">
              <FaGithub /> GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 border border-blue-500/30 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105">
              <FaLinkedin /> LinkedIn
            </a>
            <a href={'mailto:' + personalInfo.email}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105">
              Say Hello 👋
            </a>
          </div>
        </div>

      </motion.div>
    </section>
  )
}

export default About
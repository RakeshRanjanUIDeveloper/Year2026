import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { experiences } from '../data/portfolioData'

function Experience() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40])
  const exp = experiences[0]

  return (
    <section ref={ref} className="py-32 px-6 max-w-6xl mx-auto relative overflow-hidden">

      <motion.div style={{ y }} className="absolute top-20 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
      <motion.div style={{ y }} className="absolute bottom-20 right-0 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="text-purple-400 text-sm tracking-widest uppercase font-mono">02. Experience</span>
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
          Where I've
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            made an impact.
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl">
          11+ years of building enterprise-grade frontend solutions, leading teams, and delivering products that matter.
        </p>
      </motion.div>

      {/* Company Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 p-8 rounded-3xl bg-gradient-to-r from-purple-900/40 to-indigo-900/40 border border-purple-500/20 backdrop-blur-sm"
      >
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl flex items-center justify-center text-3xl shadow-xl shadow-purple-900/50 shrink-0">
            🏢
          </div>
          <div>
            <h3 className="text-white text-2xl font-bold mb-1">{exp.company}</h3>
            <p className="text-purple-400 font-medium text-lg">{exp.role}</p>
            <p className="text-gray-500 text-sm mt-1">📍 {exp.location}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <span className="bg-purple-900/60 text-purple-300 px-4 py-2 rounded-full text-sm border border-purple-500/30 font-mono">{exp.duration}</span>
          <span className="bg-cyan-900/60 text-cyan-300 px-4 py-2 rounded-full text-sm border border-cyan-500/30">{exp.years}</span>
          <span className="bg-green-900/60 text-green-300 px-4 py-2 rounded-full text-sm border border-green-500/30 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />{exp.type}
          </span>
        </div>
      </motion.div>

      {/* Career Progression */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="rounded-3xl bg-white/5 border border-purple-500/20 backdrop-blur-sm overflow-hidden mb-8"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-purple-500/10 bg-indigo-900/20">
          <div className="flex items-center gap-3">
            <span className="text-xl">📈</span>
            <h4 className="text-white font-semibold">Career Progression</h4>
          </div>
          <span className="text-xs text-gray-500 bg-white/5 border border-white/10 px-3 py-1 rounded-full">11 yrs 6 mos total</span>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-4 gap-4">
            {exp.progression.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className={'group relative rounded-2xl p-5 border transition-all duration-300 cursor-default overflow-hidden ' +
                  (i === 0
                    ? 'bg-gradient-to-br from-purple-900/60 to-indigo-900/60 border-purple-500/40'
                    : 'bg-white/5 border-white/10 hover:border-purple-500/30 hover:bg-white/10')}
              >
                {i === 0 && (
                  <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/20 rounded-full blur-[30px]" />
                )}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <span className={'text-xs font-mono px-2 py-1 rounded-full ' +
                      (i === 0 ? 'bg-green-900/50 text-green-400 border border-green-500/30' : 'bg-white/10 text-gray-400')}>
                      {i === 0 ? '● Current' : `0${exp.progression.length - i}`}
                    </span>
                    <span className={'text-xs ' + (i === 0 ? 'text-purple-400' : 'text-gray-500')}>{step.duration}</span>
                  </div>
                  <p className={'font-semibold text-sm leading-snug mb-2 ' + (i === 0 ? 'text-white' : 'text-gray-300 group-hover:text-white transition-colors')}>
                    {step.role}
                  </p>
                  <p className="text-gray-500 text-xs mb-1">{step.period}</p>
                  <p className="text-gray-600 text-xs">📍 {step.location}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Progress arrow connector */}
          <div className="hidden md:flex items-center justify-center gap-1 mt-4">
            {exp.progression.map((_, i) => (
              <div key={i} className="flex items-center gap-1">
                <div className={'w-2 h-2 rounded-full ' + (i === 0 ? 'bg-purple-400' : 'bg-white/20')} />
                {i < exp.progression.length - 1 && (
                  <div className="w-16 h-px bg-gradient-to-r from-purple-500/30 to-white/10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Leadership — full width with icons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        viewport={{ once: true }}
        className="rounded-3xl overflow-hidden mb-8 border border-purple-500/20"
      >
        <div className="flex items-center gap-3 px-6 py-5 border-b border-purple-500/10 bg-purple-900/20">
          <span className="text-xl">💡</span>
          <h4 className="text-white font-semibold">Leadership & Impact</h4>
        </div>
        <div className="grid md:grid-cols-3 gap-0">
          {exp.leadership.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className={'group relative p-6 cursor-default transition-all duration-200 bg-white/5 hover:bg-white/10 ' +
                (i < 3 ? 'border-b border-white/5' : '') + ' ' +
                (i % 3 !== 2 ? 'md:border-r border-white/5' : '')}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 flex items-start gap-4">
                <div className="w-8 h-8 rounded-xl bg-purple-900/60 border border-purple-500/30 flex items-center justify-center shrink-0 group-hover:border-purple-400/60 transition-all duration-200">
                  <span className="text-purple-400 text-xs font-mono">0{i + 1}</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-200">{point}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Certifications + Education side by side — redesigned */}
      <div className="grid md:grid-cols-5 gap-6 mb-6">

        {/* Certifications — 3 cols */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:col-span-3 rounded-3xl overflow-hidden border border-amber-500/20"
        >
          <div className="flex items-center gap-3 px-6 py-5 border-b border-amber-500/10 bg-amber-900/10">
            <span className="text-xl">🎓</span>
            <h4 className="text-white font-semibold">Certifications</h4>
            <span className="ml-auto text-xs text-amber-400/70 bg-amber-900/30 border border-amber-500/20 px-2 py-1 rounded-full">Microsoft</span>
          </div>
          <div className="p-6 space-y-3">
            {exp.certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 6 }}
                className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-amber-500/20 transition-all duration-200 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600/30 to-orange-600/30 border border-amber-500/20 flex items-center justify-center shrink-0 text-lg">
                  {i === 0 ? '☁️' : i === 1 ? '⚙️' : '💻'}
                </div>
                <div>
                  <p className="text-white text-sm font-medium group-hover:text-amber-300 transition-colors duration-200">{cert}</p>
                  <p className="text-gray-500 text-xs mt-0.5">Microsoft Certified</p>
                </div>
                <div className="ml-auto">
                  <span className="text-xs text-amber-500/60 bg-amber-900/20 px-2 py-1 rounded-full border border-amber-500/10">Verified</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education + Personal — 2 cols */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="md:col-span-2 flex flex-col gap-4"
        >
          {/* Education card */}
          <div className="flex-1 rounded-3xl overflow-hidden border border-cyan-500/20">
            <div className="flex items-center gap-3 px-5 py-4 border-b border-cyan-500/10 bg-cyan-900/10">
              <span className="text-lg">🏛️</span>
              <h4 className="text-white font-semibold text-sm">Education</h4>
            </div>
            <div className="p-5">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/20 p-5">
                <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-500/10 rounded-full blur-[20px]" />
                <p className="text-white font-bold text-sm mb-1">Bachelor of Engineering</p>
                <p className="text-gray-400 text-xs mb-2">Visvesvaraya Technological University</p>
                <span className="text-xs text-cyan-400 bg-cyan-900/40 border border-cyan-500/20 px-2 py-1 rounded-full">2010 — 2014</span>
              </div>
            </div>
          </div>

          {/* Languages + Interests */}
          <div className="rounded-3xl overflow-hidden border border-pink-500/20">
            <div className="flex items-center gap-3 px-5 py-4 border-b border-pink-500/10 bg-pink-900/10">
              <span className="text-lg">✨</span>
              <h4 className="text-white font-semibold text-sm">Personal</h4>
            </div>
            <div className="p-5">
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-3 font-mono">Languages</p>
              <div className="flex gap-2 mb-4">
                {['🗣️ English', '🗣️ Hindi'].map((l) => (
                  <span key={l} className="text-xs text-white bg-white/10 border border-white/10 px-3 py-1.5 rounded-full">{l}</span>
                ))}
              </div>
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-3 font-mono">Interests</p>
              <div className="flex gap-2 flex-wrap">
                {['🏏 Cricket', '✈️ Travelling', '👥 Socialising'].map((item) => (
                  <span key={item} className="text-xs text-pink-300 bg-pink-900/30 border border-pink-500/20 px-3 py-1.5 rounded-full">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Early career note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex items-start gap-4 p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300"
      >
        <span className="text-2xl shrink-0">🔍</span>
        <p className="text-gray-500 text-sm leading-relaxed">
          Early career included enterprise system support and SharePoint administration —
          building a strong <span className="text-gray-300">problem-solving mindset</span> and
          holistic understanding of application ecosystems that now powers robust frontend solutions.
        </p>
      </motion.div>

    </section>
  )
}

export default Experience
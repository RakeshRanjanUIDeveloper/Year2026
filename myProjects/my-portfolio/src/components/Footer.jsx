import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { personalInfo } from '../data/portfolioData'

function Footer() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px]" style={{ background: 'var(--blob-1)' }} />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-purple-400 text-sm tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Contact Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-8 rounded-full" />
          <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            I'm always open to new opportunities, collaborations, or just a good tech conversation. My inbox is open!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">

          <a href={'mailto:' + personalInfo.email} className="group border border-purple-500/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/30 hover:-translate-y-1" style={{ backgroundColor: 'var(--card-bg)' }}>
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">📧</div>
            <p className="font-medium text-sm mb-1" style={{ color: 'var(--text-primary)' }}>Email</p>
            <p className="text-xs break-all" style={{ color: 'var(--text-secondary)' }}>{personalInfo.email}</p>
          </a>

          <a href={'tel:+91' + personalInfo.phone} className="group border border-purple-500/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/30 hover:-translate-y-1" style={{ backgroundColor: 'var(--card-bg)' }}>
            <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">📱</div>
            <p className="font-medium text-sm mb-1" style={{ color: 'var(--text-primary)' }}>Phone</p>
            <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>+91 {personalInfo.phone}</p>
          </a>

          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="group border border-purple-500/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/30 hover:-translate-y-1" style={{ backgroundColor: 'var(--card-bg)' }}>
            <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <FaGithub className="text-white text-xl" />
            </div>
            <p className="font-medium text-sm mb-1" style={{ color: 'var(--text-primary)' }}>GitHub</p>
            <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>RakeshRanjanUIDeveloper</p>
          </a>

          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="group border border-purple-500/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/30 hover:-translate-y-1" style={{ backgroundColor: 'var(--card-bg)' }}>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <FaLinkedin className="text-white text-xl" />
            </div>
            <p className="font-medium text-sm mb-1" style={{ color: 'var(--text-primary)' }}>LinkedIn</p>
            <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>rakesh-ranjan-b637639b</p>
          </a>
        </motion.div>

        {/* Location Strip */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }} className="flex items-center justify-center gap-2 mb-10 text-sm" style={{ color: 'var(--text-muted)' }}>
          <span>📍</span>
          <span>{personalInfo.location}</span>
          <span>·</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400">Open to opportunities</span>
          </span>
        </motion.div>

        {/* CTA Button */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }} className="text-center mb-16">
          <a href={'mailto:' + personalInfo.email} className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-10 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
            Say Hello 👋
          </a>
        </motion.div>

        {/* Footer Bar */}
        <div className="border-t border-purple-900/30 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Designed & Built by{' '}
              <span className="text-purple-400 font-medium">Rakesh Ranjan</span>
            </p>

            <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
              <span>Built with</span>
              <span className="text-purple-400">React</span>
              <span>+</span>
              <span className="text-cyan-400">Tailwind</span>
              <span>+</span>
              <span className="text-pink-400">Framer Motion</span>
            </div>

            <div className="flex items-center gap-4">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors duration-200 text-lg" style={{ color: 'var(--text-muted)' }}>
                <FaGithub />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors duration-200 text-lg" style={{ color: 'var(--text-muted)' }}>
                <FaLinkedin />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Footer
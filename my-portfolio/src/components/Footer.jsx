import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { personalInfo } from '../data/portfolioData'

function Footer() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">

      {/* Background Blobs */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-700/20 rounded-full blur-[120px]" />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 text-sm tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-8 rounded-full" />
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            I'm always open to new opportunities, collaborations, or just a good tech conversation. My inbox is open!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-4 mb-12"
        >
          {/* Email */}
          <a href={'mailto:' + personalInfo.email}
            className="group bg-white/5 border border-purple-500/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/30 hover:-translate-y-1"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              📧
            </div>
            <p className="text-white font-medium text-sm mb-1">Email</p>
            <p className="text-gray-400 text-xs break-all">{personalInfo.email}</p>
          </a>

          {/* GitHub */}
          <a href={personalInfo.github} target="_blank" rel="noreferrer"
            className="group bg-white/5 border border-purple-500/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/30 hover:-translate-y-1"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <FaGithub className="text-white text-xl" />
            </div>
            <p className="text-white font-medium text-sm mb-1">GitHub</p>
            <p className="text-gray-400 text-xs">RakeshRanjanUIDeveloper</p>
          </a>

          {/* LinkedIn */}
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer"
            className="group bg-white/5 border border-purple-500/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/30 hover:-translate-y-1"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <FaLinkedin className="text-white text-xl" />
            </div>
            <p className="text-white font-medium text-sm mb-1">LinkedIn</p>
            <p className="text-gray-400 text-xs">rakesh-ranjan-b637639b</p>
          </a>
        </motion.div>

        {/* Big CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <a href={'mailto:' + personalInfo.email}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-10 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
          >
            Say Hello 👋
          </a>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-purple-900/30 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-gray-500 text-sm">
              Designed & Built by{' '}
              <span className="text-purple-400 font-medium">Rakesh Ranjan</span>
            </p>

            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span>Built with</span>
              <span className="text-purple-400">React</span>
              <span>+</span>
              <span className="text-cyan-400">Tailwind</span>
              <span>+</span>
              <span className="text-pink-400">Framer Motion</span>
            </div>

            <div className="flex items-center gap-4">
              <a href={personalInfo.github} target="_blank" rel="noreferrer"
                className="text-gray-500 hover:text-purple-400 transition-colors duration-200 text-lg">
                <FaGithub />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer"
                className="text-gray-500 hover:text-purple-400 transition-colors duration-200 text-lg">
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
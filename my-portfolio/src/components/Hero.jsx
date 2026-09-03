import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { personalInfo } from '../data/portfolioData'

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full blur-[120px] animate-pulse transition-all duration-1000"
        style={{ background: 'var(--blob-1)' }} />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full blur-[120px] animate-pulse transition-all duration-1000"
        style={{ background: 'var(--blob-2)' }} />
      <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] rounded-full blur-[100px] animate-pulse transition-all duration-1000"
        style={{ background: 'var(--blob-3)' }} />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">
        {/* Photo Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-purple-500/30 shadow-2xl shadow-purple-900/50">
              <img
                src="/rakesh-photo.jpg"
                alt="Rakesh Ranjan"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-[#0f0c29] flex items-center justify-center">
              <span className="text-xs">✓</span>
            </div>
          </div>
        </motion.div>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-purple-900/40 border border-purple-500/30 
                     rounded-full px-4 py-2 mb-8 backdrop-blur-sm"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-purple-300 text-sm tracking-wide">
            Open to new opportunities
          </span>
        </motion.div>




        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          Hey, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">Rakesh</span>{' '}
          👋
        </motion.h1>

        <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} className="text-xl md:text-2xl text-purple-300 font-medium mb-6 tracking-wide">
          {personalInfo.title}
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {personalInfo.subtitle}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.65 }} className="flex flex-wrap justify-center gap-4 mb-10">
          {[
            { label: 'Years Experience', value: '11+' },
            { label: 'Projects Shipped', value: '12+' },
            { label: 'Tech Stack', value: 'MERN' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/5 border border-purple-500/20 backdrop-blur-sm rounded-2xl px-6 py-3 text-center">
              <div className="text-2xl font-bold text-purple-400">{stat.value}</div>
              <div className="text-gray-400 text-xs mt-1 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }} className="flex flex-wrap justify-center gap-4 mb-12">
          <Link to="projects" smooth={true} duration={500} offset={-80} className="cursor-pointer bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30">
            View My Work
          </Link>
          <a href={'mailto:' + personalInfo.email} className="border border-purple-500/40 hover:border-purple-400 text-purple-300 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:bg-purple-900/30 backdrop-blur-sm">
            Get In Touch
          </a>
          <a href="/Rakesh_Ranjan_Resume.pdf" download
            className="flex items-center gap-2 border border-purple-500/40 hover:border-purple-400 text-purple-300 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:bg-purple-900/30 backdrop-blur-sm">
            ↓ Download Resume
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1 }} className="flex justify-center gap-6 mb-16">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-purple-400 text-2xl transition-all duration-200 hover:scale-110">
            <FaGithub />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-purple-400 text-2xl transition-all duration-200 hover:scale-110">
            <FaLinkedin />
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.2 }} className="flex justify-center">
          <Link to="about" smooth={true} duration={500} offset={-80}>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="text-purple-400 cursor-pointer text-3xl">
              ↓
            </motion.div>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
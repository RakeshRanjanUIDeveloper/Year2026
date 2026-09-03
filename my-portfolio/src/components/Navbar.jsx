import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiMenu, HiX } from 'react-icons/hi'
import { personalInfo } from '../data/portfolioData'

const navLinks = [
  { label: 'About',      to: 'about' },
  { label: 'Experience', to: 'experience' },
  { label: 'Projects',   to: 'projects' },
  { label: 'Tech Stack', to: 'techstack' },
  { label: 'Contact',    to: 'contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${scrolled 
        ? 'backdrop-blur-md bg-[#0f0c29]/80 shadow-lg shadow-purple-900/20 border-b border-purple-900/30' 
        : 'bg-transparent'}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-white font-bold text-xl tracking-wider">
          <span className="text-purple-400">R</span>R
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                duration={600}
                offset={-70}
                activeClass="text-purple-400 font-medium"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200 
                           text-sm cursor-pointer tracking-wide"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-4">
          <a href={personalInfo.github} target="_blank" rel="noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-xl">
            <FaGithub />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-xl">
            <FaLinkedin />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-400 hover:text-purple-400 text-2xl transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden backdrop-blur-md bg-[#0f0c29]/95 border-t border-purple-900/30 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  duration={600}
                  offset={-70}
                  className="text-gray-400 hover:text-purple-400 transition-colors 
                             duration-200 text-sm cursor-pointer block py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-4 mt-4 pt-4 border-t border-purple-900/30">
            <a href={personalInfo.github} target="_blank" rel="noreferrer"
              className="text-gray-400 hover:text-purple-400 text-xl transition-colors">
              <FaGithub />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer"
              className="text-gray-400 hover:text-purple-400 text-xl transition-colors">
              <FaLinkedin />
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
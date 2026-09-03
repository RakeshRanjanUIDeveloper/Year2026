import { useState, useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import Loader from './components/Loader'
import CursorGlow from './components/CursorGlow'
import { motion } from 'framer-motion'

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

function Portfolio() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="bg-[#0f0c29] min-h-screen">
      <CursorGlow />
      <Loader isLoading={isLoading} />
     {!isLoading && (
  <>
    <ScrollProgress />
    <Navbar />
    <section id="hero"><Hero /></section>
    <section id="about" className="pt-20"><About /></section>
    <section id="experience" className="pt-20"><Experience /></section>
    <section id="projects" className="pt-20"><Projects /></section>
    <section id="techstack" className="pt-20"><TechStack /></section>
    <section id="contact" className="pt-20"><Footer /></section>
  </>
)}
    </main>
  )
}

function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  )
}

export default App
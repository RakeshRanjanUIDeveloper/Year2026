import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <main className="bg-[#0f0c29] min-h-screen">
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="experience"><Experience /></section>
      <section id="projects"><Projects /></section>
      <section id="techstack"><TechStack /></section>
      <section id="contact"><Footer /></section>
    </main>
  )
}

export default App
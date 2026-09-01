import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToHash from './components/ScrollToHash'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Hero from './sections/Hero'
import About from './sections/About'
import ProjectsPreview from './sections/ProjectsPreview'
import Education from './sections/Education'
import Contact from './sections/Contact'

import Projects from './pages/Projects'

function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProjectsPreview />
      <Education />
      <Contact />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
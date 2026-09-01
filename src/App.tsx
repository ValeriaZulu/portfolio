import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import ProjectsPreview from './sections/ProjectsPreview'
import Education from './sections/Education'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <ProjectsPreview />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
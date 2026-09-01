import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import ProjectsPreview from './sections/ProjectsPreview'
import Education from './sections/Education'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <ProjectsPreview />
        <Education />
      </main>
    </>
  )
}

export default App
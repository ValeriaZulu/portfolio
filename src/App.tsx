import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import ProjectsPreview from './sections/ProjectsPreview'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <ProjectsPreview />
      </main>
    </>
  )
}

export default App
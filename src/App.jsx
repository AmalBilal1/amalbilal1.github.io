import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Research from './components/Research'
import Experience from './components/Experience'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import './App.css'

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Research />
      <Experience />
      <Contact />
    </div>
  )
}

export default App

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Research from './components/Research'
import Experience from './components/Experience'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Research />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}

export default App

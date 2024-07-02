import About from "./componets/About/About"
import Contact from "./componets/Contact/Contact"
import Hero from "./componets/Hero/Hero"
import Navbar from "./componets/Navbar/Navbar"
import Project from "./componets/Projects/Project"
import Skill from "./componets/Skills/Skill"



function App() {
  

  return (
    <>
      <section>
        <Navbar />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>

      <section>
        <Skill />
      </section>

      <section>
        <Project />
      </section>

      <section >
        <Contact />
      </section>
    </>
  )
}

export default App

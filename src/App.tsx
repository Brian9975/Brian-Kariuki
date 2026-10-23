import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Testimonial />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;

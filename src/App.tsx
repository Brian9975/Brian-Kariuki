import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonial";
import { Phone } from "lucide-react";

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


      <div className="backdrop-blur-lg text-slate-50 fixed bottom-7 right-5 text-lg font-bold border border-slate-600 rounded-lg p-2">
         <p className="flex  items-center gap-2"><Phone size={20}/><span>+254 1 42 692 333</span></p>
      </div>
    </>
  );
}

export default App;

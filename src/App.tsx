import Library from "./assets/Screenshot 2026-04-16 13.57.40.png"
import Booking from "./assets/Screenshot 2026-04-16 13.32.36.png"
import { useState } from "react";
import { Menu, X } from "lucide-react";


function App() {
const [openNav, setOpenNav] = useState(false)


  return <>
  <nav className="bg-slate-900 z-50 border-b border-slate-500 fixed top-0 w-full p-5 text-slate-100">
    <div className="flex justify-between items-center">
    <div>
      <p className="font-bold text-lg tracking-wide"><span className="text-cyan-400">Brian</span> Tech Solutions</p>
    </div> 

   <div className="md:flex hidden text-slate-300 text-sm font-bold gap-4 md:gap-25">
    <a href="#about" className="hover:text-cyan-400 transition-all">About</a><a className="hover:text-cyan-400 transition-all" href="#skills">Skills</a><a href="#projects" className="hover:text-cyan-400 transition-all">Projects</a><a className="hover:text-cyan-400 transition-all" href="#contact">Contact</a>
   </div>
    <button onClick={() => setOpenNav(!openNav)} className="md:hidden cursor-pointer">
      {openNav ? <X/> : <Menu/>}
    </button>
   </div>
   
   { openNav &&
         <div className="md:hidden flex flex-col gap-4 pt-4 pb-2">
          <a href="#about" onClick={() => setOpenNav(false)} className="text-slate-300 transition-all hover:text-cyan-400 text-sm">About</a>
          <a href="#skills" onClick={() => setOpenNav(false)} className="text-slate-300 transition-all hover:text-cyan-400 text-sm">Skills</a>
          <a href="#projects" onClick={() => setOpenNav(false)} className="text-slate-300 transition-all hover:text-cyan-400 text-sm">Projects</a>
          <a href="#contact" onClick={() => setOpenNav(false)} className="text-slate-300 transition-all hover:text-cyan-400 text-sm">Contact</a>
        </div>
}
  </nav>

  {/* Mobile Menu */}
  <div className="md:hidden">
    
  </div>


  {/* Hero Section */}
  <section className="bg-slate-950 text-center items-center flex justify-center min-h-screen">
    <div className="mx-4">
      <h1 className="text-slate-100 tracking-wide  pb-5 font-extrabold text-5xl">Hello, l am <span className="text-cyan-400">Brian</span></h1>
      <p className="text-slate-300 pb-7 tracking-wide">A Frontend Developer building modern and scalable web applications with React, TypeScript, and Firebase.</p>
      <div className="tracking-wide flex justify-center gap-4">
        <a href="#projects" className="bg-cyan-400  py-2 px-4 hover:opacity-80 transition-all font-bold duration-100 rounded cursor-pointer">See My Work</a>
        <a href="#contact" className="border text-slate-300 hover:opacity-80 transition-all duration-100 cursor-pointer py-2 px-5 font-bold rounded border-slate-500">Contact Me</a>
      </div>
    </div>
  </section>

  {/* About Section */}
  <section id="about" className="bg-slate-900 py-30 text-center">
   <h1 className="text-cyan-400 text-2xl tracking-wide font-bold pt-5">About Me</h1>
   <div className="  flex justify-center items-center mb-12">
    <div className="w-180 bg-slate-950 border my-8 mx-5 px-7 py-10 tracking-wide rounded-xl border-slate-500">
    <p className="text-slate-300 leading-relaxed text-left">l am a Frontend Web Developer based in Ongata Rongai, Kenya specializing in building business web applications using React,TypeScript,Firebase and Tailwind.
      l am self-taught, self-driven and l built real deployed applications that solve real business problems.l am available for freelance projects and remote opportunities world wide.
    </p>
    </div>
   </div>
  </section>

  {/*Skills section*/}

  <section id="skills" className="bg-slate-950 py-30 text-center">
   <h1 className="text-2xl text-cyan-400  tracking-wide font-bold">Skills</h1>
   <p className="text-slate-300 mx-2 font-bold pt-5 pb-10">Here are technologies that l can proficiently work with</p>
 <div className="mx-5 mb-30  flex flex-wrap justify-center gap-4">
    {["HTML", "CSS", "TypeScript", "React", "Firebase", "Tailwind CSS", "ShadCN UI", "Git & Github", "Vercel"].map(skill => (
      <span className="text-slate-300 bg-slate-900 border border-cyan-400 py-2 px-4 rounded-lg" key={skill}>{skill}</span>
    ))}
 </div>
  </section>


<section id="projects" className="bg-slate-900 text-center py-30">
  <h1 className="text-cyan-400 tracking-wide font-bold text-2xl">Projects</h1>
  <p className="font-bold text-slate-300 tracking-wide pt-5 pb-10">What l have built</p>
  <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-4">
    <div className="w-80 md:w-120 p-4 border border-slate-500 rounded-xl bg-slate-950">
      <div className="mb-5">
        <img className="w-full rounded-lg" src={Library} alt="Library system screenshot" />
      </div>
      <h1 className="text-left mb-5 text-slate-100 text-xl tracking-wide font-bold">Strathmore University Chaplaincy Library System</h1>
      <p className="text-left mb-3 text-slate-300 tracking-wide">l developed a full-stack Library Management System for Strathmore University Chaplaincy.The system's features include role-based access control, book management, issue and return functionality,overdue tracking, search filters and firebase email and password authentication only for authorized admins. </p>

      <h1 className="text-left mb-5 text-slate-100 font-bold text-lg">Technologies used</h1>
      <div className="flex flex-wrap mb-5 gap-4">
        {["React", "TypeScript", "Firebase", "Tailwind", "ShadCN"].map(skill => (
      <span className="text-slate-300 bg-slate-900 border border-cyan-400 py-1 px-2 text-sm rounded-lg" key={skill}>{skill}</span>
    ))}
      </div>
      <div className="mb-5 flex gap-4">
        <a href="https://strathmore-chaplaincy-library-system.vercel.app" className="bg-cyan-400 hover:opacity-80 cursor-pointer  rounded py-2 px-5">
          Visit
          </a>

          <a href="https://github.com/Brian9975/Strathmore-Chaplaincy-Lib" className="border-slate-500 hover:opacity-80 cursor-pointer rounded border py-2 px-5 text-slate-300">
            Github
          </a>
      </div>
    </div>
    <div className="w-80 md:w-120 p-4 border border-slate-500 rounded-xl bg-slate-950 tracking-wide">
      <div className="mb-5">
        <img className="w-full rounded-lg" src={Booking} alt="Booking system screenshot" />
      </div>
      <h1 className="text-left mb-5 text-slate-100 text-xl tracking-wide font-bold">Multi-Business Booking Manager</h1>
      <p className="text-left mb-3 text-slate-300 tracking-wide">l built a secure booking management system to help keep track of customers and bookings with status update.
        The main features include multi-tenancy logic meaning, different businesses can use the same app, but their data is completely private and isolated from each other, customer management, booking customers for different services in seconds and Firebase authentication.
      </p>
            <h1 className="text-left mb-5 text-slate-100 font-bold text-lg">Technologies used</h1>
             <div className="flex flex-wrap mb-5 gap-4">
        {["React", "TypeScript", "Firebase", "Tailwind"].map(skill => (
      <span className="text-slate-300 bg-slate-900 border border-cyan-400 py-1 px-2 text-sm rounded-lg" key={skill}>{skill}</span>
    ))}
      </div>

       <div className="mb-5 flex gap-4">
        <a href="https://your-booking-manager.vercel.app" className="bg-cyan-400 hover:opacity-80 cursor-pointer  rounded py-2 px-5">
          Visit
          </a>

          <a href="https://github.com/Brian9975/Booking-System" className="border-slate-500 hover:opacity-80 cursor-pointer rounded border py-2 px-5 text-slate-300">
            Github
          </a>
      </div>
    </div>
  </div>
</section>
  
  
  </>;
}

export default App;

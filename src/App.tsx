import Library from "./assets/Screenshot 2026-04-16 13.57.40.png"
import Booking from "./assets/Screenshot 2026-04-16 13.32.36.png"
import { useState, useRef } from "react";
import { Menu, X, CheckCircle, XCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import Github from "./assets/github-white-icon.png";
import LinkedIn from "./assets/linkedin-app-white-icon.png";
import Upwork from "./assets/upwork-svgrepo-com.svg"

function App() {
const form = useRef<HTMLFormElement>(null)

const [openNav, setOpenNav] = useState(false)
const [error, setError] = useState("")
const [success, setSuccess] = useState(false)
const [sending, setSending] =  useState(false)


const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault()
const name = form.current!.from_name.value.trim()
 const email = form.current!.from_email.value.trim()
  const message = form.current!.message.value.trim()


    if (!name) { 
      setError("Please enter your name")
     
       setTimeout(() => {
      setError("")
    }, 8000);

     return 
  
  }
    if (!email || !email.includes("@")) { setError("Please enter your email")
    
      setTimeout(() => {
      setError("")
    }, 8000)
      return
    
    }
    if (!message) { setError("Please enter your message");
        setTimeout(() => {
      setError("")
    }, 8000)
      return }
    
    setSending(true)
   
    emailjs.sendForm(
      "service_4lze0tw",
      "template_z9qyf3w",
      form.current!,
      "zVkR3KtUiKP960FUJ"
    )
    .then(() => {
    setSuccess(true)
    setTimeout(() => {
     setSuccess(false)
    }, 6000)
    setSending(false)
    form.current!.reset()
    })
    .catch(() => {
      setError("Something went wrong. Please try again.")
      setTimeout(() => {
       setError("")
      }, 6000)
      setSending(false)
    })

}


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

 


  {/* Hero Section */}
  <section className="bg-slate-950 text-center items-center flex justify-center min-h-screen">
    <div className="mx-4">
      <h1 className="text-slate-100 tracking-wide  pb-5 font-extrabold text-5xl">Hello, l am <span className="text-cyan-400">Brian</span></h1>
      <p className="text-slate-300 pb-7 tracking-wide">Frontend Developer specializing in React, TypeScript and Firebase web applications</p>
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
    <p className="text-slate-300 leading-relaxed text-left">l am a Frontend Web Developer based in Nairobi, Kenya specializing in building business web applications using React,TypeScript,Firebase and Tailwind.
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


<section id="projects" className="bg-slate-900 relative text-center py-30">
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
  
  <section id="contact" className="bg-slate-950 pt-30 tracking-wide text-center">
      <h1 className="text-cyan-400 tracking-wide font-bold text-2xl">Contact</h1>
      <p className="font-bold text-slate-300 tracking-wide pt-5 pb-10">Lets get in touch</p>
        <p className="text-slate-300 mb-10 mx-4">
    Available for freelance projects and remote opportunities worldwide
  </p>

  <div className="flex justify-center">
    <form ref={form} onSubmit={handleSendMessage} className="bg-slate-900 border border-slate-500 flex flex-col items-center justify-center gap-7 rounded-xl mx-10 p-5 text-slate-5" action="">
      <div className="flex flex-col items-start">
        <label htmlFor="name" className="text-slate-100 text-lg font-bold">
          Name
        </label>
        <input placeholder="Enter your name..." id="name" name="from_name" className="border-slate-500 placeholder-slate-500 mt-1.5 w-70 md:w-100 py-1 text-slate-100 px-2 outline-slate-500 border rounded" type="text" />
      </div>
      <div className="flex flex-col items-start">
        <label htmlFor="email" className="text-slate-100  text-lg font-bold">
          Email
        </label>
        <input placeholder="Enter your email..." name="from_email" id="email" className="border-slate-500 mt-1.5 placeholder-slate-500 w-70 md:w-100 py-1 text-slate-100 px-2 outline-slate-500 border rounded " type="email" />
      </div>

        <div className="flex flex-col items-start">
        <label htmlFor="message" className="text-slate-100 text-lg font-bold">
          Your Message
        </label>
        <textarea placeholder="Enter your message..." name="message" className="border-slate-500 placeholder-slate-500 resize-none mt-1.5 py-1 text-slate-100 px-2 outline-slate-500 border w-70 md:w-100 rounded" id="message"></textarea>
      </div>

    

      <button disabled={sending} className="border border-slate-500 text-slate-950 bg-slate-100 py-1.5 w-full rounded cursor-pointer hover:opacity-80">{sending ? "Sending..." : "Send Message"}</button>
    </form>
  </div>
 
 <footer className="bg-slate-900 border-t p-5 border-slate-500 mt-20">
  <div className="flex justify-center gap-7">
  <div className="w-7">
    <a href="https://github.com/Brian9975" className="">
    <img src={Github} className="w-full" alt="Github Logo" />
    </a>
  </div>

   <div className="w-7">
    <a href="https://www.linkedin.com/in/briankariukitech/" className="">
    <img src={LinkedIn} className="w-full" alt="LinkedIn Logo" />
    </a>
  </div>

     <div className="w-7">
    <a href="" className="">
    <img src={Upwork} className="w-full" alt="Upwork Logo" />
    </a>
  </div>
</div>

<p className="text-slate-500 mt-4 text-sm"> © 2026 Brian Tech Solutions. All rights reserved.</p>
 </footer>
  </section>


{ error &&
  <div className="fixed tracking-wide bottom-0 flex bg-slate-950/50 backdrop-blur-lg justify-end w-full">

<div className="bg-transparent border border-slate-500 m-5 py-4 px-5 rounded-xl">

    <p className="text-red-400 text-sm"><div className="flex items-center gap-2"><XCircle size={16}/><div><p>{error}</p></div></div></p>
</div>



  </div>
}

{ success &&
  <div className="fixed bottom-0 tracking-wide flex bg-slate-950/50 backdrop-blur-md justify-end w-full">

<div className="bg-transparent border border-slate-500 m-5 py-4 px-5 rounded-xl">
     <p className="text-green-400 text-sm"><div className="flex items-center gap-2"><CheckCircle size={16}/><div><p>Message sent successfully.</p></div></div></p>
</div>



  </div>
}
  
  </>;
}

export default App;

function App() {
  return <>
  <nav className="bg-slate-900 z-50 border-b border-slate-500 flex fixed top-0 w-full justify-between p-5 text-slate-100">
    <div>
      <p className="font-bold text-lg tracking-wide"><span className="text-cyan-400">Brian</span> Tech Solutions</p>
    </div> 

   <div className="flex text-slate-300 font-bold gap-4 md:gap-25">
    <a href="#about" className="hover:text-cyan-400 transition-all">About</a><a className="hover:text-cyan-400 transition-all" href="#skills">Skills</a><a href="#projects" className="hover:text-cyan-400 transition-all">Projects</a><a className="hover:text-cyan-400 transition-all" href="#contact">Contact</a>
   </div>
  </nav>


  {/* Hero Section */}
  <section className="bg-slate-950 text-center items-center flex justify-center min-h-screen">
    <div className="mx-4">
      <h1 className="text-slate-100 tracking-wide pb-5 font-extrabold text-5xl">Hello, l am <span className="text-cyan-400">Brian</span></h1>
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
   <p className="text-slate-300 pt-5 pb-10">Here are technologies that l can proficiently work with</p>
 <div className="mx-5 mb-30  flex flex-wrap justify-center gap-4">
    {["HTML", "CSS", "TypeScript", "React", "Firebase", "Tailwind CSS", "ShadCN UI", "Git & Github", "Vercel"].map(skill => (
      <span className="text-slate-300 bg-slate-900 border border-cyan-400 py-2 px-4 rounded-lg" key={skill}>{skill}</span>
    ))}
 </div>
  </section>


<section id="projects" className="bg-slate-900 text-center py-30">
  <h1 className="text-cyan-400 tracking-wide font-bold text-2xl">Projects</h1>
</section>
  
  
  </>;
}

export default App;

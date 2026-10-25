

export default function Hero() {
  return (
  <section id="hero" className="bg-slate-950 items-center flex justify-center min-h-[75vh] py-16 md:py-24">
    <div className="mx-4">
      <h1 className="text-slate-300 tracking-wide text-lg">Hello, l'm <span className="text-cyan-400">Brian</span></h1>
      <h1 className="text-slate-50 py-2 font-bold text-4xl">Frontend Developer</h1>
      <p className="text-slate-300 text-lg pb-7 tracking-wide">I build responsive, user-friendly websites and web applications using React and TypeScript.</p>
      <div className="tracking-wide flex gap-4">
        <a href="#projects" className="bg-cyan-400  py-2 px-4 hover:opacity-80 transition-all font-bold duration-100 rounded cursor-pointer">See My Work</a>
        <a href="#contact" className="border text-slate-300 hover:opacity-80 transition-all duration-100 cursor-pointer py-2 px-5 font-bold rounded border-slate-500">Contact Me</a>
      </div>
    </div>
  </section>
  )
}



export default function Skills() {
  return (
  <section id="skills" className="bg-slate-950 py-30 text-center">
   <h1 className="text-2xl text-cyan-400  tracking-wide font-bold">Skills</h1>
   <p className="text-slate-300 mx-2 font-bold pt-5 pb-10">Here are technologies that l can proficiently work with</p>
 <div className="mx-5 mb-30  flex flex-wrap justify-center gap-4">
    {["HTML", "CSS", "TypeScript", "React", "Firebase", "Tailwind CSS", "ShadCN UI", "Git & Github", "Vercel"].map(skill => (
      <span className="text-slate-300 bg-slate-900 border border-cyan-400 py-2 px-4 rounded-lg" key={skill}>{skill}</span>
    ))}
 </div>
  </section>
  )
}

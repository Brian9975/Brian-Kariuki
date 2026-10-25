import Library from "../assets/Screenshot 2026-04-16 13.57.40.png"
import LeadTracker from "../assets/Screenshot 2026-10-23 12.25.06.png"
import Ahwan from "../assets/Screenshot 2026-10-23 12.56.34.png"
import Space from "../assets/Screenshot 2026-10-23 13.12.44.png"
export default function Projects() {
  return (
   <section id="projects" className="bg-slate-950 text-center py-16 md:py-24">
  <h1 className="text-cyan-400 tracking-wide font-bold text-2xl">Projects</h1>
  <p className="font-bold text-slate-300 tracking-wide py-5">What l have built</p>
  <div className="grid grid-cols-1 md:grid-cols-2  justify-items-center items-start gap-4">
    <div className="w-90 md:w-120 p-4 shadow-md shadow-slate-600 rounded-xl bg-slate-900">
      <div className="mb-5">
        <img className="w-full rounded-lg" src={Library} alt="Library system screenshot" />
      </div>
      <h1 className="text-left mb-5 text-slate-100 text-xl tracking-wide font-bold">Strathmore University - Institution's Library System</h1>
      <p className="text-left mb-3 text-slate-300 text-lg tracking-wide">Built an internal library management system for Strathmore University Chaplaincy, replacing manual book tracking with digital cataloguing, borrowing records, and real-time availability. Features secure authentication and role-based permissions for administrators.<br/><br/>

<span className="text-sm text-amber-400">Access: This is a live institutional system restricted to authorized administrators. Source code and setup instructions are available on GitHub.</span></p>

      <div className="flex flex-wrap mb-5 gap-4">
        {["React", "TypeScript", "Firebase", "Tailwind CSS", "ShadCN"].map(skill => (
      <span className="text-slate-300 bg-slate-950 border border-cyan-400 py-1 px-2 text-sm rounded-lg" key={skill}>{skill}</span>
    ))}
      </div>
      <div className="mb-5 flex gap-4">
        <a href="https://strathmore-chaplaincy-library-system.vercel.app" className="bg-cyan-400 hover:opacity-80 cursor-pointer  rounded py-2 px-5">
          Live Site
          </a>

          <a href="https://github.com/Brian9975/Strathmore-Chaplaincy-Lib" className="border-slate-500 hover:opacity-80 cursor-pointer rounded border py-2 px-5 text-slate-300">
            Github
          </a>
      </div>
    </div>
    <div className="w-90 md:w-120 p-4 shadow-md shadow-slate-600 rounded-xl bg-slate-900 tracking-wide">
      <div className="mb-5">
        <img className="w-full rounded-lg" src={LeadTracker} alt="Lead Tracker screenshot" />
      </div>
      <h1 className="text-left mb-5 text-slate-100 text-xl tracking-wide font-bold">BTech DashBoard - Lead & Client Tracker</h1>
      <p className="text-left mb-3 text-slate-300 tracking-wide text-lg">Developed a lead and client management dashboard that automatically highlights leads requiring follow-up, eliminating time-consuming manual checks. Features secure authentication, cloud synchronization, and offline-first data storage.
      </p>

             <div className="flex flex-wrap mb-5 gap-4">
        {["React", "TypeScript", "Firebase", "Tailwind CSS", "IndexedDB"].map(skill => (
      <span className="text-slate-300 bg-slate-950 border border-cyan-400 py-1 px-2 text-sm rounded-lg" key={skill}>{skill}</span>
    ))}
      </div>

       <div className="mb-5 flex gap-4">
        <a href="https://b-tech-dashboard-eight.vercel.app/login" className="bg-cyan-400 hover:opacity-80 cursor-pointer  rounded py-2 px-5">
          Live Site
          </a>

          <a href="https://github.com/Brian9975/BTech-Dashboard" className="border-slate-500 hover:opacity-80 cursor-pointer rounded border py-2 px-5 text-slate-300">
            Github
          </a>
      </div>
    </div>

 <div className="w-90 md:w-120 p-4 shadow-md shadow-slate-600 rounded-xl bg-slate-900 tracking-wide">
      <div className="mb-5">
        <img className="w-full rounded-lg" src={Ahwan} alt="Ahwan pharmacy website screenshot" />
      </div>
      <h1 className="text-left mb-5 text-slate-100 text-xl tracking-wide font-bold">Ahwan Pharmacy - Business Website</h1>
      <p className="text-left mb-3 text-slate-300 tracking-wide text-lg">Built a responsive business website for Ahwan Pharmacy, showcasing its products and services while enabling customers to place orders through WhatsApp. Integrated Google Analytics to track website activity and help the business establish an online presence.
      </p>
            
             <div className="flex flex-wrap mb-5 gap-4">
        {["HTML", "CSS", "JavaScript", "Google Analytics 4"].map(skill => (
      <span className="text-slate-300 bg-slate-950 border border-cyan-400 py-1 px-2 text-sm rounded-lg" key={skill}>{skill}</span>
    ))}
      </div>

       <div className="mb-5 flex gap-4">
        <a href="https://www.ahwanpharmacy.co.ke/" className="bg-cyan-400 hover:opacity-80 cursor-pointer  rounded py-2 px-5">
          Live Site
          </a>

          <a href="https://github.com/Brian9975/Ahwan-Pharmacy" className="border-slate-500 hover:opacity-80 cursor-pointer rounded border py-2 px-5 text-slate-300">
            Github
          </a>
      </div>
    </div>

 <div className="w-90 md:w-120 p-4 shadow-md shadow-slate-600 rounded-xl bg-slate-900 tracking-wide">
      <div className="mb-5">
        <img className="w-full rounded-lg" src={Space} alt="Space Tourism Website screenshot" />
      </div>
      <h1 className="text-left mb-5 text-slate-100 text-xl tracking-wide font-bold">Space Tourism - Frontend Mentor </h1>
      <p className="text-left mb-3 text-slate-300 tracking-wide text-lg">Transformed a Figma design into a responsive, interactive space tourism website featuring smooth page transitions, tab-based navigation, and dynamic content across multiple pages.
      </p>
            <h1 className="text-left mb-5 text-slate-100 font-bold text-lg">Technologies used</h1>
             <div className="flex flex-wrap mb-5 gap-4">
        {["React", "Tailwind CSS"].map(skill => (
      <span className="text-slate-300 bg-slate-950 border border-cyan-400 py-1 px-2 text-sm rounded-lg" key={skill}>{skill}</span>
    ))}
      </div>

       <div className="mb-5 flex gap-4">
        <a href="https://space-tourism-website-eta-ten.vercel.app/" className="bg-cyan-400 hover:opacity-80 cursor-pointer  rounded py-2 px-5">
          Live Site
          </a>

          <a href="https://github.com/Brian9975/Space-Tourism-Website" className="border-slate-500 hover:opacity-80 cursor-pointer rounded border py-2 px-5 text-slate-300">
            Github
          </a>
      </div>
    </div>


    
  </div>
</section>
  )
}

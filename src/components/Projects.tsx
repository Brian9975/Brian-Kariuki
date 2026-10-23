import Library from "../assets/Screenshot 2026-04-16 13.57.40.png"
import Booking from "../assets/Screenshot 2026-04-16 13.32.36.png"

export default function Projects() {
  return (
   <section id="projects" className="bg-slate-900 text-center py-16 md:py-24">
  <h1 className="text-cyan-400 tracking-wide font-bold text-2xl">Projects</h1>
  <p className="font-bold text-slate-300 tracking-wide py-5">What l have built</p>
  <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-4">
    <div className="w-80 md:w-120 p-4 border border-slate-500 rounded-xl bg-slate-950">
      <div className="mb-5">
        <img className="w-full rounded-lg" src={Library} alt="Library system screenshot" />
      </div>
      <h1 className="text-left mb-5 text-slate-100 text-xl tracking-wide font-bold">Strathmore University Chaplaincy Library System</h1>
      <p className="text-left mb-3 text-slate-300 text-lg tracking-wide">l developed a full-stack Admin Library Management System for Strathmore University Chaplaincy. </p>

      <h1 className="text-left mb-5 text-slate-100 font-bold text-lg">Technologies used:</h1>
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
      <p className="text-left mb-3 text-slate-300 tracking-wide text-lg">l built a secure booking management system to help keep track of customers and bookings with status update.
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

 <div className="w-80 md:w-120 p-4 border border-slate-500 rounded-xl bg-slate-950 tracking-wide">
      <div className="mb-5">
        <img className="w-full rounded-lg" src={Booking} alt="Booking system screenshot" />
      </div>
      <h1 className="text-left mb-5 text-slate-100 text-xl tracking-wide font-bold">Space Tourism Website Challenge Frrom Frontend Mentor</h1>
      <p className="text-left mb-3 text-slate-300 tracking-wide text-lg">l took a Challenge From Frontend Mentor to build this Space Tourism Website.
      </p>
            <h1 className="text-left mb-5 text-slate-100 font-bold text-lg">Technologies used</h1>
             <div className="flex flex-wrap mb-5 gap-4">
        {["React", "TypeScript", "Tailwind"].map(skill => (
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

 <div className="w-80 md:w-120 p-4 border border-slate-500 rounded-xl bg-slate-950 tracking-wide">
      <div className="mb-5">
        <img className="w-full rounded-lg" src={Booking} alt="Booking system screenshot" />
      </div>
      <h1 className="text-left mb-5 text-slate-100 text-xl tracking-wide font-bold">Ahwan Pharmacy Website </h1>
      <p className="text-left mb-3 text-slate-300 tracking-wide text-lg">As a Freelancer l have worked with Pharmacies and built this Webiste for Ahwan Pharmacies to capture online orders by 10 percent.
      </p>
            <h1 className="text-left mb-5 text-slate-100 font-bold text-lg">Technologies used</h1>
             <div className="flex flex-wrap mb-5 gap-4">
        {["HTML", "CSS", "JavaScript"].map(skill => (
      <span className="text-slate-300 bg-slate-900 border border-cyan-400 py-1 px-2 text-sm rounded-lg" key={skill}>{skill}</span>
    ))}
      </div>

       <div className="mb-5 flex gap-4">
        <a href="https://ahwanpharmacy.co.ke" className="bg-cyan-400 hover:opacity-80 cursor-pointer  rounded py-2 px-5">
          Visit
          </a>

          <a href="https://github.com/Brian9975/Booking-System" className="border-slate-500 hover:opacity-80 cursor-pointer rounded border py-2 px-5 text-slate-300">
            Github
          </a>
      </div>
    </div>


    
  </div>
</section>
  )
}

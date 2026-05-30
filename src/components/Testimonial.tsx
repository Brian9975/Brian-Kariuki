import StrathLogo from "../assets/StrathLogo.png"

export default function Testimonial() {
  return (
    <section id="testimonial" className="bg-slate-950  text-center py-30">
        <h1 className="text-cyan-400 tracking-wide font-bold text-2xl">Testimonial</h1>
  <p className="font-bold text-slate-300 tracking-wide pt-5 pb-10">What my client say</p>
     
     <div className="grid grid-cols-1 text-slate-100 gap-4 place-items-center">
       <div className="bg-slate-900 mx-10 p-10 rounded-xl">
         <header className="flex flex-col  md:justify-start md:flex-row md:gap-0 items-center ">
            <div className="mb-5 w-30 md:w-50"><img className="w-full" src={StrathLogo}/></div>
            <div><h1 className="text-amber-400 text-xl tracking-wide mb-5 font-bold">Strathmore University Chaplaincy</h1></div>
            
         </header>
         <p className="text-left mb-3 tracking-wide text-slate-300">Before you built the system, we were relying on Excel to track all our books checkouts,which became disorganized and difficult to manage as our library grew.Your new system has completely improved our daily operations by automating the whole process,making everything seamless.<br/><br/>The interface is user-friendly, so my team picked it up instantly without  headache of broken spreadsheets or lost data. <br /><br />
            l highly recommend your services to anyone needing a custom solution, your work has truly been a game-changer for our library!<br/>Thank you! </p>

            <footer className="text-right pt-5">
               <h6 className="text-sm  font-bold tracking-wide">From <span className="text-amber-400">L. Chrispinous</span></h6>
            </footer>
       </div>
     </div>
    </section>

  )
}
   
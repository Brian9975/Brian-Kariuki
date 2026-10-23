import { LucideStar } from "lucide-react"
import StrathLogo from "../assets/StrathLogo.png"

export default function Testimonial() {
  return (
    <section id="testimonial" className="bg-slate-950  text-center py-16 md:py-24">
        <h1 className="text-cyan-400 tracking-wide font-bold text-2xl">Testimonial</h1>
  <p className="font-bold text-slate-300 tracking-wide py-5">What my clients say</p>
     
     <div className="grid grid-cols-1 text-slate-100 gap-4 place-items-center">
       <div className="bg-slate-900 w-90 md:w-4xl mx-10 p-5 rounded-xl">
         <header className="flex flex-col  md:flex-row md:gap-0  ">
          <div className=" md:justify-start items-center  flex-col md:flex-row flex md:items-end">
            <div className="w-40 md:w-50"><img className="w-full" src={StrathLogo}/></div>
            <div><h1 className="text-amber-400  text-xl tracking-wide mb-4 font-bold">Strathmore University Chaplaincy</h1></div>
            </div>

         </header>
         <p className="text-left my-3 tracking-wide text-slate-300">Before you built the system, we were relying on Excel to track all our books checkouts,which became disorganized and difficult to manage as our library grew.Your new system has completely improved our daily operations by automating the whole process,making everything seamless.<br/><br/>The interface is user-friendly, so my team picked it up instantly without  headache of broken spreadsheets or lost data. <br /><br />
            l highly recommend your services to anyone needing a custom solution, your work has truly been a game-changer for our library!<br/>Thank you! </p>

            <footer className="flex justify-between mt-5 items-center">
            <div className="flex  gap-1">
              <span><LucideStar size={20} className="text-amber-400 fill-current"/></span>
              <span><LucideStar size={20} className="text-amber-400 fill-current"/></span>
              <span><LucideStar size={20} className="text-amber-400 fill-current"/></span>
              <span><LucideStar size={20} className="text-amber-400 fill-current"/></span>
              <span><LucideStar size={20} className="text-amber-400 fill-current"/></span>
            
            </div>
                <div>

               <h6 className="text-sm  font-bold tracking-wide">From <span className="text-amber-400">L. Chrispinous</span></h6>
                </div>
            </footer>
       </div>
     </div>
    </section>

  )
}
   
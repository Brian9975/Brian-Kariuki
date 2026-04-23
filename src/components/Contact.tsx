import Github from "../assets/github-white-icon.png";
import LinkedIn from "../assets/linkedin-app-white-icon.png";
import Upwork from "../assets/upwork-svgrepo-com.svg"
import useSendMessage from "./hook/useSendMessage";
import {useState} from "react"
import { XCircle, CheckCircle } from "lucide-react";

export default function Contact() {
    const {form, handleSendMessage, sending} = useSendMessage()
      const [error, setError] = useState("")
      const [success, setSuccess] = useState(false)



  return (
    <>
   <section id="contact" className="bg-slate-950 pt-30 tracking-wide text-center">
      <h1 className="text-cyan-400 tracking-wide font-bold text-2xl">Contact</h1>
      <p className="font-bold text-slate-300 tracking-wide pt-5 pb-10">Lets get in touch</p>
        <p className="text-slate-300 mb-10 mx-4">
    Available for freelance projects and remote opportunities worldwide
  </p>

  <div className="flex justify-center">
    <form ref={form} onSubmit={(e) => handleSendMessage(e, setError, setSuccess)} className="bg-slate-900 border border-slate-500 flex flex-col items-center justify-center gap-7 rounded-xl mx-10 p-5 text-slate-5" action="">
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
  
  </>
  )
}


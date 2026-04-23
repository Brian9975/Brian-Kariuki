
import { useState } from "react"
import {X, Menu} from "lucide-react"
export default function Navbar() {
const [openNav, setOpenNav] = useState(false)
    
  return (
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
  )
}

import React, { useRef, useState} from 'react'
import emailjs from "@emailjs/browser";

export default function useSendMessage() {
const form = useRef<HTMLFormElement>(null)

  const [sending, setSending] =  useState(false)




const handleSendMessage = (e: React.FormEvent<HTMLFormElement>, error: string, success: boolean, setError: React.Dispatch<React.SetStateAction<string>>, setSuccess: React.Dispatch<React.SetStateAction<boolean>>) => {
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
    if (!email || !email.includes("@")) { 
        
        setError("Please enter your email")
    
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

  return {handleSendMessage, form, sending}
}

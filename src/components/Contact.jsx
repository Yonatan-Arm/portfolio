import React, { useEffect } from 'react'
import { useForm } from '../hooks/useForm'
import Wobble from 'react-reveal/Wobble';

export default function Contact() {
    const [user, handleChange, setUser] = useForm(null)

    
    useEffect(() => {
        loadUser()
    }, [])


    const loadUser =  () => {
        const user = { name:'',  email:'', message:''}
        setUser(user)
    }
    const sendMsg = (ev) => {
        ev.preventDefault()
        var name =user.name ;
        var email = user.email ;
        var msgBody = user.message ; 
        var emailUrl = `https://mail.google.com/mail/u/0/?fs=1&to=yoniarm123@gmail.com&su=${name}&body=${msgBody}&tf=cm`;
        window.open(emailUrl);
        loadUser()
      }
      if (!user) return <div>Loading...</div>
  return (
    <div className='contact flex column align-center justify-center'>
        <Wobble>
        <h1>Contact</h1>
        </Wobble>
        <span>Have a question or want to work together?</span>
        <form className='flex column' onSubmit={e=> {sendMsg(e)}}>
         <input placeholder='Name' onChange={handleChange} value={user.name}  type="text" name="name" /> 
         <input placeholder='Enter email' onChange={handleChange} value={user.email}  type="text" name="email" /> 
         <textarea placeholder='Your message' onChange={handleChange} value={user.message}  type="text" name="message" />
         <button> Submit</button>
        </form>
    </div>
  )
}



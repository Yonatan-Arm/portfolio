import React from 'react'
import Logo from '../assets/imgs/logo.svg'


export const AppNav = () => {

  const moveToAbout =  () => {
  window.scrollTo(0, 500)
}
  const moveToProject =  () => {
  window.scrollTo(0, 2000)
}
const moveToContact =  () => {
  window.scrollTo(0, 3000)
}


  return (
    <> 
      <nav className='flex space-between justify-center align-center nav '>
        <img src={Logo} alt="logo" />
        <div className='flex nav-feature'>
       <button onClick={moveToProject}>Projects</button>
       <button onClick={moveToAbout}>About</button>
       <button onClick={moveToContact}>Contact</button>
        </div>
      </nav>
    </>
  )
}

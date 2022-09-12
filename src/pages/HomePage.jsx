import React from 'react'
import About from '../components/About'
import Details from '../components/details'
import Specialities from '../components/Specialities'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

export const HomePage = () => {
  return (
  <div className='main-app flex column'>
    <About />
    <Details />
    <Specialities />
    <Projects />
    <Contact />
    <Footer />
  </div> 
  )
}






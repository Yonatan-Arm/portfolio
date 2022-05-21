import React from 'react'
//! TO CONNECT TO REDUX USE
import { connect} from 'react-redux'
import About from '../components/About'
import Details from '../components/details'
import Specialities from '../components/Specialities'
import MyProject from '../components/myProject'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

export const _HomePage = () => {
  //! REDUX CONNECTION
  return (
  <div className='main-app flex column'>
    <About />
    <Details />
    <Specialities />
    <MyProject />
    <Contact />
    <Footer />
  </div> 
  )
}

// !TO CONNECT TO REDUX
const mapDispatchToProps = {
}

export const HomePage = connect(null, mapDispatchToProps)(_HomePage)



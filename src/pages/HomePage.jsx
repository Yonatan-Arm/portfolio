import React from 'react'
//! TO CONNECT TO REDUX USE
import { connect} from 'react-redux'
// import { loadTasks } from '../store/actions/tasksActions'
import About from '../components/About'
import Details from '../components/details'
import Specialities from '../components/Specialities'
import MyProject from '../components/myProject'

export const _HomePage = () => {
  //! REDUX CONNECTION
  return (
  <div className='main-app flex column'>
    <About />
    <Details />
    <Specialities />
    <MyProject />
  </div> 
  )
}

// !TO CONNECT TO REDUX
const mapDispatchToProps = {
}

export const HomePage = connect(null, mapDispatchToProps)(_HomePage)



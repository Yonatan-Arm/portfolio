import React from 'react'

export const AppNav = () => {
  return (
    <> 
      <nav className='flex space-between justify-center align-center nav '>
        <h1> Logo</h1>
        <div className='flex nav-feature'>
        <span>Project</span>
        <span>About</span>
        <span>Contact</span>
        </div>
      </nav>
    </>
  )
}

import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
   
    <div className='navbar'>
        <div className=' nav'>
          <img src='./logo_2.png'></img>
        <div className='nav_menu'>
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Contact US</a>
            </div>
      
      <div className='nav_right'>
      <button > Get Started <span class="material-symbols-outlined">
arrow_forward
</span></button>
      </div>
      </div>
    </div>
  )
}

export default Navbar

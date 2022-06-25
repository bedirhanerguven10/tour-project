import React from 'react'
import navbarStyle from './navbar.module.scss'

const Navbar = () => {
  return (
    <div>
       <div className={navbarStyle['navbar']}>
        <li>ABOUT US</li>
        <li>FOR YOU</li>
        <li>SERVICES</li>
        <li>BLOG</li>
        <li>VLOG</li>
        <li>CONTACT</li>
    </div>
    </div>
  )
}

export default Navbar

import React from 'react'

import "./NavBar.css"

const NavBar = () => {
  return (
    <div class="navbar">
        <div className = "logo">
            <h1>Kaung</h1>
        </div>
        <div className = "navlinks">
            <a href = "#">About Me</a>
            <a href = "#">Projects</a>
            <a href = "#">Contact</a>
        </div>
    </div>
  )
}

export default NavBar

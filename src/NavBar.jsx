import React from 'react'

import "./NavBar.css"
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <Link to = "/">
          <div className = "logo">
              <h1>Kaung</h1>
          </div>
        </Link>
          <div className = "navlinks">
              <Link to = "/"><h4>About Me</h4></Link>
              <Link to = "/projects"><h4>Projects</h4></Link>
              <Link to = "/contact"><h4>Contact</h4></Link>
          </div>
      </div>
    </>
  )
}

export default NavBar

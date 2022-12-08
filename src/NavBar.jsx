import React, {useEffect} from 'react'

import "./NavBar.css"
import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux';
import { loadAllProjectsData} from "./reducers/allProjectsReducer";

const NavBar = () => {
  //create Dispatch
  const dispatch = useDispatch();
  //useEffect
  useEffect(() => {dispatch(loadAllProjectsData())}, [dispatch]);

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

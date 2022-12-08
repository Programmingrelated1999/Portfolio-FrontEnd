import React from 'react'

import { Link } from 'react-router-dom';

//route
import baseAPI from "../utils/routes";

//CSS import
import "./Project.css"

const Project = ({item}) => {
  return (
    <Link to = {`/projects/${item.id}`}>
      <div className = "project" style={{backgroundImage: `url(${baseAPI}/${item.image})`, backgroundSize: "contain"}}>
        <h3 className='banner-content'>
          {item.name}
        </h3>
      </div>
  </Link>
  )
}

export default Project;
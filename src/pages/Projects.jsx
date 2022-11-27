import React from 'react'
import Project from '../projects/Project'

import "./Projects.css"

const Projects = () => {

  return (
    <div className='projects'>
      <h1>Projects</h1>
      <div className='projects-list'>
      {
        ["SQL Design", "Project Tracker", "Machine Learning Game"].map(item => <Project item = {item}/>)
      }
      </div>
    </div>
  )
}

export default Projects

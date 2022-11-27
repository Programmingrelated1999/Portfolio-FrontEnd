import React from 'react'

import "./Project.css"

const Project = ({item}) => {
  return (
    <div className = "project">
      <h3 className='banner-content'>
        {item}
      </h3>
    </div>
  )
}

export default Project

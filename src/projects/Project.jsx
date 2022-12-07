import React from 'react'

import "./Project.css"

import baseAPI from "../utils/routes";

const Project = ({item}) => {
  return (
    <div className = "project" style={{backgroundImage: "url(" + `${baseAPI}/${item.image}` + ")", backgroundSize: "contain"}}>
      <h3 className='banner-content'>
        {item.name}
      </h3>
  </div>
  )
}

export default Project

{/*}
*/}
import React from 'react'

import ErrorPic from "../../images/dinosaur.PNG"

import "./Error.css"

const Error = () => {
  return (
    <div className='error-container'>
        <h3>OOPS! THERE IS AN ERROR. I AM REALLY SORRY, CAN YOU GO BACK TO <a href = "/">HOME</a></h3>
        <img src = {ErrorPic} alt = "dinosaur from chrome failing"/>
    </div>
  )
}

export default Error

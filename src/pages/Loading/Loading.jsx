import React from 'react'

import "./Loading.css"

const Loading = () => {
  return (
    <div className = "loading-container">
        <h3>PLEASE WAIT A MOMENT WHILE I LOAD THE PROJECTS</h3>
        <h3 id = "musical-note">{String.fromCharCode(9836)}</h3>
    </div>
  )
}

export default Loading

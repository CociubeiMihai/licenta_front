import "./AboutUsStyle.css"

import React from 'react'

function AboutUs(props) {
  return (
    <div className="about-container">
        <h1>{props.title}</h1>
        <p>{props.data}</p>
    </div>
  )
}

export default AboutUs
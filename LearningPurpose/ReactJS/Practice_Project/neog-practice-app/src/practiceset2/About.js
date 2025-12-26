import React, { useState } from 'react'

const About = ({heading, name, learning}) => {
    const[text, showtext]= useState(false);
    const handleContent = () =>{
        showtext(true)
    }
  return (
    <div>
        <h1>{heading}</h1>
        <h2>{name}</h2>
        {
            text && <p>{learning}</p>
        }
        <button onClick={handleContent}>Know More</button>
    </div>
  )
}

export default About
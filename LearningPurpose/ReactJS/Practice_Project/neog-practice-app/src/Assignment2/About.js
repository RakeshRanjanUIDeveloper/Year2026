import React, { useState } from 'react'

const About = ({name,heading,learning}) => {

    const [toggle,setToggle]=useState(false)
    const showContent=()=>{
        setToggle((prev)=>!prev)
    }

  return (
    <div>
    <h1>{heading}</h1>
    <h2>{name}</h2>

    <button onClick={showContent}>Know More</button>
    {toggle&&<p>{learning}</p>}
    
    
    
    </div>
  )
}

export default About
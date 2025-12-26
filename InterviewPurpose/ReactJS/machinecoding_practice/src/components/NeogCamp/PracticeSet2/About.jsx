import React, { useState } from 'react'

const About = ({heading, name, learning}) => {
    const [showLearning, setShowLearning] = useState(false)
  return (
    <div>
        <h1>{heading}</h1>
        <h2>{name}</h2>
        <button onClick={() => setShowLearning(true)}>Know More</button>
        {
            showLearning && <p>{learning}</p>
        }
    </div>
  )
}

export default About
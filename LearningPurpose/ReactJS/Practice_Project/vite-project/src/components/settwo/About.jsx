import React, { useState } from 'react'

const About = ({namee, heading, learning}) => {
    const [showLearning, setShowLearning] = useState(false);
    const handleLearning = () =>{
        setShowLearning(true)
    }
  return (
    <React.Fragment>
        <h1>{heading}</h1>
        <h2>{namee}</h2>
        <button onClick={handleLearning}>Know More</button>
        <p>{showLearning && learning}</p>
    </React.Fragment>
  )
}

export default About
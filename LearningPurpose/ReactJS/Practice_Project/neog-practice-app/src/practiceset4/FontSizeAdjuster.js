import React, { useState } from 'react'

const FontSizeAdjuster = () => {
    const [font, setFont] = useState(18)
    const handlePlus = () =>{
        setFont(font+1)
    }
    const handleMinus = () =>{
        setFont(font-1)
    }
  return (
    <React.Fragment>
        <h2 style={{fontSize: `${font}px`}}>Welcome</h2>
        <button onClick={handlePlus}>+</button>
        <button onClick={handleMinus}>-</button>
    </React.Fragment>
  )
}

export default FontSizeAdjuster
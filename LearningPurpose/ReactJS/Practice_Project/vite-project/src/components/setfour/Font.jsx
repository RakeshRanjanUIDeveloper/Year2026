import React, { useState } from 'react'

const Font = () => {
    const [font, setFont] = useState(18);

    // const fontStyle ={
    //     fontSize : `${font}px`
    // }

  return (
    <React.Fragment>
       {/*  <p style={fontStyle}>Welcome</p> */}
        <p style={{fontSize: font}}>Welcome</p>
        <button onClick={() => setFont(font+1)}>+</button>
        <button onClick={() => setFont(font-1)}>-</button>
    </React.Fragment>
  )
}

export default Font
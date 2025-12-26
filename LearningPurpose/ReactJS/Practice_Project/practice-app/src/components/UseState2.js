import React, { useState } from 'react'

const UseState2 = () => {
    // const [count, setCount] = useState(0);
    const [num, setNum] = useState(true);
    // const handleClick = () =>{
    //     setCount((prevCount) => prevCount + 1)
    // }
  return (
    <div>

        <p>{num}</p>
    </div>
  )
}

export default UseState2
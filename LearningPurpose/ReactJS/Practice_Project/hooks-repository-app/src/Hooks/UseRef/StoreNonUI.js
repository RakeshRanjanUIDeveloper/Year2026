import React, { useRef, useState } from 'react'

const StoreNonUI = () => {
    const [count, setCount] = useState(0);
    const timeRef =  useRef(null)
    const startTimer = () =>{
        console.log(timeRef.current)
        if(!timeRef.current){
            timeRef.current = setInterval(()=>{
                setCount((prev) => prev +1)
            }, 1000)
        }
    }
    const stopTimer = () =>{
        console.log(timeRef.current)
        clearInterval(timeRef.current);
        timeRef.current = null;
    }
  return (
    <React.Fragment>
        <h1>{count}</h1>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
    </React.Fragment>
  )
}

export default StoreNonUI
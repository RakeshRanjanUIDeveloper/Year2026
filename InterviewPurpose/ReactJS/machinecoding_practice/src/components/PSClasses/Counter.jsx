import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const [intervalId, setIntervalId] = useState(null)
    const handleStart = () =>{
        setIntervalId(setInterval(() =>{
            setCount((prev) => prev +1)
        }, 1000))
    }
    const handlePause = () =>{
        clearInterval(intervalId)
        setIntervalId(null)
    }
    const handleStop = () =>{
        clearInterval(intervalId);
        setIntervalId(null);
        setCount(0);
    }
  return (
    <React.Fragment>
        <div className='counter'>{count}</div>
        <div className='buttons'>
            <div className='start-button' onClick={handleStart}>Start</div>
            <div className='pause-button' onClick={handlePause}>Pause</div>
            <div className='stop-button' onClick={handleStop}>Stop</div>
        </div>
    </React.Fragment>
  )
}

export default Counter
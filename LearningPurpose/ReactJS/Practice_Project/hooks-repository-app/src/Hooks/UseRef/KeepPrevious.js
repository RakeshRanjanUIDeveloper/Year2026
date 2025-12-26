import React, { useEffect, useRef, useState } from 'react'

const KeepPrevious = () => {
    const [count, setCount] = useState(0);
    const prevRef = useRef(null);
    useEffect(()=>{
        prevRef.current = count
    }, [count])
  return (
    <React.Fragment>
        <h1>Current Count : {count}</h1>
        <h1>Previous Count : {prevRef.current}</h1>
        <button onClick={() => setCount(count+1)}>Click</button>
    </React.Fragment>
  )
}

export default KeepPrevious
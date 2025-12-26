import React, { useCallback, useState } from 'react'
import ChildCounter from './ChildCounter';

const ParentCounter = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() =>{
      console.log("Button Clicked")
    },[]) 
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count+1)}>Increment Count</button>
        <ChildCounter onClickHandler={handleClick} />
    </div>
  )
}

export default ParentCounter
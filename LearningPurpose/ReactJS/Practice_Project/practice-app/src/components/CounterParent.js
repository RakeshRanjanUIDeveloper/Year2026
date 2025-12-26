import React, { useState } from 'react'
import Counter from './Counter';

const CounterParent = () => {
    const [count, setCount] = useState(0);
    const handleReset = () =>{
       setCount(0)
    }
    const handleIncrement = () =>{
        setCount(count+1)
    }
  return (
    <React.Fragment>
        <Counter count={count} increment={handleIncrement} />
        <button onClick={handleReset} >Reset</button>
    </React.Fragment>
  )
}

export default CounterParent
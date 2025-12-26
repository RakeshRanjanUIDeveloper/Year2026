import React from 'react'

const Counter = ({count, increment}) => {
  return (
    <React.Fragment>
        <h1>Count is : {count}</h1>
        <button onClick={increment}>Increment</button>
    </React.Fragment>
  )
}

export default Counter
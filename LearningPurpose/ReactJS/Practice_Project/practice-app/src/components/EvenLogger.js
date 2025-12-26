import React, { useEffect, useState } from 'react'

const EvenLogger = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
            if(count % 2 == 0){
                console.log(`COunt is even ${count}`)
            }
    },[count])
  return (
    <React.Fragment>
        <h1>{count}</h1>
        <button onClick={() => setCount(count+1)}>Increment</button>
        <button onClick={() => setCount(count-1)}>Decrement</button>
    </React.Fragment>
  )
}

export default EvenLogger
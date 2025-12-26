import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [message, setMessage] = useState("");
    //step1 - define callback function in parent component
    const handleChildData = (childData) =>{
        setMessage(childData)
    }
  return (
    <div>
        <h1>Parent Component</h1>
        <p>Meesage from CHild Component - {message}</p>
    {/*     step 2 - pass the callback function as props to the child component  */}
        <Child sendData={handleChildData} />
    </div>
  )
}

export default Parent
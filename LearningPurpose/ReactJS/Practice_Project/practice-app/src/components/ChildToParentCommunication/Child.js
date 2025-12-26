import React from 'react'

const Child = ({sendData}) => {
    const sendMessage = () =>{
        sendData("Hello from child")
    }
  return (
    <div>
        <h1>Child Component</h1>
        <button onClick={sendMessage}>Send data to parent</button>
    </div>

  )
}

export default Child
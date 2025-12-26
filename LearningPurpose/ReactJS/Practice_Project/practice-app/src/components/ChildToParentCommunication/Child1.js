import React from 'react'

const Child1 = ({sendDataToParent}) => {
      const sendMesaage = () =>{
        const data ={name:"Rakesh", age:32 }
        sendDataToParent(data)
      }
  return (
    <div>
        <button onClick={sendMesaage}>Clickon Child Button </button>
    </div>
  )
}

export default Child1
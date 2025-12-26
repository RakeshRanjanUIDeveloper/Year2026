import React, { useState } from 'react'

const MyGadgets = ({products}) => {
const [show,setShow]=useState(false)
const highlightstyle={
    backgroundColor:"green"
}
const highlight=()=>{
    setShow((prev) => !prev)
}
  return (
    <div>
    <h2>MyGadgets</h2>
    {products.map(({id,name,description,price})=>
    <ol>
    
    <li key={id} style={price>50000&&show?highlightstyle:{}} >Name:{name}  Description:{description} Price={price}</li>
   </ol>


    )}
    
      <button onClick={highlight}>HightLight</button>

    
    </div>
  )
}

export default MyGadgets
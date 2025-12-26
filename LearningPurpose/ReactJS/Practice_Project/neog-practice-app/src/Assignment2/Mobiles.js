import React from 'react'

const Mobiles = ({products}) => {
  return (
    <div>
   <h2>Display Only mobile</h2> 
<ul>
    {products.filter((product)=>product.name==="mobile").map(({name,id,price},index)=>
   <li key={index}>Id:{id} Name:{name} Price:{price}</li>
    )}
    
    </ul>
    </div>
  )
}

export default Mobiles
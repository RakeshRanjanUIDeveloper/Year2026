import React from 'react'

const Product = ({name, price}) => {
  return (
    <div>Product name is <span style={{fontWeight:'bold', color:'blue'}}>{name} </span> and price is <span style={{fontFamily:'italic', color:'green'}}>{price}</span></div>
  )
}

export default Product
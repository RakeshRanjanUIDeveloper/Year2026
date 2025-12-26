import React from 'react'

const Product = ({name, price}) => {
    const nameStyle ={
        fontWeight:'bold',
        color:'blue'
    }
    const priceStyle = {
        fontStyle:'Italic',
        color:'Green'
    }
  return (
    <div>
        <h2 style={nameStyle}>{name}</h2>
        <h3 style={priceStyle}>{price}</h3>
    </div>
  )
}

export default Product
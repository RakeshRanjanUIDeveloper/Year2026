import React from 'react'

const Product = ({name, price}) => {
    const nameStyle = {
        fontWeight: 'bold',
        color:'blue'
    }
    const priceStyle = {
        fontStyle: 'Italic',
        color:'green'
    }
  return (
    <div>
        <h2 style={nameStyle}>Name - {name}</h2>
        <h3 style={priceStyle}>Price - {price}</h3>
    </div>
  )
}

export default Product
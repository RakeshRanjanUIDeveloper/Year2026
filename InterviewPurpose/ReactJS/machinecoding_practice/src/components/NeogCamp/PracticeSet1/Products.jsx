import React from 'react'

const Products = ({products}) => {
  return (
    <div>
        <h2>Products Names</h2>
        <ul>
            {
                products.map((product) => <li>{product.name}</li>)
            }
        </ul>
        <h2>Products where number of sales is more than the quantity.</h2>
        <ul>
            {
                products.filter((product) => product.sales > product.quantity).map((product) => <li>Name {product.name} - Sales {product.sales} - Quantity {product.quantity}</li>)
            }
        </ul>
    </div>
  )
}

export default Products
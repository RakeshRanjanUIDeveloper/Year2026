import React from 'react'

const Products = () => {
    const products = [
      { name: "Perk", quantity: 10, sales: 7 },
      { name: "Pepsi", quantity: 10, sales: 20 },
      { name: "Coke", quantity: 18, sales: 50 },
      { name: "Maggi", quantity: 41, sales: 22 },
      { name: "5Star", quantity: 7, sales: 9 },
    ];

    const filteredProducts = products.filter((p) => p.sales > p.quantity)
  return (
    <React.Fragment>
        <h2>Products Name</h2>
        <ul>
            {
                filteredProducts.map((p) =>(
                    <li key={p.name}>Name: {p.name}, Quantity: {p.quantity},  Sales:{p.sales}</li>
                ))
            }
        </ul>
    </React.Fragment>
  )
}

export default Products
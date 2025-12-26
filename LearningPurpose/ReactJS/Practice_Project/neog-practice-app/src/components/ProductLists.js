import React from 'react'
import StudentDetails from './StudentDetails'

const s = () => {
    const products = [
        { name: 'Perk', quantity: 10, sales: 7 },
        { name: 'Pepsi', quantity: 10, sales: 20 },
        { name: 'Coke', quantity: 18, sales: 50 },
        { name: 'Maggi', quantity: 41, sales: 22 },
        { name: '5Star', quantity: 7, sales: 9 },
    ]
    const student ={
        name:'Rakesh',
        english:90,
        maths:80,
        computers:70
    }
  return (
    <React.Fragment>
        <h2>Product Names</h2>
        <ul>
            {
                products.map((product, index) => (<li key={index}>{product.name}</li>))
            }
        </ul>
        <h3> The number of sales is more than the quantity. </h3>
        <ul>
            {
                products.filter((product) => product.sales > product.quantity).map((product)=> (<li>Name {product.name} - Quantity {product.quantity} -Sales {product.sales}</li>))
            }
        </ul>
        <StudentDetails student={student} />
    </React.Fragment>
  )
}

export default s
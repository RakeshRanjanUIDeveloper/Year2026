import React from 'react'
import { Link } from 'react-router-dom'
import products from '../components/data'
const Products = () => {
  return (
    <section className='section'>
        <div className='products'>
        {
            products.map((product) =>{
                return(
                    <article key={product.id}>
                        <h5>{product.name}</h5>
                        <Link to={`/products/${product.id}`}>More Info</Link>
                    </article>
                )
            })
        }
    </div>
    </section>
  )
}

export default Products
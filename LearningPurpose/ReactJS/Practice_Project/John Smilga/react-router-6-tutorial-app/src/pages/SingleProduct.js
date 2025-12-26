import React from 'react'
import {Link, useParams } from 'react-router-dom'
import products from '../components/data';
const SingleProduct = () => {
    const {productId} = useParams();
    const product = products.find((product)=> product.id === productId)
    const {image, name} = product;
  return (
    <section className='section'>
        <img src={image} alt="name" />
        <h5>{name}</h5>
        <Link to='/products'>Back To Product Page</Link>
    </section>
  )
}

export default SingleProduct
import React, { useEffect, useState } from 'react'
import { fakeProductFetch } from './fakeProductFetch'

const Products = () => {
    const[allProducts,setAllProducts] = useState([]) //original data
    const [products, setProducts] = useState([]) // current view data
  
    const handleQuantity = () =>{
        const filteredbyQuantity = allProducts.filter((product) => product.quantity > 20)
        setProducts(filteredbyQuantity)
    }
    const handlePrice = () =>{
        const filteredByPrice = allProducts.filter((product) => product.price <100)
        setProducts(filteredByPrice)
    }
    const handleReset = () => {
        setProducts(allProducts)
    }
    useEffect(()=>{
        const fetchProducts = async () =>{
            try {
                const response = await fakeProductFetch('https://example.com/api/products');
                if(response.status === 200){
                    setAllProducts(response.data.products)
                    setProducts(response.data.products)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchProducts()
    }, [])
  return (
    <div>
        <h2>Product Lists</h2>
        <ul>
            {
                products.map((product) => (<li key={product.name}><b>Name</b>- {product.name} - <b>Price Rs. </b>{product.price} - <b>Quantity</b> {product.quantity}</li>))
            }
        </ul>
        <button onClick={handleQuantity}>Show Products with Quantity more than 20</button>
        <button onClick={handlePrice}>Filter by Price</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Products
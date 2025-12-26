import React, { useEffect, useState } from 'react'
import { fakeMovieListFetch } from './fakeMovieListFetch'

const ProductList = () => {
    const [allProducts, setAllProducts] = useState([]); //Original
    const [filteredProducts, setFilteredProducts] = useState([]) // Filter 

    useEffect(() =>{
        const fetchProducts = async () => {
            try {
               const response = await fakeMovieListFetch('https://example.com/api/products');
               if(response.status === 200){
                    setAllProducts(response.data.products)
                    setFilteredProducts(response.data.products)
               }
            } catch (error) {
               console.log(error) 
            }
        }
        fetchProducts()
    }, [])

    const handleAscendingPrice = () =>{
        const filterData = [...filteredProducts].sort((a,b) => a.price - b.price);
        setFilteredProducts(filterData)
    }
    const handleDescendingPrice = () =>{
        const filterData = [...filteredProducts].sort((a,b) => b.price - a.price);
        setFilteredProducts(filterData)
    }
    const handleResetPrice = () =>{
        setFilteredProducts(allProducts)
    }
  return (
    <React.Fragment>
        <div className='products'>
            {
                filteredProducts.map((product) => (
                    <div className='product'>
                        <p><b>Name : </b>{product.name}</p>
                        <p><b>Description : </b>{product.description}</p>
                        <p><b>Price : </b>{product.price}</p>
                        <p><b>Quantity : </b>{product.quantity}</p>
                    </div>
                ))
            } 
            <button onClick={handleAscendingPrice}>Lowest to Highest</button>
            <button onClick={handleDescendingPrice}>Highest to Lowest</button>
            <button onClick={handleResetPrice}>Reset</button>
        </div>
    </React.Fragment>
  )
}

export default ProductList
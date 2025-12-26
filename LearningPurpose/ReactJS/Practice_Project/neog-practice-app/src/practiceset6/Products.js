import React, { useEffect, useState } from 'react'
import fakeProductsFetch from './fakeProductsFetch'
const Products = () => {
    const [allProducts, setAllProducts] = useState([])
    const [filterProducts, setFilterProducts] = useState([]);
    useEffect(() =>{
        const fetchMyProducts = async () =>{
            try {
                const response = await fakeProductsFetch('https://example.com/api/products');
                if(response.status === 200){
                    setAllProducts(response.data.products)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchMyProducts();
    }, [])

    const handleProductDisplay = (name) =>{
        const filterProducts = allProducts.filter((product) => product.name === name);
        setFilterProducts(filterProducts)
    }
  return (
    <React.Fragment>
        <div className='product'>
            {
                allProducts.map((product) => (
                    <button key={product.name} onClick={() => handleProductDisplay(product.name)}>Show {product.name}</button>
                ))
            }
            { 
                filterProducts.map((product) => (
                    <div className='product-details'>
                        <img src={product.src} />
                        <h2>Name - {product.name}</h2>
                        <h2>Price - {product.price}</h2>
                        <h2>Description - {product.desc}</h2>
                    </div>
                ))
            }
        </div>

    </React.Fragment>
  )
}

export default Products
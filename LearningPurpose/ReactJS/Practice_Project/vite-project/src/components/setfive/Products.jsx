import React, { useEffect, useState } from 'react'
import { FakeProductFetch } from './FakeProductFetch'

const Products = () => {
    const [productsData, setProductsData] = useState([]); 
    const [filteredData, setFilteredData] = useState([]);
    const fetchProducts =  async () =>{
        try {
           const response = await FakeProductFetch('https://example.com/api/products');
           setProductsData(response.data.products);
           setFilteredData(response.data.products);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }
    useEffect(() => {
        fetchProducts();
    }, [])

    // const productQuantityMore = filteredData.filter((p) => p.quantity>20);
    const handleQuantity = () =>{
        setFilteredData(filteredData.filter((p) => p.quantity>20));
    }
    const handlePrice = () => {
        setFilteredData(filteredData.filter((p) => p.price<100));
    }
  return (
   <React.Fragment>
        <h2>Products</h2>
        <button onClick={handleQuantity}>Show Products with Quantity more than 20</button>
        <button onClick={handlePrice}>FIlter By Price</button>
        <ul>
            {
                filteredData.map((p) => (
                    <li><b>Name</b> {p.name} - <b>Price</b> {p.price} - <b>Quantity</b> {p.quantity}</li>
                ))
            }
        </ul>
   </React.Fragment>
  )
}

export default Products
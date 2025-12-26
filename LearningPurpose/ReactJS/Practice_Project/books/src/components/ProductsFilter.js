import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

const ProductsFilter = () => {

    const [allProducts, setAllProducts] = useState([]);
    const [searchText, setSearchText]= useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    const fetchData = async() =>{
        const data = await fetch('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json');
        const json = await data.json();
        console.log(json)
        setAllProducts(json);
        setFilteredProducts(json);
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <React.Fragment>
    <div className='search'>
        <input type='text' placeholder='search product' value={searchText} onChange={(e)=> setSearchText(e.target.value)} />
        <button onClick={()=>{
            const filteredProducts = allProducts.filter((res)=>
                res.name.toLowerCase().includes(searchText.toLowerCase())
            )
            setFilteredProducts(filteredProducts)
        }}>Search</button>
    </div>
    {
        filteredProducts.map((product)=>
            <ProductCard key={product.id} resData={product} />
        )
    }

    </React.Fragment>
  )
}

export default ProductsFilter
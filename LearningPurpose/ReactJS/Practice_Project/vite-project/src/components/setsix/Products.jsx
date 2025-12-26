import React, { useEffect, useState } from 'react'
import {fakeProductsFetch} from './fakeProductsFetch'
const Products = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedTab, setSelectedTab] = useState('All');
    const fetchProductsData = async () =>{
        try{
            const response = await fakeProductsFetch('https://example.com/api/products');
            setAllProducts(response.data.products);
            setFilteredProducts(response.data.products);
        }catch(error){
            console.log(error)
        }
    }
    useEffect(() => {
        fetchProductsData();
    }, []);

    const uniqueName = ["All", ...new Set(allProducts.map((n) => n.name))]

    const handleTabClick = (tabName) => {
        if(tabName === 'All'){
            setFilteredProducts(allProducts)
        }else{
            setFilteredProducts(allProducts.filter((p) => p.name === tabName))  
        }
        setSelectedTab(tabName)
    }
  return (
    <React.Fragment>
        <div className='tabs-container'>
            {
                uniqueName.map((t) => (
                    <div className={`tab ${selectedTab === t ? 'active-tab':''}`} key={t} onClick={() => handleTabClick(t)} >
                        {t}
                    </div>
                ))
            }
        </div>
        <div className='products-list'>
            {
                filteredProducts.map((p) => (
                    <div className='product'>
                        <img src={p.src} />
                        <h2>{p.name}</h2>
                        <h4>{p.price}</h4>
                        <p>{p.desc}</p>
                    </div>
                ))
            }
        </div>
    </React.Fragment>
  )
}

export default Products
import React, { useEffect, useState } from 'react'
import { fakeStationaryFetch } from './fakeStationaryFetch'

const Stationary = () => {
    const [allStationary, setAllStationary] = useState([]); // Original
    const [filteredStationary, setFilteredStationary] = useState([]); // filtered
    const [searchText, setSearchText] = useState('');
    useEffect(() =>{
        const fetchStationary = async () =>{
            try {
                const response = await fakeStationaryFetch('https://example.com/api/products');
                if(response.status === 200){
                    setAllStationary(response.data.products);
                    setFilteredStationary(response.data.products);
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchStationary();
    }, []);

    const handleRating = () =>{
        const sortedData = [...filteredStationary].sort((a,b) => a.rating - b.rating);
        setFilteredStationary(sortedData);
    }

    const handleSearch = (text) =>{
        setSearchText(text);
        const filterSearchData = allStationary.filter((item) =>
            item.name.toLowerCase().includes(text.toLowerCase())
        );
        
        setFilteredStationary(filterSearchData); 
    }
  return (
    <React.Fragment>
        <input type='text' placeholder='search product....' value={searchText} onChange={(e) => handleSearch(e.target.value)} />
        <div className='stationary-items'>
        {
            filteredStationary.map((stationary) =>(
                <div className='stationary'>
                    <p><b>Name : </b>{stationary.name}</p>
                    <p><b>Price : </b>{stationary.price}</p>
                    <p><b>Quantity : </b>{stationary.quantity}</p>
                    <p><b>Rating : </b>{stationary.rating}</p>
                </div>
            ))
        }
        </div>
        <button onClick={handleRating}>Descending order by rating</button>
    </React.Fragment>
  )
}

export default Stationary
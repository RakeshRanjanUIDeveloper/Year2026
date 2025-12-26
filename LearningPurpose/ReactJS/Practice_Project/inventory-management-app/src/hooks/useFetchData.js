import React, { useEffect, useState } from 'react'
import { inventoryData } from '../data/InventoryData';

const useFetchData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=>{
        const fetchData = async () =>{
            try {
              await new Promise((resolve) => setTimeout(resolve,1000));
              setData(inventoryData);
              setLoading(false)
            } catch (error) {
                setLoading(false);
                setError("Failed to Fetch Data")
            }
        }
        fetchData();
    }, [])
  return {data, loading,error}
}

export default useFetchData
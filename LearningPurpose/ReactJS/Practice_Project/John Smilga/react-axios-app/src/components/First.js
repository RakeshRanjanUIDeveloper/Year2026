import axios from 'axios'
import React, { useEffect } from 'react'

const First = () => {
    const url = 'https://course-api.com/react-store-products';
    const fetchData = async () =>{
        try {
           const response = await axios(url);
           const data = response.data;
           console.log(data)
        } catch (error) {
            console.log(error.response)
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <h2 className='text-center'>first request</h2>
  )
}

export default First
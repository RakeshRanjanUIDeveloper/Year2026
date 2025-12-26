import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true; //Prevent state updates on unmounted components
        const fetchData = async () =>{
            setLoading(true)
            try {
                const response = await fetch(url);
                const result = await response.json();
                if(isMounted) setData(result);

                
            } catch (error) {
                if (isMounted) setError(error.message);
            } finally{
                if (isMounted) setLoading(false);
            }
        }
        fetchData();

        return () => {
            isMounted = false;
          };
    },[url]);
    
    return (
    {data, loading, error}
  )
}

export default useFetch
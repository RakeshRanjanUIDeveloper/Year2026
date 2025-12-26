import React, { useEffect, useState } from 'react'
import './SearchStyle.css'
const SearchBar = () => {
    const [showResults, setShowResults] = useState(false);
    const [results, setResults] = useState([]);
    const [input, setInput] = useState("");
    const [cache, setCache] = useState({});

    const fetchData = async () =>{
        if(cache[input]){
            console.log("CACHE RETURNED", input);
            setResults(cache[input]);
            return
        }
        console.log("API Call", input);
        const data = await fetch('https://dummyjson.com/recipes/search?q='+input);
        const json = await data.json();
        setResults(json?.recipes)
        setCache(prev => ({...prev, [input]: json?.recipes}))
    }

    useEffect(() =>{
        const timer = setTimeout(fetchData, 1000);
        return () =>{
            clearTimeout(timer);
        }
    }, [input])
  return (
    <React.Fragment>
    <h2>Auto Complete Search Bar</h2>
    <div>
        <input type='text' className='search-input' value={input} onChange={(e) => setInput(e.target.value)} onFocus={() => setShowResults(true)} onBlur={() => setShowResults(false)} />
        { showResults && (
            <div className='results-container'>
            {
                results.map((r) => <span className='result' key={r.id}>{r.name}</span>)
            }
            </div>
        )
        }
    </div>
    </React.Fragment>
  )
}

export default SearchBar
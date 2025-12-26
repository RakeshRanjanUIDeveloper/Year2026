import React, { useEffect, useState } from 'react'
import { fakeSocialFetch } from './fakeSocialFetch';

const Social = () => {
    const [allSocial, setAllSocial] = useState([]);
    const [filteredSocial, setFilteredSocial] = useState([]);
    const fetchSocialData = async () =>{
        try{
            const response = await fakeSocialFetch('https://example.com/api/posts');
            setAllSocial(response.data.posts);
            setFilteredSocial(response.data.posts)
        }catch(error){
            console.log(error)
        }
    }
    useEffect(() =>{
        fetchSocialData();
    },[]);

    const handleBakery = () =>{
        setFilteredSocial(allSocial.filter((s) => s.category === 'Bakery'))
    }
  return (
    <React.Fragment>
        <h2>Social Media Post </h2>
        <div className='social-container'>
            {
                filteredSocial.map((s) => (
                    <div className='social'>
                        <img src={s.src} />
                        <h4>{s.caption}</h4>
                        <p>Total Views - {s.views}</p>
                        <p>Total Likes - {s.likes}</p>
                        <p><b>{s.category}</b></p>
                    </div>
                ))
            }
        </div>
        <button onClick={handleBakery}>Show Bakery</button>
    </React.Fragment>
  )
}

export default Social
import React, { useEffect, useState } from 'react'

const FetchUser = () => {
    const [user, setUser] = useState(null)
    const API_URL = 'https://randomuser.me/api/';
    useEffect(() =>{
        fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
            setUser(data.results[0]);
            console.log(data.results[0])
        })
    },[])
  return (
    <React.Fragment>
        <div className='user-lists'>
            <div className='user'>
               {user ?  `${user.name.first}` : "Loading..." }
            </div>
        </div>
    </React.Fragment>
  )
}

export default FetchUser
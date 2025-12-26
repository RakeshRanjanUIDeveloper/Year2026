import React, { useEffect, useState } from 'react'
import { FakeUsersFetch } from './FakeUsersFetch';

const Users = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchUsersData = async () => {
       try{
            const response = await FakeUsersFetch('https://example.com/api/users');
            setAllUsers(response.data)
       }catch(error){
            console.error(error);
       }finally{
            setLoading(false);
       }
    }
    useEffect(() => {
        fetchUsersData();
    }, [])
  return (
   <React.Fragment>
        <h2>Users Feed</h2>
        <div className='users-list'>
            {
                loading ? (<p>Loading Users feed....</p>) : (
                        allUsers.map((u) => (
                            <div className='user'>
                                <img src={u.image} />
                                <h3>{u.name}</h3>
                                <h3>Likes - {u.likes}</h3>
                                <h3>Comments - {u.comments}</h3>
                            </div>
                        ))   
                )
            }
        </div>
   </React.Fragment>
  )
}

export default Users
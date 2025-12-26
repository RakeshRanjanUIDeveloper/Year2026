import React, { useEffect, useState } from 'react'
import { fakeUserProfileFetch } from './fakeUserProfileFetch'

const UserProfile = () => {
    const [userProfile, setUserProfile] = useState([])
    const [name, setName] = useState(false);
    useEffect(() =>{
        const fetchAllUsers = async () =>{
            try {
                const response =  await fakeUserProfileFetch('https://example.com/api/profile');
                if(response.status === 200){
                    setUserProfile(response.data.profiles)
                }   
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllUsers();
    }, [])
    const handleName = () =>{
        setName(true)
    }
  return (
    <React.Fragment>
        {
            userProfile && 
                <div className='user'>
                    { name ? <h2>Name Change</h2> : <h2>{userProfile.name}</h2>}
                    <p>{userProfile.email} - {userProfile.age} -{userProfile.occupation}</p>
                    <button onClick={handleName}>Change Name</button>
                </div>
                
        
        }
    </React.Fragment>
  )
}

export default UserProfile
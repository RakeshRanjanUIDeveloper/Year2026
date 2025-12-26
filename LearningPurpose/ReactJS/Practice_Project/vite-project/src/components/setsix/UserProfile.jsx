import React, { useEffect, useState } from 'react'
import { fakeUserFetch } from './fakeUserFetch';

const UserProfile = () => {
    const [profiles, setProfiles] = useState({});
    
    const fetchUserDetails = async () =>{
        try{
            const response = await fakeUserFetch('https://example.com/api/profile');
            setProfiles(response.data.profiles)
        }catch(error){
            console.log(error)
        }
    }
    useEffect(() =>{
        fetchUserDetails();
    }, [])

    const handleName = () => {
        setProfiles((prev) => ({...prev, name:"Ranjan"}))
    }
  return (
    <React.Fragment>
        <h2>Profiles</h2>
            <p><b>Name</b> {profiles.name}</p>
            <p><b>Email</b> {profiles.email}</p>
            <p><b>Age</b> {profiles.age}</p>
            <p><b>Gender</b> {profiles.gender}</p>
            <p><b>Occupation</b> {profiles.occupation}</p>
            <button onClick={handleName}>Update Name</button>
    </React.Fragment>
  )
}

export default UserProfile
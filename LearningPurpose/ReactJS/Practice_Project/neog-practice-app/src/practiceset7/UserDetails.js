import React, { useEffect, useState } from 'react'
import { fakeUserDetailsFetch } from './fakeUserDetailsFetch'

const UserDetails = () => {
    const [userDetails, setUserDetails] = useState([]);
    const [showDetails, setShowDetails] = useState(false);

    useEffect(() =>{
        const fetchuserDetails = async () =>{
            try {
                const response = await fakeUserDetailsFetch('https://example.com/api/user');
                if(response.status === 200){
                    setUserDetails(response.data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchuserDetails();
    },[])
    const handleDetails = () =>{
        setShowDetails((prev) => !prev)
    }
  return (
    <React.Fragment>
        <h2>User</h2>
        {
            userDetails &&
                <div className='user-details'>
                    <p>Name : {userDetails.name}</p>
                    <p>Email : {userDetails.email}</p>
                    <p>Phone : {userDetails.phone}</p>
                    {
                        showDetails &&
                        <div className='user-address-details'>
                            <p><b>Address - </b>{userDetails.address.street} - {userDetails.address.suite} - {userDetails.address.city} - {userDetails.address.zipcode}</p>
                        </div>
                    }
                    <button onClick={handleDetails}>{showDetails ? 'Hide' : 'Show'} User's Address Details</button>
                </div>
                
        }
    </React.Fragment>
  )
}

export default UserDetails
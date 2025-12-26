import React, { useEffect, useState } from 'react'
import { fakeUserFetch } from './fakeUserFetch'

const UserDetails = ({height, width}) => {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading]= useState(true);
    const [errorMessage, setErrorMessage] = useState(false);

    const imageStyle = {
        height:height,
        width:width
      }
    useEffect(() =>{
        const fetchUserData = async () =>{
            try {
                //await new Promise((resolve) => setTimeout(resolve, 5000));
                const delay = (ms) =>{
                    return new Promise((resolve) => setTimeout(resolve, ms))
                }
                await delay(10000)
                const response = await fakeUserFetch('htttps://example.com/api/users');
                if(response.status === 200){
                    setUserData(response.data)
                }
            } catch (error) {
                console.log(error);
                setErrorMessage(error.message)
            }finally{
                setLoading(false);
            }
        }
        fetchUserData();
    }, [])
  return (
    <React.Fragment>
        <h2>Users Feed</h2>
        <div className='card' style={{display:'flex', gap:'20px'}}>
            {loading && <p>Loading…</p>}
            {errorMessage && (
                <div style={{ color: 'red', fontWeight: 'bold' }}>
                  <p>Error: {errorMessage}</p>
                  <p>Please try again later or contact support.</p>
                </div>
            )}
            { !loading && !errorMessage && userData.length > 0 &&
                userData.map((user) => (
                    <div id={user.name}>
                        <img src={user.image} style={imageStyle} />
                        <h2>Name - {user.name}</h2>
                        <h2>Likes - {user.likes}</h2>
                        <h2>Comments - {user.comments}</h2>
                    </div>
                ))
            }
        </div>
    </React.Fragment>
  )
}

export default UserDetails
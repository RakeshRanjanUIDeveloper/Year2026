import React, { useEffect, useState } from 'react'
import { fakeSocialMediaFetch } from './fakeSocialMediaFetch'

const SocialMedia = () => {
    const [socialMediaData, setSocialMediaData] = useState([]);
    const [isFollowed, setIsFollowed] = useState(false);
    useEffect(() =>{
        const fetchSocialMediaData = async () =>{
            try {
                const response = await fakeSocialMediaFetch('https://example.com/api/profile');
                if(response.status === 200){
                    setSocialMediaData(response.data.profile)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchSocialMediaData();
    }, [])
    const handleFollow = () =>{
        setSocialMediaData((prevData) => ({
            ...prevData,
            followers: prevData.followers+1
        }))
        setIsFollowed(true);
    }
  return (
    <React.Fragment>
        {
            socialMediaData &&
                <div className='socialMedia-details'>
                    <h1>{socialMediaData.name}</h1>
                    <p><b>Age</b> {socialMediaData.age}</p>
                    <p><b>Gender</b> {socialMediaData.gender}</p>
                    <p><b>Email</b> {socialMediaData.email}</p>
                    <p><b>Occupation</b> {socialMediaData.occupation}</p>
                    <p><b>Followers</b> {socialMediaData.followers}</p>
                    <p><b>Followed By</b> {socialMediaData.followedBy}</p>
                    <button onClick={handleFollow} disabled={isFollowed}>Follow {socialMediaData.name}</button>
                </div>
        }
    </React.Fragment>
  )
}

export default SocialMedia
import React, { useEffect, useState } from 'react'
import { fakeSocialMediaFetch } from './fakeSocialMediaFetch';

const SocialMedia = () => {
    const [socialData, setSocialData] = useState({});

    const [disableButton, setDisableButton] = useState(false)
    const fetchSocialMediaData = async () =>{
        try {
            const response = await fakeSocialMediaFetch('https://example.com/api/profile');
            setSocialData(response.data.profile)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() =>{
        fetchSocialMediaData();
    }, []);

    const handleFollow = () =>{
        setSocialData((prev) => ({...prev, followers: prev.followers+1}))
        setDisableButton(true)
    }
    const buttonDisable = {
        opacity: '0.2'
    }
  return (
   <React.Fragment>
        <h2>{socialData.name}</h2>
        <p><b>Age</b>{socialData.age}</p>
        <p><b>Gender</b>{socialData.gender}</p>
        <p><b>Email</b>{socialData.email}</p>
        <p><b>Occupation</b>{socialData.occupation}</p>
        <p><b>Followers</b>{socialData.followers}</p>
        <p><b>Followed By</b>{socialData.followedBy}</p>
        <button style={disableButton ? buttonDisable : {}} onClick={handleFollow}>Follow John</button>
   </React.Fragment>
  )
}

export default SocialMedia
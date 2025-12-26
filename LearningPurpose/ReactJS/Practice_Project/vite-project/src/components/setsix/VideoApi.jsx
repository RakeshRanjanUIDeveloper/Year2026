import React, { useEffect, useState } from 'react'
import { fakeVideoApiFetch } from './fakeVideoApiFetch';

const VideoApi = () => {
    const [videoData, setVideoData] = useState([]);
    const [showLabel, setShowLabel] = useState(false);

    const fetchVideoApiData = async () =>{
        try{
            const response = await fakeVideoApiFetch('https://example.com/api/getvideo');
            setVideoData(response.data.videos)
        }catch(error){
            console.log(error)
        }
    }
    useEffect(() =>{
        fetchVideoApiData();
    }, [])
    const handleLabel = () =>{
        setShowLabel((prev) => !prev)
    }
  return (
    <React.Fragment>
        <img src={videoData.thumbnail} />
        <h2>{videoData.title}</h2>
        <p>{videoData.views} Views</p>
        <p>{videoData.likes} Likes</p>
        {
            showLabel && 
            <p>Label : Self Motivational</p>
        }
        <button onClick={handleLabel}>Add Label</button>
    </React.Fragment>
  )
}

export default VideoApi
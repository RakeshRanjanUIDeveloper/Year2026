import React, { useEffect, useState } from 'react'
import { fakeVideoScreenFetch } from './fakeVideoScreenFetch'

const VideoScreen = () => {
    const [videoScreen, setVideoScreen] = useState([]);
    const [showLabel, setShowLabel] = useState(false);
    useEffect(() =>{
        const fetchVideoScreen = async () =>{
            try {
               const response = await fakeVideoScreenFetch('https://example.com/api/getvideo');
               if(response.status === 200){
                    setVideoScreen(response.data.videos);
               }
            } catch (error) {
                console.log(error);
            }
        }
        fetchVideoScreen();
    },[])
    const handleLabel = () => {
        setShowLabel(true)
    }
  return (
    <React.Fragment>
        {
            videoScreen && 
            <div className='video-screen'>
                <img src={videoScreen.thumbnail} />
                <h2>{videoScreen.title}</h2>
                <p>Views : {videoScreen.views}</p>
                <p>Likes : {videoScreen.likes}</p>
                <p>{showLabel ? 'Self Mtovational' : ''}</p>
                <button onClick={handleLabel}>Add Label</button>
            </div>
        }
    </React.Fragment>
  )
}

export default VideoScreen
import React, { useEffect, useState } from 'react'
import { fakeVideoFetch } from './fakeVideoFetch';

const Video = () => {
    const [allVideos, setAllVideos] = useState([]);
    const [filteredVideos, setFilteredVideos] = useState([])
    const fetchVideos = async () =>{
        try{
            const response = await fakeVideoFetch('https://example.com/api/videos');
            setAllVideos(response.data.videos);
            setFilteredVideos(response.data.videos);
        }catch(error){
            console.log(error)
        }
    }
    useEffect(() => {
        fetchVideos();
    }, [])

    const handleDeleteVideo = () =>{
        setFilteredVideos(prevVideos => prevVideos.slice(1))
    }
  return (
    <React.Fragment>
        <h2>PlayList</h2>
        <div className='video-container'>
        {
            filteredVideos.map((v) => (
                <div className='video'>
                    <img src={v.thumbnail} />
                    <p>{v.title}</p>
                    <p>Likes : {v.likes}</p>
                    <p>Views : {v.views}</p>
                </div>
            ))
        }
        </div>
        <button onClick={handleDeleteVideo}>Delete Video</button>
    </React.Fragment>
  )
}

export default Video
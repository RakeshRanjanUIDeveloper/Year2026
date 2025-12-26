import React, { useEffect, useState } from 'react'
import fakeVideoFetch from './fakeVideoFetch'

const Videos = () => {
    const [allVideos, setAllVideos] = useState([]);
    useEffect(() =>{
        const fetchVideos = async () =>{
            try {
                const response = await fakeVideoFetch('https://example.com/api/videos');
                if(response.status === 200){
                    setAllVideos(response.data.videos);
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchVideos();
    }, [])

    const handleDelete = () =>{
       if(allVideos.length > 0){
        const updatedVideos = allVideos.slice(1);
        setAllVideos(updatedVideos)
       }
    }
  return (
    <React.Fragment>
        <h2>PlayList</h2>
        <div className='video-list'>
            {
                allVideos.map((video) => (
                    <div className='video'>
                        <img src={video.thumbnail} />
                        <h4>{video.title}</h4>
                        <p><b>Views: </b>{video.views}</p>
                        <p><b>Likes: </b>{video.likes}</p>
                    </div>
                ))
            }
        </div>
        <button onClick={() => handleDelete()}>Delete Video</button>
    </React.Fragment>
  )
}

export default Videos
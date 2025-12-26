import React, { useContext } from 'react'
import { VideoContext } from '../components/VideoContext'
import { Link, useNavigate } from 'react-router'

const Videos = () => {
    const {allVideos, handleLike, likedVideos, handleWatchLater, watchLaterVideos} = useContext(VideoContext)
    const navigate = useNavigate();
    const isLike = (id) => likedVideos.some((video) => video.id === id)
    const isWatchLater = (id) => watchLaterVideos.some((video) => video.id === id)
  return (
    <React.Fragment>
        <div className='video-list'>
            {
                allVideos.map((video) => (
                    <div className='video' key={video.id}>
                        <video poster={video.thumbnail}>
                            <source src={video.url} />
                        </video>
                        <h2>{video.title}</h2>
                        <h2><Link to={`/individualVideo/${video.id}`}>Watch here</Link></h2>
                        <div className="video-buttons">
                            <button onClick={() =>{
                                if(isLike(video.id)){
                                    navigate("/likedVideos")
                                }else{
                                    handleLike(video)
                                }
                            }}>{isLike(video.id) ? "Go to Liked Videos" : "Like"}</button>
                             <button onClick={() =>{
                                if(isWatchLater(video.id)){
                                    navigate("/watchlater")
                                }else{
                                    handleWatchLater(video)
                                }
                             }}>{isWatchLater(video.id) ? " Go to Watch Later Video" : "Add to Watch Later"}</button>
                        </div>
                    </div>
                ))
            }
        </div>
    </React.Fragment>
  )
}

export default Videos
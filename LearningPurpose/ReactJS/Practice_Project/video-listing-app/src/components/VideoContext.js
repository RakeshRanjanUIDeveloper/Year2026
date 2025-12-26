
//step 1 - create context
import { createContext, useEffect, useState } from "react";
import { fakeVideoFetch } from "./fakeVideoFetch";
export const VideoContext = createContext();

// step 2 - create provider
export const VideoProvider = ({children}) =>{
    const [allVideos, setAllVideos] = useState([]);
    const [likedVideos, setLikedVideos] = useState([]);
    const [watchLaterVideos, setWatchLaterVideos] = useState([]);

    const handleLike = (video) =>{
        setLikedVideos((prevLikedVideos) =>{
            const isLiked = prevLikedVideos.some((like) => like.id === video.id);
            if(isLiked){
                return prevLikedVideos
            }
            return [...prevLikedVideos, video]
        })
    }
    const handleWatchLater = (video) =>{
        setWatchLaterVideos((prevWatchLaterVieos) =>{
            const isWatchLater = prevWatchLaterVieos.some((watchLater) => watchLater.id === video.id);
            if(isWatchLater){
                return prevWatchLaterVieos
            }
            return [...prevWatchLaterVieos, video]
        })
    }
    useEffect(() =>{
        const fetchVideos = async () =>{
            try {
                const response = await fakeVideoFetch('https://example.com/api/videos');
                if(response.status === 200){
                    setAllVideos(response.data.videos)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchVideos();
    }, [])
    return (
        <VideoContext.Provider value={{allVideos, handleLike, likedVideos, handleWatchLater, watchLaterVideos}}>
            {children}
        </VideoContext.Provider>
    )
}
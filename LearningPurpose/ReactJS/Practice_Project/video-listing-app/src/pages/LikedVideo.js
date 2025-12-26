import React, { useContext } from "react";
import { VideoContext } from "../components/VideoContext";

const LikedVideo = () => {
  const { likedVideos } = useContext(VideoContext);
  return (
    <React.Fragment>
      <div className="video-list">
        {likedVideos.map((video) => (
          <div className="video" key={video.id}>
            <video poster={video.thumbnail}>
              <source src={video.url} />
            </video>
            <h2>{video.title}</h2>
            <h2>
              <a href={video.url} target="_blank">
                Watch here
              </a>
            </h2>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default LikedVideo;

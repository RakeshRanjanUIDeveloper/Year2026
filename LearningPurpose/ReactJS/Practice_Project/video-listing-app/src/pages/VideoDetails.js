import React, { useContext } from "react";
import { useParams } from "react-router";
import { VideoContext } from "../components/VideoContext";

const VideoDetails = () => {
  const { id } = useParams();
  const { allVideos } = useContext(VideoContext);
  const video = allVideos.find((video) => video.id === Number(id));
  if (!video) {
    return <h2>Video not found!</h2>;
  }
  return (
    <React.Fragment>
      <div>
        <h1>{video.title}</h1>
        <video controls poster={video.thumbnail}>
          <source src={video.url} />
        </video>
        <p>{video.description}</p>
      </div>
    </React.Fragment>
  );
};

export default VideoDetails;

import React, { useEffect, useState } from "react";
import { fakeImageFetch } from "./fakeImageFetch";

const Image = ({ heading, height, width }) => {
  const [imageDetails, setImageDetails] = useState({});
  const imageStyle = {
    height:height,
    width:width
  }
  useEffect(() => {
    const fetchImageDetails = async () => {
      try {
        const response = await fakeImageFetch("https://example.com/api/user");
        if (response.status === 200) {
          setImageDetails(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchImageDetails();
  }, []);
  return (
    <React.Fragment>
      <div>
        <h2>{heading}</h2>
        <img src={imageDetails.image} style={imageStyle} />
        <h3>name - {imageDetails.name}</h3>
        <h3>Likes - {imageDetails.likes}</h3>
        <h3>Comments - {imageDetails.comments}</h3>
      </div>
    </React.Fragment>
  );
};

export default Image;

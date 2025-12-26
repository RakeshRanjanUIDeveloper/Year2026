import React from "react";
import Image from "./Image";

const StationeryList = ({ header, items }) => {
    const imageLink ='https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg';
    const caption = 'Spring Flowers';
  return (
    <React.Fragment>
      <h2>{header}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Image imageLink={imageLink} caption={caption} />
    </React.Fragment>
  );
};

export default StationeryList;

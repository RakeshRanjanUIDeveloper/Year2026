import React from "react";
import ProductLists from './ProductLists'
const Image = ({ imageLink, caption }) => {
  const imageStyle = {
    width: "350px",
  };
  return (
    <React.Fragment>
      <figure>
        <img style={imageStyle} src={imageLink} />
        <figcaption>{caption}</figcaption>
      </figure>
      <ProductLists />
    </React.Fragment>
  );
};

export default Image;

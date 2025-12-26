import React from "react";

const Product = ({ name, price }) => {
  const NameStyle = {
    color: "red",
  };
  const PriceStyle = {
    color: "green",
    fontStyle: "italic",
  };

  return (
    <div>
      Product Name :<span style={NameStyle}>{name} </span> , Product Price:
      <span style={PriceStyle}>{price}</span>
    </div>
  );
};

export default Product;

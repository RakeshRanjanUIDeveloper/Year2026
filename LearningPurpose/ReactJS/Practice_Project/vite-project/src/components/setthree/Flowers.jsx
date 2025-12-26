import React from "react";

const Flowers = ({ flowersBouquet }) => {
    const flowersMorePrice = flowersBouquet.filter((f) => f.price > 2000);
    console.log(flowersMorePrice)
  return (
    <React.Fragment>
      <ol>
      {
        flowersMorePrice.map((b) => (
            b.flowers.map((f) => <li>{f}</li>)
        ))
      }
      </ol>
    </React.Fragment>
  );
};

export default Flowers;

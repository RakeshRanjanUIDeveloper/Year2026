import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

  console.log(data);
  const handleClick = () =>{
        setShowIndex()
  }
  return (
    <React.Fragment>
      <div className="accordion-item">
        <div className="accordion-heading" onClick={handleClick}>
          {data.title.toLowerCase()} ({data.itemCards.length})
          <span className="accordion-arrow"></span>
        </div>
        <div className="accordion-content">
         {
            showItems &&  <ItemList items={data.itemCards} />
         }
        </div>
      </div>
    </React.Fragment>
  );
};

export default RestaurantCategory;

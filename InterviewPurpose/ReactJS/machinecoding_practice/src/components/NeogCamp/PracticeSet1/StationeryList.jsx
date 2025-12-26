import React from "react";

const StationeryList = ({ header, items }) => {
  return (
    <div>
      <h2>{header}</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default StationeryList;

import React from "react";

const Cars = ({ cars }) => {
  const categoryCount = cars.reduce((acc, {category}) => ({...acc, [category] : (acc[category]||0)+1}),{});
  console.log(categoryCount);
  return (
    <div>
      {Object.entries(categoryCount).map(([category, count]) => (
        <p key={category}> 
          {category} Cars: {count}
        </p>
      ))}
    </div>
  );
};

export default Cars;

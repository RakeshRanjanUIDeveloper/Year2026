import React from "react";

const Cars = () => {
  const cars = [
    { id: 1, name: "supra", price: 500000, category: "sports" },
    { id: 2, name: "A5", price: 700000, category: "luxury" },
    { id: 3, name: "huyara", price: 1500000, category: "sports" },
    { id: 4, name: "agera R", price: 3500000, category: "sports" },
  ];

  const categoryObject = cars.reduce((acc, curr) => {
    if (acc[curr.category]) {
      acc[curr.category] += 1;
    } else {
      acc[curr.category] = 1;
    }
    return acc;
  }, {});

  console.log(categoryObject);

  return (
    <React.Fragment>
      <ul>
        {Object.entries(categoryObject).map(([category, count]) => (
          <li key={category}>
            <strong>{category}</strong>: {count}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Cars;

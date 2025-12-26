import React from "react";

const Cars = () => {
  const cars = [
    { id: 1, name: "supra", price: 500000, category: "sports" },
    { id: 2, name: "A5", price: 700000, category: "luxury" },
    { id: 3, name: "huyara", price: 1500000, category: "sports" },
    { id: 4, name: "agera R", price: 3500000, category: "sports" },
  ];

  // Count cars by category
  const categoryCount = cars.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + 1;
    return acc;
  }, {});

  return (
    <div>
      <h2>Cars</h2>
      {Object.entries(categoryCount).map(([category, count]) => (
        <p key={category}>
          {category}: {count}
        </p>
      ))}
    </div>
  );
};

export default Cars;

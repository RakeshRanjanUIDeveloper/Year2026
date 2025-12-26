import React from "react";

const Bouquet = ({ bouquet }) => {
  return (
    <div>
      <h2>Bouquet</h2>
      {bouquet
        .filter((b) => b.flowers.includes("rose"))
        .map((b) => (
          <p>Price of bouquet with roses : {b.price}</p>
        ))}
      <h2>
        {" "}
        display the flowers of a bouquet in an ordered list on the DOM which has
        a price above 2000.
      </h2>

      {bouquet
        .filter((b) => b.price > 2000)
        .map((b) => (
          <ol>
            {b.flowers.map((f) => (
              <li>{f}</li>
            ))}
          </ol>
        ))}
    </div>
  );
};

export default Bouquet;

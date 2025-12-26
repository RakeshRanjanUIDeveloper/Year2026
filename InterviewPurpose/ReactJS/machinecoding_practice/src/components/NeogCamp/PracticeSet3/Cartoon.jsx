import React from "react";

const Cartoon = () => {
  const cartoons = [
    {
      id: 1,
      name: "Mickey Mouse",
      superpower: "Invisibility",
      magnitude: 1,
    },
    {
      id: 2,
      name: "Spongebob Squarepants",
      superpower: "Super Strength",
      magnitude: 3,
    },
    {
      id: 3,
      name: "Bugs Bunny",
      superpower: "Teleportation",
      magnitude: 9,
    },
    {
      id: 4,
      name: "Tom and Jerry",
      superpower: "Intelligence",
      magnitude: 8,
    },
    {
      id: 5,
      name: "The Powerpuff Girls",
      superpower: "Flight",
      magnitude: 10,
    },
  ];
  return (
    <div>
      <h2>
        {" "}
        display all details of those characters whose magnitude is greater than
        5.
      </h2>
      <ul>
        {cartoons
          .filter((c) => c.magnitude > 5)
          .map((c) => (
            <li>
              {c.name} - {c.superpower} - {c.magnitude}
            </li>
          ))}
      </ul>
      <h2>
        display only the names of characters whose magnitude is an even number
      </h2>
      <ul>
        {cartoons
          .filter((c) => c.magnitude % 2 === 0)
          .map((c) => (
            <li>
              {c.name} - {c.superpower} - {c.magnitude}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cartoon;

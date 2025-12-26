import React from "react";
import Image from "./Image";
import Cartoons from "./Cartoons";
import Vegetables from "./Vegetables";
import Bouquet from "./Bouquet";
import Flowers from "./Flowers";
import Ngo from "./Ngo";
import Cars from "./Cars";
import Students from "./Students";

const SetThree = () => {
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
  const bouquet = [
    {
      id: 1,
      flowers: ["rose", "lily", "marigold"],
      totalFlowers: 9,
      price: 1400,
    },
    {
      id: 2,
      flowers: ["snapdragon", "sunflower"],
      totalFlowers: 10,
      price: 3400,
    },
  ];

  const flowersBouquet = [
    {
      id: 1,
      flowers: ["rose", "lily", "marigold"],
      totalFlowers: 9,
      price: 1400,
    },
    {
      id: 2,
      flowers: ["snapdragon", "sunflower"],
      totalFlowers: 10,
      price: 3400,
    },
  ];

  const donationData = [
    {
      id: 1,
      name: "Nitin",
      Donation: 7800,
    },
    {
      id: 2,
      name: "Mehak",
      Donation: 9500,
    },
    {
      id: 3,
      name: "Mehul",
      Donation: 65000,
    },
    {
      id: 4,
      name: "Nina",
      Donation: 560,
    },
  ];

  return (
    <React.Fragment>
      <Image src="https://picsum.photos/200" height={100} width={100} />
      <Cartoons cartoons={cartoons} superpower="Intelligence" />
      <Vegetables />
      <Bouquet bouquet={bouquet} />
      <Flowers flowersBouquet={flowersBouquet} />
      <Ngo donationData={donationData} />
      <Cars />
      <Students />
    </React.Fragment>
  );
};

export default SetThree;

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import "./App.css";
import Header from "./practiceset8/Header";
import ProductListing from "./practiceset8/ProductListing";
import Cart from "./practiceset8/Cart";
import { useState } from "react";
// import About from './Assignment2/About';
// import Article from './Assignment2/Article';
// import ColorPicker from './Assignment2/ColorPicker';
// import Gadgets from './Assignment2/Gadgets';
// import Greeting from './Assignment2/Greeting';
// import Mobiles from './Assignment2/Mobiles';
// import MyGadgets from './Assignment2/MyGadgets';
// import Product from './Assignment2/Product';
// import UserProfile from './Assignment2/UserProfile';
// import EmployeeCard from './components/EmployeeCard';
// import EmployeeDetails from './components/EmployeeDetails';
// import About from "./practiceset2/About";
// import Article from "./practiceset2/Article";
// import ColorPicker from "./practiceset2/ColorPicker";
// import Gadgets from "./practiceset2/Gadgets";
// import Greeting from "./practiceset2/Greeting";
// import MyGadgets from "./practiceset2/MyGadgets";
// import Phones from "./practiceset2/Phones";
// import Product from "./practiceset2/Product";
// import Todo from "./practiceset2/Todo";
// import UserProfile from "./practiceset2/UserProfile";
// import Bouquet from "./practiceset3/Bouquet";
// import Cars from "./practiceset3/Cars";
// import Cartoons from "./practiceset3/Cartoons";
// import CertificationStatus from "./practiceset3/CertificationStatus";
// import Flowers from "./practiceset3/Flowers";
// import Image from "./practiceset3/Image";
// import Ngo from "./practiceset3/Ngo";
// import Vegetables from "./practiceset3/Vegetables";
// import Main from "./practiceset4/Main";
// import Main from "./practiceset5/Main";
// import Main from "./practiceset6/Main";
// import Main from "./practiceset7/Main";

function App() {
  const userData = {
    name: "John",
    age: 25,
    email: "john@example.com",
  };
  const products = [
    {
      id: 1,
      name: "keyboard",
      description: "Logitech Mechanical Keyboard",
      price: 2000,
    },
    { id: 2, name: "mouse", description: "Dell Wireless Mouse", price: 1200 },
    {
      id: 3,
      name: "monitor",
      description: "Lenovo 32-inch display Monitor",
      price: 10000,
    },
    { id: 4, name: "mobile", description: "iPhone 13 Pro Max", price: 140000 },
    {
      id: 5,
      name: "speakers",
      description: "Creative Desktop Speakers",
      price: 5000,
    },
    {
      id: 6,
      name: "headphones",
      description: "Sony over-the-ear wired Headphones with mic",
      price: 1500,
    },
    { id: 7, name: "mobile", description: "iPhone 12", price: 90000 },
  ];
  const electronics = [
    {
      id: 1,
      name: "keyboard",
      description: "Logitech Mechanical Keyboard",
      price: 2000,
    },
    { id: 2, name: "mouse", description: "Dell Wireless Mouse", price: 1200 },
    { id: 3, name: "mobile", description: "iPhone 13", price: 61000 },
    {
      id: 4,
      name: "monitor",
      description: "Lenovo 32-inch display Monitor",
      price: 10000,
    },
    { id: 5, name: "mobile", description: "iPhone 13 Pro Max", price: 140000 },
    {
      id: 6,
      name: "speakers",
      description: "Creative Desktop Speakers",
      price: 5000,
    },
    {
      id: 7,
      name: "headphones",
      description: "Sony over-the-ear wired Headphones with mic",
      price: 1500,
    },
    { id: 8, name: "mobile", description: "iPhone 12", price: 90000 },
  ];
  const myGadgets = [
    {
      id: 1,
      name: "keyboard",
      description: "Logitech Mechanical Keyboard",
      price: 2000,
    },
    { id: 2, name: "mouse", description: "Dell Wireless Mouse", price: 1200 },
    {
      id: 3,
      name: "speakers",
      description: "Bose L1 Pro32 Portable",
      price: 256000,
    },
    { id: 4, name: "mobile", description: "iPhone 13", price: 61000 },
    {
      id: 5,
      name: "monitor",
      description: "Lenovo 32-inch display Monitor",
      price: 10000,
    },
    { id: 6, name: "mobile", description: "iPhone 13 Pro Max", price: 140000 },
    {
      id: 7,
      name: "speakers",
      description: "Creative Desktop Speakers",
      price: 5000,
    },
    {
      id: 8,
      name: "headphones",
      description: "Sony over-the-ear wired Headphones with mic",
      price: 1500,
    },
    { id: 9, name: "mobile", description: "iPhone 12", price: 90000 },
  ];

  const todoItems = [
    {
      id: 1,
      title: "Complete practice set",
      description: "Practice set 1 of React",
      isCompleted: true,
    },
    {
      id: 2,
      title: "Attend revision session",
      description: "Revision session of React",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Watch recording",
      description: "Live session recording of React",
      isCompleted: true,
    },
    {
      id: 4,
      title: "Attend DSH",
      description: "Doubt Solving Hours of React",
      isCompleted: false,
    },
    {
      id: 5,
      title: "Complete practice set",
      description: "Practice set 2 of React",
      isCompleted: false,
    },
  ];
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
  const vegetables = [
    {
      id: 1,
      name: "Carrots",
      pickDate: "2023-03-25",
    },
    {
      id: 2,
      name: "Broccoli",
      pickDate: "2023-03-30",
    },
    {
      id: 3,
      name: "Peppers",
      pickDate: "2023-03-25",
    },
    {
      id: 4,
      name: "Tomatoes",
      pickDate: "2023-03-27",
    },
    {
      id: 5,
      name: "Ladies Finger",
      pickDate: "2023-03-30",
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

  const flowers = [
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
  const DonationData = [
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
  const cars = [
    {
      id: 1,
      name: "supra",
      price: 500000,
      category: "sports",
    },
    {
      id: 2,
      name: "A5",
      price: 700000,
      category: "luxury",
    },
    {
      id: 3,
      name: "huyara",
      price: 1500000,
      category: "sports",
    },
    {
      id: 4,
      name: "agera R",
      price: 3500000,
      category: "sports",
    },
  ];
  const studentData = [
   { id: 1, name: 'Nitin', marks: 78 },
   { id: 2, name: 'Mehak', marks: 95 },
   { id: 3, name: 'Mehul', marks: 65 },
   { id: 4, name: 'Nina', marks: 56 },
 ];
  const title = "React is awesome";
  const content = "React is a JavaScript library for building user interfaces.";
  const heading = "About Me";
  const name = "Preeti"; // you can put your name
  const learning = "I am learning React JS currently at neoG Camp.";

  const [cartProducts, setCartProducts] = useState([]);
  const addToCart =(product) =>{
    setCartProducts((prevCart) => [...prevCart, product]);
  }
  return (
    <div className="App">
      {/*<EmployeeCard name="Rakesh" designation="SE" experience="test" />
       <EmployeeDetails />
       <Greeting name='Rakesh'/>
       <Product name='chair' price='10$'/>
       <UserProfile user={userData}/>
       <Gadgets products={products}/>
       <Mobiles products={electronics}/>
       <Article title={title} content={content}/>
       <About heading={heading} name={name} learning={learning}/>
       <MyGadgets products={myGadgets}/> 
       <ColorPicker/>*/}

      {/*<h1>----Rakesh Practice Set 2----</h1>
      <Greeting name="Rakesh" />
      <Product name="Mobile" price={50000} />
      <UserProfile user={userData} />
      <Gadgets products={products} />
      <Phones products={electronics} />
      <Article title={title} content={content} />
      <About heading={heading} name={name} learning={learning} />
      <MyGadgets mygadgets={myGadgets} />
      <ColorPicker />
      <Todo todoItems={todoItems} />
      <h1>----Rakesh Practice Set 2----</h1>*/}

       {/*<h1>----Rakesh Practice Set 3----</h1>
      <Image img="https://picsum.photos/200"  imgHeight="200px" imgWidth="250px" />
      <Cartoons cartoons={cartoons} />
      <Vegetables vegetables={vegetables} />
      <Bouquet bouquet={bouquet} />
      <Flowers flowers={flowers} />
      <Ngo DonationData={DonationData} />
      <Cars cars={cars} />
      <CertificationStatus studentData={studentData} />
      <h1>----Rakesh Practice Set 3----</h1>*/}
     
      {/*<h1>----Rakesh Practice Set 4----</h1>
        <Main />
        <h1>----Rakesh Practice Set 4----</h1>*/}
        
         {/*<h1>----Rakesh Practice Set 5----</h1>
          <Main />
        <h1>----Rakesh Practice Set 5----</h1>*/}

        {/*<h1>----Rakesh Practice Set 6----</h1>
          <Main />
        <h1>----Rakesh Practice Set 6----</h1>*/}

        {/*<h1>----Rakesh Practice Set 7----</h1>
          <Main />
        <h1>----Rakesh Practice Set 7----</h1>*/}

     
       <Header />
 
       <Outlet />
       <ProductListing addToCart={addToCart} />
       <Cart cartProducts={cartProducts} />

    </div>
  );
}

export default App;





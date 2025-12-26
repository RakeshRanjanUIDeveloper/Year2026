import "./App.css";
import Chips from "./components/AkshaySaini/ChipsInput/Chips";
//import FileExplorer from "./components/FileExplorer/FileExplorer";
import CustomButton from "./components/NeogCamp/PracticeSet1/CustomButton";
import CustomImage from "./components/NeogCamp/PracticeSet1/CustomImage";
import Employee from "./components/NeogCamp/PracticeSet1/Employee";
import EmployeeCard from "./components/NeogCamp/PracticeSet1/EmployeeCard";
import Products from "./components/NeogCamp/PracticeSet1/Products";
import StationeryList from "./components/NeogCamp/PracticeSet1/StationeryList";
import Student from "./components/NeogCamp/PracticeSet1/Student";
import About from "./components/NeogCamp/PracticeSet2/About";
import Article from "./components/NeogCamp/PracticeSet2/Article";
import ColorPicker from "./components/NeogCamp/PracticeSet2/ColorPicker";
import Gadgets from "./components/NeogCamp/PracticeSet2/Gadgets";
import Greeting from "./components/NeogCamp/PracticeSet2/Greeting";
import MyGadgets from "./components/NeogCamp/PracticeSet2/MyGadgets";
import Phones from "./components/NeogCamp/PracticeSet2/Phones";
import Product from "./components/NeogCamp/PracticeSet2/Product";
import Todo from "./components/NeogCamp/PracticeSet2/Todo";
import UserProfile from "./components/NeogCamp/PracticeSet2/UserProfile";
import Bouquet from "./components/NeogCamp/PracticeSet3/Bouquet";
import Cars from "./components/NeogCamp/PracticeSet3/Cars";
import Cartoon from "./components/NeogCamp/PracticeSet3/Cartoon";
import Donation from "./components/NeogCamp/PracticeSet3/Donation";
import Image from "./components/NeogCamp/PracticeSet3/Image";
import Vegetables from "./components/NeogCamp/PracticeSet3/Vegetables";
import Counter from "./components/PSClasses/Counter";
//import ProgressMain from "./components/ProgressBar/ProgressMain";
//import SearchBar from "./components/SearchBar/SearchBar";
function App() {
  const btnStyle = {
    backgroundColor: "lightgreen",
    color: "darkgreen",
    borderRadius: "5px",
    padding: "10px",
  };
  const header = "Stationery Items";
  const items = ["pen", "pencil", "ruler", "eraser"];
  const imageLink =
    "https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg";
  const caption = "Spring Flowers";
  const products = [
    { name: "Perk", quantity: 10, sales: 7 },
    { name: "Pepsi", quantity: 10, sales: 20 },
    { name: "Coke", quantity: 18, sales: 50 },
    { name: "Maggi", quantity: 41, sales: 22 },
    { name: "5Star", quantity: 7, sales: 9 },
  ];
  const student = {
    name: "John Doe",
    english: 90,
    maths: 80,
    computers: 70,
  };
  const userData = {
    name: "John",
    age: 25,
    email: "john@example.com",
  };
  const gadgets = [
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

  const phones = [
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

  const title = "React is awesome";
  const content = "React is a JavaScript library for building user interfaces.";
  const heading = "About Me";
  const name = "Preeti"; // you can put your name
  const learning = "I am learning React JS currently at neoG Camp.";

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
    <div className="App">
      {/* <ProgressMain /> 
    <FileExplorer />
    <SearchBar />

      <EmployeeCard
        name="Rakesh"
        designation="Software Engineer"
        workExperience="10 Years"
      />
      <CustomButton text="Start" btnStyle={btnStyle} />
      <StationeryList header={header} items={items} />
      <CustomImage imageLink={imageLink} caption={caption} />
      <Products products={products} />
      <Student student={student} />
      <Employee  />

      <Greeting name="Rakesh" />
      <Product name="Laptop" price={70000} />
      <UserProfile userData={userData} />
      <Gadgets gadgets={gadgets} />
      <Phones phones={phones} />
      <Article title={title} content={content} />
      <About heading={heading} name={name} learning={learning} />
      <MyGadgets myGadgets={myGadgets} />
      <ColorPicker />
      <Todo todoItems={todoItems} />

      <Image
        imgSrc="https://picsum.photos/200"
        imgHeight="100px"
        imgWidth="100px"
      />
      <Cartoon />
      <Vegetables />
      <Bouquet bouquet={bouquet} />
      <Donation donationData={donationData} />
      <Cars />
      <Counter />*/}
      <Chips />
    </div>
  );
}

export default App;

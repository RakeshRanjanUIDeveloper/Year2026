import {Outlet } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import "./App.css";
// import Header from "./practiceset8/Header";
import ProductListing from "./practiceset8/ProductListing";
import Cart from "./practiceset8/Cart";
import { useState } from "react";
import Header from "./practiceset9/Header";
function App() {
  const [cartProducts, setCartProducts] = useState([]);
  const [wishlistProducts, setWishListProducts] = useState([]);
  const addToCart =(product) =>{
    setCartProducts((prevCart) => [...prevCart, product]);
  }
  const removeFromCart = (productId) =>{
    setCartProducts((prevCart) => prevCart.filter((product) => product.id !== productId))
  }
  const addToWishList = (product) =>{
    setWishListProducts((prevWishlist) => [...prevWishlist, product]);
  }

  const removeFromWishList = (productId) =>{
    setWishListProducts((prevWishlist) => prevWishlist.filter((product) => product.id !== productId))
  }
  return (
    <div className="App"> 
       <Header />
       <Outlet context={{ addToCart, cartProducts, removeFromCart,  wishlistProducts, addToWishList, removeFromWishList}} />
    </div>
  );
}

export default App;





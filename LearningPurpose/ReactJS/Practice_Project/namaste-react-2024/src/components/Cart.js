import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utilis/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items)
  const dispatch = useDispatch()
  const handleClearCart = () =>{
   dispatch(clearCart())
  }
  return (
    <React.Fragment>
      <div className="content-area cart-container">
        <h2><b>Your Cart</b></h2>
        <button className="clear-cart" onClick={handleClearCart}>Clear Cart</button>
        {
          cartItems.length == 0 && <h1><b>Your cart is empty. Start shopping now to fill it with amazing items!</b></h1>
        }
        <ItemList items={cartItems} />
      </div>
    </React.Fragment>
  );
};

export default Cart;

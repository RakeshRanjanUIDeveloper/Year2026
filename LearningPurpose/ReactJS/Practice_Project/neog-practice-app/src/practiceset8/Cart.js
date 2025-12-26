import React from "react";
import { useOutletContext } from "react-router-dom";

const Cart = () => {
   const {cartProducts, removeFromCart} = useOutletContext();
  return (
    <div className="content-area">
    <h2>My Cart - {cartProducts.length} Items </h2>
    <div className="products">
      {cartProducts.map((product) => (
        <div className="product">
          <p><b>Name : </b>{product.name}</p>
          <p><b>Description : </b>{product.description}</p>
          <p><b>Price : </b>{product.price}</p>
          <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Cart;

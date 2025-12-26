import React, { useContext, useState } from "react";
import { FoodContext } from "../components/FoodContext";

const Cart = () => {
  const { cartMenu } = useContext(FoodContext);
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  const totalTime = cartMenu.reduce((acc, menu) => acc+menu.delivery_time, 0)
  const totalPrice = cartMenu.reduce((acc, menu) => acc + menu.price, 0)
  const handleCoupon = () =>{
       if (!isCouponApplied) {
      setIsCouponApplied(true);
    }
  }
  return (
    <React.Fragment>
      <h4>Total Delivery Time  : {totalTime} Rs.</h4>
      <h4>Total Price : ₹{isCouponApplied ? totalPrice - 5 : totalPrice}</h4>
      <button onClick={handleCoupon}>Apply Coupon</button>
      <div className="menu-cards">
        {cartMenu.map((menu) => (
          <div className="menu-card" key={menu.id}>
            <img src={menu.image} alt={menu.name} />
            <p>
              <b>Name -</b> {menu.name}
            </p>
            <p>
              <b>Description -</b> {menu.description}
            </p>
            <p>
              <b>Price -</b> Rs.{menu.price}
            </p>
            <p>
              <b>Delivery Time -</b> {menu.delivery_time} mins
            </p>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Cart;

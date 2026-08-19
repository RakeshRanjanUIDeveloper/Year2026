import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "./cartActions";

const CartSidebar = () =>{
    const dispatch = useDispatch()
    const {cartItems} = useSelector((state) => state.cart)
    const total = cartItems.reduce((sum, item) => sum+ item.price, 0)
    if (cartItems.length === 0) return <p>Cart is Empty!</p>;
    return (
    <div className="cart-box">
        <h2 className="cart-heading">Cart</h2>
        {cartItems.length === 0 ? (
            <p className="cart-empty">Cart is empty</p>
        ) : (
            <>
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <img src={item.thumbnail} alt={item.title} className="cart-item-img" />
                        <div className="cart-item-info">
                            <p className="cart-item-title">{item.title}</p>
                            <p className="cart-item-price">${item.price}</p>
                        </div>
                        <button className="cart-remove-btn" onClick={() => dispatch(removeFromCart(item.id))}>✕</button>
                    </div>
                ))}
                <div className="cart-total">
                    <span className="cart-total-label">Total</span>
                    <span className="cart-total-price">${total.toFixed(2)}</span>
                </div>
            </>
        )}
    </div>
);
}
export default CartSidebar;
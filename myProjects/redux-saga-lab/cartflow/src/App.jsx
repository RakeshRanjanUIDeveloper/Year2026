import "./App.css";
import ProductList from "./features/products/ProductList";
import CartSidebar from "./features/cart/CartSidebar";

const App = () => {
  return (
    <div className="app-layout">
      <div className="product-section">
        <ProductList />
      </div>
      <div className="cart-section">
        <CartSidebar />
      </div>
    </div>
  );
};

export default App;
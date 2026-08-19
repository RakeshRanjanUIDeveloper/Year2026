import { useDispatch, useSelector } from "react-redux";
import { addToCartRequest } from "../cart/cartActions";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const isChecking = useSelector((state) =>
    state.cart.itemsChecking.includes(product.id)
  );
  const isAdded = useSelector((state) =>
    state.cart.addedProductIds.includes(product.id)
  );
  const btnClass = `card-btn ${isChecking ? "checking" : isAdded ? "added" : ""}`;

return (
    <div className="card">
        <img src={product.thumbnail} alt={product.title} className="card-img" />
        <div className="card-body">
            <h3 className="card-title">{product.title}</h3>
            <p className="card-price">${product.price}</p>
            <p className="card-stock">{product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}</p>
            <button className={btnClass} onClick={() => dispatch(addToCartRequest(product))} disabled={isChecking || isAdded}>
                {isChecking ? "Checking..." : isAdded ? "Added ✓" : "Add to cart"}
            </button>
        </div>
    </div>
);
};

export default ProductCard;
import React, { useEffect, useState } from "react";
import { fakeProductFetch } from "./fakeProductFetch";
import { useOutletContext } from "react-router-dom";
const ProductListing = () => {
  const {addToCart, addToWishList} = useOutletContext();
  const [allProducts, setAllProducts] = useState([]);
 
  useEffect(() => {
    const fetchproducts = async () => {
      try {
        const response = await fakeProductFetch(
          "https://example.com/api/products"
        );
        if (response.status === 200) {
          setAllProducts(response.data.products);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchproducts();
  });

  return (
    <div className="content-area">
      <h2>Product Listing Page</h2>
      <div className="products">
        {allProducts.map((product) => (
          <div className="product">
            <p><b>Name : </b>{product.name}</p>
            <p><b>Description : </b>{product.description}</p>
            <p><b>Price : </b>{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <button onClick={() => addToWishList(product)}>Add to Wishlist</button>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default ProductListing;

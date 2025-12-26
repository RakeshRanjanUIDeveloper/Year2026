import React from 'react'
import { useOutletContext } from 'react-router-dom'

const WishList = () => {
  const {wishlistProducts, removeFromWishList} = useOutletContext();
  return (
    <div className="content-area">
    <h2>WishList Page - {wishlistProducts.length} Wishlist Items </h2>
    <div className="products">
      {wishlistProducts.map((product) => (
        <div className="product">
          <p><b>Name : </b>{product.name}</p>
          <p><b>Description : </b>{product.description}</p>
          <p><b>Price : </b>{product.price}</p>
          <button onClick={() => removeFromWishList(product.id)}>Remove from Wishlist</button>
        </div>
      ))}
    </div>
  </div>
  )
}

export default WishList
import React from 'react'
import './ProductCard.css'
const ProductCard = (props) => {
    const {resData} = props;
  return (
    <React.Fragment>
        <div className='productlist'>
            <div className='product'>
                <img src={resData.imageURL} />
                <h3>{resData.name}</h3>
                <p>{resData.price}</p>
            </div>
        </div>
    </React.Fragment>
  )
}

export default ProductCard
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import styles from "../styles/ProductDetail.module.css";

const ProductDetail = () => {
  const { id } = useParams();
  const { data } = useFetchData();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const handleBack  = () =>{
    navigate(-1)
  }
  useEffect(() => {
    const selectedProduct = data.find((product) => product.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id, data]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
    <button className={styles.backButton} onClick={handleBack}>
        &larr; Back to Products List
      </button>
      <h2 className={styles.heading}>{product.name}</h2>
      <div className={styles.productDetail}>
        <img
          src={product.imageUrl}
          alt={product.name}
          className={styles.productImage}
        />
        <div className={styles.details}>
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
          <p><strong>Stock:</strong> {product.stock}</p>
          <p><strong>Supplier:</strong> {product.supplier}</p>
          <p><strong>Department:</strong> {product.department}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

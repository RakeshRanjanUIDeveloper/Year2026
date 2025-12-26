import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/AddProduct.module.css";

const AddProduct = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    department: "",
    name: "",
    description: "",
    price: 0,
    stock: 0,
    sku: "",
    supplier: "",
    delivered: 0,
    imageUrl: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    
    const newProduct = {
      id: Date.now(), // Unique ID
      ...formData,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock),
      delivered: parseInt(formData.delivered)
    };

    const updatedProducts = [...storedProducts, newProduct];
    localStorage.setItem("products", JSON.stringify(updatedProducts));

    alert("Product added successfully!");
    navigate("/Products/All"); // Redirect to product list
  };

  return (
    <div className={styles.container}>
      <h1>Add New Product</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Department:</label>
          <input type="text" name="department" value={formData.department} onChange={handleChange} className={styles.input} required />
        </div>

        <div className={styles.formGroup}>
          <label>Product Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className={styles.input} required />
        </div>

        <div className={styles.formGroup}>
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} className={styles.textarea} required></textarea>
        </div>

        <div className={styles.formGroup}>
          <label>Price:</label>
          <input type="number" name="price" value={formData.price} onChange={handleChange} className={styles.input} required />
        </div>

        <div className={styles.formGroup}>
          <label>Stock:</label>
          <input type="number" name="stock" value={formData.stock} onChange={handleChange} className={styles.input} required />
        </div>

        <div className={styles.formGroup}>
          <label>SKU:</label>
          <input type="text" name="sku" value={formData.sku} onChange={handleChange} className={styles.input} required />
        </div>

        <div className={styles.formGroup}>
          <label>Supplier Name:</label>
          <input type="text" name="supplier" value={formData.supplier} onChange={handleChange} className={styles.input} required />
        </div>

        <div className={styles.formGroup}>
          <label>Delivered:</label>
          <input type="number" name="delivered" value={formData.delivered} onChange={handleChange} className={styles.input} required />
        </div>

        <div className={styles.formGroup}>
          <label>Image URL:</label>
          <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} className={styles.input} required />
        </div>

        <button type="submit" className={styles.button}>Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;

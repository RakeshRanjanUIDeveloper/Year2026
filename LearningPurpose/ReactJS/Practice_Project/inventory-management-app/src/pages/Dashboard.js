import React from "react";
import useFetchData from "../hooks/useFetchData";
import styles from "../styles/Dashboard.module.css";
const Dashboard = () => {
  const { data, loading, error } = useFetchData();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const totalStock = data.reduce((acc, curr) => acc + curr.stock, 0);
  const totalDelivered = data.reduce((acc, curr) => acc + curr.delivered, 0);
  const lowStockQunatity = data.filter(
    (lowstock) => lowstock.stock <= 10
  ).length;
  return (
    <React.Fragment>
      <h1>Inventory Dashboard</h1>
      <div className={styles["inventory-boxes"]}>
        <div className={styles["inventory-box"]}>
          <div>{totalStock} <br />Total Stock</div>
        </div>
        <div className={styles["inventory-box"]}>
          <div>{totalDelivered} <br />Total Delivered</div>
        </div>
        <div className={styles["inventory-box"]}>
          <div>{lowStockQunatity} <br />Low Stock Items</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;

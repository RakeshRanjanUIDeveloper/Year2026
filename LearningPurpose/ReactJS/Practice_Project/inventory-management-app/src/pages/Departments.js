import React from "react";
import styles from  '../styles/Dashboard.module.css'
import useFetchData from "../hooks/useFetchData";
import { NavLink } from "react-router-dom";
const Departments = () => {
    const {data} = useFetchData();
    // const uniqueDepartments = [...new Set(data.map((item) => item.department))]
    const uniqueDepartments = data.reduce((acc, curr) => {
        if(!acc.includes(curr.department)){
            acc.push(curr.department)
        }
        return acc;
    }, [])
  return (
    <React.Fragment>
      <div className={styles["inventory-boxes"]}>
            {
                uniqueDepartments.map((department, id)=> (
                    <NavLink to={`/Products/${department}`} key={id} className={styles["inventory-box"]}>
                        <div>{department}</div>
                    </NavLink>
                ))
            }
      </div>
    </React.Fragment>
  );
};

export default Departments;

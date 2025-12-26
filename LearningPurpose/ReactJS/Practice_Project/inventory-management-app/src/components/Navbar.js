import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const location = useLocation(); // Get the current location object

  return (
    <div className={styles.header}>
      <nav>
        <ul>
          <li><NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')}> Dashboard</NavLink></li>
          <li><NavLink to="/Departments" className={({ isActive }) => (isActive ? styles.active : '')} >Departments</NavLink>
          </li>
          <li><NavLink to="/Products/All" className={() =>
                location.pathname.startsWith('/Products') ? styles.active : ''
              }
            >Products</NavLink></li>
          <li><NavLink to="/AddProduct" className={({ isActive }) => (isActive ? styles.active : '')}>Add Product</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

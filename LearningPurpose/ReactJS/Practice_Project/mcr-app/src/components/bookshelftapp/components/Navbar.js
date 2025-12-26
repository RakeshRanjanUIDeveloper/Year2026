
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>Bookshelf App</h1>
      <Link to="/search">Search</Link>
    </nav>
  );
};

export default Navbar;

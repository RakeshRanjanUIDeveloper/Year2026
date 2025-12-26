import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <React.Fragment>
      <div className="header">
        <div className="nav-items">
          {/*<ul>
            <li><NavLink to="/">Product Listing</NavLink></li>
            <li> <NavLink to="/cart">Cart</NavLink> </li>
            <li><NavLink to="/wishlist">WishList</NavLink></li>
          </ul>
          <ul>
            <li><NavLink to="/">Summary Todos</NavLink></li>
            <li> <NavLink to="/doneTodos">Done Todos</NavLink> </li>
            <li><NavLink to="/openTodos">Open Todos</NavLink></li>
            <li><NavLink to="/individualTodos">Individual Todos</NavLink></li>
          </ul>*/}
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li> <NavLink to="/questions">Questions</NavLink> </li>
            <li><NavLink to="/answer">Answer</NavLink></li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;

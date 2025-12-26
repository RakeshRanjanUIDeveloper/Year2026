import React from 'react';
import { NavLink } from 'react-router'; // Corrected 'react-router' to 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="nav-link">
              Inbox
            </NavLink>
          </li>
          <li>
            <NavLink to="spam" className="nav-link">
              Spam
            </NavLink>
          </li>
          <li>
            <NavLink to="trash" className="nav-link">
              Trash
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

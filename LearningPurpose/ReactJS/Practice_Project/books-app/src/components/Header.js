import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import { BookContext } from '../components/BookContext'

const Header = () => {
    const {allFavorites} = useContext(BookContext);
    console.log("Header favorites count:", allFavorites.length);
   
  return (
    <div className='header'>
        <h1>Book Tracker</h1> 
        <nav>
            <ul>
                <li>
                    <NavLink to='/' end  className={({ isActive }) => (isActive ? 'active-link' : '')}>All Books</NavLink>
                </li>
                <li className='test'>
                    <NavLink to='/favorites' className={({ isActive }) => (isActive ? 'active-link' : '')}>Favorites
                    <span style={{color:"yellow" ,marginLeft: "8px"}}>{ allFavorites.length}</span> </NavLink>
                </li>
                <li>
                    <NavLink to='/read' className={({ isActive }) => (isActive ? 'active-link' : '')}>Read</NavLink>
                </li>
                <li>
                    <NavLink to='/profile' className={({ isActive }) => (isActive ? 'active-link' : '')}>Profile</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header;
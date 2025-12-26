import React, { Fragment } from 'react'
import { useGlobalContext } from './Context'
import logo from '../images/logo.svg'
import { FaBars } from 'react-icons/fa'
const Navbar = () => {
    const {openSidebar, openSubmenu, closeSubmenu}=useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };
  return (
    <Fragment>
        <nav className='nav'>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img src={logo} className='nav-logo' alt='stripe' />
                    <button className='btn toggle-btn' onClick={openSidebar}>
                        <FaBars />
                    </button>
                </div>
            </div>
            <ul className='nav-links'>
                <li><button className='link-btn' onMouseOver={displaySubmenu}>products</button></li>
                <li><button className='link-btn'  onMouseOver={displaySubmenu}>developers</button></li>
                <li><button className='link-btn'  onMouseOver={displaySubmenu}>company</button></li>
            </ul>
            <button className='btn signin-btn'>Sign in </button>
        </nav>
    </Fragment>
  )
}

export default Navbar
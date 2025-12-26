import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <React.Fragment>
        <div className='header'>
            <div className='nav-items'>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/inbox">Inbox</NavLink></li>
                    <li><NavLink to="/sent/:id">Sent</NavLink></li>
                </ul>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Header
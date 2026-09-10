import React, { useState } from 'react'

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const handleSidebar = () =>{
        setShowSidebar((prev) => !prev)
    }
  return (
    <div className={`sidebar ${showSidebar ? 'open': ''}`}>
        <button className="toggle-btn" onClick={handleSidebar}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN4Cu_gruB6ctvLgYTi7L-M4zBLN6nCZeSvw&s' /></button>
        <nav className='nav-menu'>
            <ul className='nav-list'>
                <li className='nav-item'>Home</li>
                <li className='nav-item'>About</li>
                <li className='nav-item'>Services</li>
                <li className='nav-item'>Contact</li>
            </ul>
        </nav>
    </div>
  )
}

export default Sidebar
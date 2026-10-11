import React, { useContext } from 'react'
import { UserContext } from './UserContext';

const Navbar = () => {
    const {isLoggedIn, login, logout} = useContext(UserContext);
    return (
        <nav>
            <h1>App</h1>
            <p>{isLoggedIn ? "Welcome User" : ""}</p>
            <button onClick={isLoggedIn ? logout : login}>{isLoggedIn ? "Logout" : "Login"}</button>
        </nav>
    )
}

export default Navbar
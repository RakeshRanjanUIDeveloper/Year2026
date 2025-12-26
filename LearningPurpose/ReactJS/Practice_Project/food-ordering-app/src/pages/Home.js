import React from 'react'
import { NavLink } from 'react-router'

const Home = () => {
  return (
    <React.Fragment>
        <h2>Welcome to Food Ordering App</h2>
        <p>Click here to go <NavLink to='menu'>Menu Page</NavLink></p>
    </React.Fragment>
  )
}

export default Home
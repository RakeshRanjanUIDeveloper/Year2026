import React from 'react'
import { NavLink } from 'react-router'

const Home = () => {
  return (
    <React.Fragment>
        <h2>Welcome to Video Library</h2>
        <p>To browse all Videos, click the below button or go to the Videos page</p>
        <button><NavLink to='videos'>Explore Videos</NavLink></button>
    </React.Fragment>
  )
}

export default Home
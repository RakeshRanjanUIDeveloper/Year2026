import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <React.Fragment>
        <h2>Welcome to Home Page</h2>
        <Link to="/questions">Show Questions List</Link>
    </React.Fragment>
  )
}

export default Home
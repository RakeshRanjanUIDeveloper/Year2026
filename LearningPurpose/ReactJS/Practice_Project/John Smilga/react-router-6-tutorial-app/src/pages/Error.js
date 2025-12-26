import React from 'react'
import {Link} from 'react-router-dom';
const Error = () => {
  return (
    <section className='section'>
        <h2>404 Page Not Found</h2>
        <p>Does not exist!!</p>
        <Link to='/' className='btn'>Back Home </Link>
    </section>
  )
}

export default Error
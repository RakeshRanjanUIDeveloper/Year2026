import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <React.Fragment>
        <h2>My Mail Box</h2>
        <div className='internal-links'>
            <Link to='/inbox'>Inbox</Link>
            <Link to='/sent'>Sent</Link>
        </div>
    </React.Fragment>
  )
}

export default Home
import React, { useContext } from 'react'
import { UserContext } from './UserContext';

const Dashboard = () => {
    const {isLoggedIn} = useContext(UserContext);
  return (
    <div className='dashboard'>
        {
            isLoggedIn ? <h2>This is your dashboard</h2> : <h2>Please log in to view your dashboard</h2>
        }
    </div>
  )
}

export default Dashboard
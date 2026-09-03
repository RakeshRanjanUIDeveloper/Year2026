import React from 'react'
import Navbar from './Navbar'
import Dashboard from './Dashboard'
import { UserProvider } from './UserContext'

const Authentication = () => {
  return (
    <UserProvider>
      <div>
        <Navbar />
        <Dashboard />
      </div>
    </UserProvider>

  )
}

export default Authentication
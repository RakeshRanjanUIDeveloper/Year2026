import React from 'react'
import UserStatusList from './UserStatusList'
import Products from './Products'
import Image from './Image'
import UserDetails from './UserDetails'
import Chat from './Chat'
import Comments from './Comments'

const Main = () => {
  return (
    <div>
        <UserStatusList  />
        <Products />
        <Image heading="User Profile" height='200px' width='300px' />
        <UserDetails height='200px' width='300px' />
        <Chat />
        <Comments />
    </div>
  )
}

export default Main
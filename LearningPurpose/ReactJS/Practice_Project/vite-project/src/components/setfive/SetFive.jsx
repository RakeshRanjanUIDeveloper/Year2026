import React from 'react'
import OnlineUsers from './OnlineUsers'
import Products from './Products'
import Image from './Image'
import Users from './Users'
import Chat from './Chat'
import Comments from './Comments'

const SetFive = () => {
  return (
    <React.Fragment>
        <OnlineUsers />
        <Products />
        <Image heading='User Profile' width='200px' height='120px' />
        <Users />
        <Chat />
        <Comments />
    </React.Fragment>
  )
}

export default SetFive
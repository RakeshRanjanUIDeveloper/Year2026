import React from 'react'
import './UserCard.css'
const UserCard = (props) => {
    const {userData} = props;
  return (
    <div className='userlist'>
       <div className='user'>
          <h3>{userData.name}</h3>
          <p>{userData.email}</p>
       </div>
    </div>
  )
}

export default UserCard
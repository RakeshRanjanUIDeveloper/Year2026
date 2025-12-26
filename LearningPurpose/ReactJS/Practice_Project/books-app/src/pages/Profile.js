import React, { useContext } from 'react'
import { BookContext } from '../components/BookContext'

const Profile = () => {
  const {userInfo} = useContext(BookContext);
  return (
    <React.Fragment>
      <div className='user-profile'>
        <img src={userInfo.img} />
        <h2>Name : {userInfo.name}</h2>
        <h3>Bio : {userInfo.bio}</h3>
      </div>
    </React.Fragment>
  )
}

export default Profile
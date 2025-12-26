import React from 'react'

const UserProfile = ({userData}) => {
    const {name, age, email} = userData;
  return (
    <div>My name is {name}, {age} years old and this is my Email id -  {email}</div>
  )
}

export default UserProfile
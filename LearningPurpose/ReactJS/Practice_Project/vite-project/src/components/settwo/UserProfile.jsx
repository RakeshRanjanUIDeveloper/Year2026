import React from 'react'

const UserProfile = ({user}) => {
    const {name, age, email} = user
  return (
    <div>User is {name} and he is {age} years old and have email {email}</div>
  )
}

export default UserProfile
import React from 'react'

const UserProfile = (props) => {
  const {name, age, email} = props.user;

  return (
    <div>
    <h3>UserProfile</h3>
    {name} ,{age} ,{email}
    
    
    
    </div>
  )
}

export default UserProfile
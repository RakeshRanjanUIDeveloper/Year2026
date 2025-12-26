import React from 'react'

const UserProfile = ({user}) => {
    //const {name, age, email} = props.user
    const {name, age, email} = user
  return (
    <div>
        <h4>{name} - {age} - {email}</h4>
    </div>
  )
}

export default UserProfile
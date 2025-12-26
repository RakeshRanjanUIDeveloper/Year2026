import React from 'react'

const Child = ({user}) => {
  return (
    <React.Fragment>
        <h1>Child</h1>
        <p>{user.name}</p>
        <p>{user.age}</p>
    </React.Fragment>
  )
}

export default Child
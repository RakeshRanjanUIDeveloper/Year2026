import React, { useState } from 'react'
import Intermediate from './Intermediate'

const Parent = () => {
    const [user, setUser] = useState({name:"Rakesh", age:32})
  return (
    <React.Fragment>
        <h1>Parent</h1>
        <Intermediate user={user} />
    </React.Fragment>
  )
}

export default Parent
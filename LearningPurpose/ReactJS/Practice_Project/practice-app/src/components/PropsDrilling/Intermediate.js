import React from 'react'
import Child from './Child'

const Intermediate = ({user}) => {
  return (
   <React.Fragment>
        <h1>Intermediate</h1>
        <Child user={user} />
   </React.Fragment>
  )
}

export default Intermediate
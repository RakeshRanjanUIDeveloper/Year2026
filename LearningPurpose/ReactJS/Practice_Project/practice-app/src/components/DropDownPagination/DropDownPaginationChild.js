import React from 'react'
import './post.css'
const DropDownPaginationChild = ({post}) => {
  return (
    <React.Fragment>
        <div className='post'>
            <h3>{post.title.substring(0,20)}</h3>
            <p>{post.body.substring(0,100)}</p>
        </div>
    </React.Fragment>
  )
}

export default DropDownPaginationChild
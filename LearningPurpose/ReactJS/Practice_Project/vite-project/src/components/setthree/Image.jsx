import React from 'react'

const Image = ({src, height, width}) => {
  return (
    <React.Fragment>
        <img src={src} style={{height:height+'px', width:width+'px'}} />
    </React.Fragment>
  )
}

export default Image
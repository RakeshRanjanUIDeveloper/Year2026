import React from 'react'

const Image = ({img, imgHeight, imgWidth}) => {
    const imageStyle={
        height:imgHeight,
        width:imgWidth
    }
  return (
    <div>
        <img src={img} style={imageStyle} />
    </div>
  )
}

export default Image
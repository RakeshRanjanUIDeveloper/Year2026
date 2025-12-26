import React from 'react'

const Image = ({imgSrc, imgWidth, imgHeight}) => {
  return (
    <div>
        <img src={imgSrc} style={{width: imgWidth, height: imgHeight}} alt='img' />
    </div>
  )
}

export default Image
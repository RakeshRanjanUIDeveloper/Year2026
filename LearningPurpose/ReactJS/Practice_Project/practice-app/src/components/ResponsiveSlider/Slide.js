import React from 'react'

const Slide = ({image_url, caption, show}) => {
  return (
    <div className={`slide ${show ? "show" : ""}`}>
        <img src={image_url} />
        <span>{caption}</span>
    </div>
  )
}

export default Slide
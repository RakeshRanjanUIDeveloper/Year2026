import React from 'react'

const CarouselImage = ({image_url, caption, active}) => {
  return (
    <React.Fragment>
        <div className={`slide ${active ? 'active' : ""}`}>
            <img src={image_url} alt={caption} />
            <span>{caption}</span>
        </div>
    </React.Fragment>
  )
}

export default CarouselImage
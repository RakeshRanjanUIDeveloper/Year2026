import React from 'react'
import images from './data'
import CarouselChild from './CarouselChild'
const CarouselParent = () => {
  return (
    <React.Fragment>
        <CarouselChild images={images} />
    </React.Fragment>
  )
}

export default CarouselParent
import React from 'react'
import images from './data';
import Slider from './Slider';
const ResponsiveSlider = () => {
  return (
    <React.Fragment>
        <Slider images={images} />
    </React.Fragment>
  )
}

export default ResponsiveSlider
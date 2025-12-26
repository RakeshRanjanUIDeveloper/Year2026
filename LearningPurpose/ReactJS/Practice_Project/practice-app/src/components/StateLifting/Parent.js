import React, { useState } from 'react'
import Slider from './Slider'
import Display from './Display';
const Parent = () => {
    const [value, setValue] = useState(50);

  return (
    <React.Fragment>
            <div>Parent</div>
            <Slider value={value} onValueChange={setValue} />
            <Display value={value} />
    </React.Fragment>
  )
}

export default Parent
import React, { useState } from 'react'

const ProgressBar = () => {
    const [width, setWidth] = useState(0);

    const increaseWidth = () => {
      //min() - “give me the smaller of these two”
        setWidth((prevWidth) => Math.min(prevWidth + 10, 100));
    }

    const decreaseWidth = () => {
      //max() - “give me the larger of these two”
        setWidth(prevWidth => Math.max(prevWidth - 10, 0));
    }

    const getColor = () => {
      if(width>=80) return 'green';
      if(width<40) return 'red';
      return 'orange';
    }
  return (
    <div>
        <div className="progress-bar">
            <div className="progress-bar-fill" style={{width:`${width}%`, backgroundColor: getColor()}}>{width}%</div>
        </div>
        <button onClick={increaseWidth}>+10%</button>
        <button onClick={decreaseWidth}>-10%</button>
    </div>
  )
}

export default ProgressBar
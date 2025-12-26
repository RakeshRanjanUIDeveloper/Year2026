import React from 'react'
import ProgressBar from './ProgressBar';
const ProgressMain = () => {
    const bars = [1, 5,10,20,30,50,70];
  return (
    <React.Fragment>
    <h2>ProgressBar</h2>
    {
      bars.map((value) => (
        <ProgressBar key={value} progress={value} />
      ))
    }
    </React.Fragment>

  )
}

export default ProgressMain
import React from 'react'

const Slider = ({value, onValueChange}) => {
    const handleChange = (e) =>{
        onValueChange(e.target.value)
    }
  return (
    <React.Fragment>
        <div>Slider</div>
        <label>Slider value</label>
        <input type='range' min="0" max="100" value={value} onChange={handleChange} />
    </React.Fragment>
  )
}

export default Slider
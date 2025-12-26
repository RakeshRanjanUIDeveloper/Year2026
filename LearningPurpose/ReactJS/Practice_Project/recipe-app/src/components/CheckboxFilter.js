import React, {useState } from 'react'
export const CheckboxFilter = ({onServings}) => {
    const [selectServings, setSelectServings] = useState([]);
    const handleServings = (e) =>{
        const selectedServings = e.target.checked;
        setSelectServings(selectedServings)
        onServings(selectedServings)
    }
  return (
    <React.Fragment>
        <fieldset>
            <legend>Filters</legend>
            <input type='checkbox' onChange={handleServings} />
            <label>Include Servings More than 5</label>
            <input type='checkbox' />
            <label>Fast Delivery Only</label>
        </fieldset>
    </React.Fragment>
  )
}

export default CheckboxFilter
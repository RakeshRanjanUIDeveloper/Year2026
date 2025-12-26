import React from 'react'

const Dropdown = ({items, onSelect, defaultSelectedItem}) => {
  return (
    <React.Fragment>
        <select onChange={(e) => onSelect(e.target.value)} defaultValue={defaultSelectedItem}>
            <option value="">Select an Item</option>
            {
                items.map((item) => (
                    <option key={item} value={item}>{item}</option>
                ))
            }
        </select>
    </React.Fragment>
  )
}

export default Dropdown
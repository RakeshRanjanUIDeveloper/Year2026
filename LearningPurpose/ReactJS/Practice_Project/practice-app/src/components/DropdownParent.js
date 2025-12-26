import React, { useState } from 'react'
import Dropdown from './Dropdown'

const DropdownParent = () => {
    const [selectedItem, setSelectedItem] = useState("React");
    const handleSelect = (item) => {
        setSelectedItem(item)
    }
  return (
    <React.Fragment>
        <h1>Selected Subject is : {selectedItem}</h1>
        <Dropdown items={["React", "JavaScript", "Angular","Vue", "Svelte", "Ember"]} defaultSelectedItem="React" onSelect={handleSelect} />
    </React.Fragment>
  )
}

export default DropdownParent
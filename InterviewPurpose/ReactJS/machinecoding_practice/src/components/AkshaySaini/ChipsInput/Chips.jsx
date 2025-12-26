import React, { useState } from 'react'

const Chips = () => {
    const [chips, setChips] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const handleChipsInput = (e) =>{
       setInputValue(e.target.value)
    }
    const handleKeyPress = (e) =>{
        if(e.key === "Enter" && inputValue.trim() !== ""){
            const newChip = {

            }
        }
        setInputValue("");

    }
  return (
    <React.Fragment>
        <div className='chip-input'>
            <input type='text' placeholder='type your chips here...' value={inputValue} onChange={handleChipsInput} onKeyDown={handleKeyPress} />
        </div>
        <div className='chip-output'>
            {
                chips
            }
        </div>
    </React.Fragment>
  )
}

export default Chips
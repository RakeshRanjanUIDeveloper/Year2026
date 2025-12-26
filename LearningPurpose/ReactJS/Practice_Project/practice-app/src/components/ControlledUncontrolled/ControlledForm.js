import React, { useState } from 'react'

const ControlledForm = () => {
    const [inputValue, setInputValue] = useState("");

    const submitHandler = (e) =>{
      e.preventDefault();
        alert(`Submitted value: ${inputValue}`);

    }
    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

  return (
    <form onSubmit={submitHandler}>
        <label>
        <input type='text' placeholder='type here...' value={inputValue} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
    </form>
  )
}

export default ControlledForm
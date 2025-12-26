import React, { useRef } from 'react'

const UnControlledForm = () => {
    const inputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        alert(`${inputRef.current.value}`);
    }
  return (
    <React.Fragment>
        <form onSubmit={submitHandler}>
            <label>Name : 
                <input type='text' ref={inputRef} />
             </label>
             <button type='submit'>Submit</button>
        </form>
    </React.Fragment>
  )
}

export default UnControlledForm
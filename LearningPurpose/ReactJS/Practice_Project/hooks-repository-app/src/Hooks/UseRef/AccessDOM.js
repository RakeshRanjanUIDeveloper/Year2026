import React, { useRef } from 'react'

const AccessDOM = () => {
    const inputRef = useRef(null);
    const handleFocus  = () => {
        inputRef.current.focus()
    }
  return (
    <React.Fragment>
            <input type='text' ref={inputRef} placeholder="Click button to focus" />
            <button onClick={handleFocus}>Focus Input</button>
    </React.Fragment>
  )
}

export default AccessDOM
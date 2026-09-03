import React, { useRef } from 'react'

const FocusInput = () => {
  const inputRef = useRef()

  const handleFocus = () =>{
    inputRef.current.focus()
  }
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <input
        type="text"
        placeholder="Type here"
        style={{ padding: '8px', fontSize: '16px', marginRight: '10px' }}
        ref={inputRef}
      /> 
      <button style={{ padding: '8px 12px' }} onClick={handleFocus}>
        Focus Input
      </button>
    </div>
  )
}

export default FocusInput
import React from 'react'
import useTheme from './useTheme'

const ChildComponent = () => {
   const {isDarkMode, toggleTheme} =useTheme();
  return (
    <div>
        The current theme is {isDarkMode ? 'Dark' : 'Light'}
        <button onClick={toggleTheme}>Change Theme</button>
    </div>
  )
}

export default ChildComponent
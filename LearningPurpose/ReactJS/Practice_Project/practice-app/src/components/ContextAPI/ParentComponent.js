import React, { useState } from 'react'
import ThemeContext from './ThemeContext';

const ParentComponent = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleTheme = () =>{
        setIsDarkMode((prev) => !prev)
    }
  return (
    <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
        <div>{children}</div>
    </ThemeContext.Provider>    

  )
}

export default ParentComponent
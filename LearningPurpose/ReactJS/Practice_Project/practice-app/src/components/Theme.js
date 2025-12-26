import React, { useState } from 'react'

const Theme = () => {
    const [settings, setSettings] = useState({theme:'dark', notification:"false"})
    const toggleTheme = () =>{
        setSettings((prevSettings) => (
            {
                theme:prevSettings.theme === 'dark' ? 'light' : 'dark'
            }
        ))
    }
  return (
    <div>
        <p>{settings.theme} - {settings.notification}</p>
        <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default Theme
import React, { useState } from 'react'

const Theme2 = () => {
    const [settings, setSettings] = useState({theme:'light', notification:true})
    const [settings2, setSettings2] = useState({theme2:'light', notification2:true})
    const toggleTheme = () => {
        setSettings ({
            theme: settings.theme === 'light' ? 'dark' : 'light' 
        })
        console.log(settings)
    }

    const toggleTheme2 = () => {
        setSettings2((prevSettings) => ({
            ...prevSettings,
            theme2: settings2.theme2 === 'light' ? 'dark' : 'light'
        }))
    }
  return (
    <div>
        {JSON.stringify(settings)}
        <button onClick={toggleTheme}>Change</button>


        {JSON.stringify(settings2)}
        <button onClick={toggleTheme2}>Change</button>
    </div>
  )
}

export default Theme2
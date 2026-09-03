

import React, {useState} from 'react'

function useToggle(initialValue = false){
    const [value, setValue] = useState(initialValue);

    const toggleValue = () => {
        setValue(prevValue => !prevValue);
    };
    return [value, toggleValue];
}

const onOff = () => {
    const [isOn, toggleIsOn] = useToggle(false);
  return (
    <div>
        <button onClick={toggleIsOn}>{isOn ? "ON" : "OFF"}</button>
    </div>
  )
}

export default onOff
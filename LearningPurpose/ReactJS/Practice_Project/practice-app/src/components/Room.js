import { useState } from "react";
import LightSwitch from "./LightSwitch";

const Room = () =>{
    const [light, setLight] = useState(false)
    const toggleLight = () =>{
        setLight((prevState) => !prevState)
    }
    return(
        <div>
            <h1>Your Room's Light is : {light ? 'ON' : 'OFF'} </h1>
            <LightSwitch toggleLight={toggleLight} />
        </div>
    )
}
export default Room;
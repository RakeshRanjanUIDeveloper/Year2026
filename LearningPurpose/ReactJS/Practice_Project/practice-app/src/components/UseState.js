import { useState } from "react";

const UseState = () =>{
    const [count, setCount] = useState(0);
    const [settings, setSettings] = useState({theme:'dark', notification:true})

    const handleSettings = () =>{
        setSettings({
            theme : 'white',
            notification: false
        })
    }
    return(
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count+1)}>Click</button>

            <p>{JSON.stringify(settings)}</p>
            <button onClick={handleSettings}>Change Theme</button>

            
        </div>
    )
}

export default UseState;
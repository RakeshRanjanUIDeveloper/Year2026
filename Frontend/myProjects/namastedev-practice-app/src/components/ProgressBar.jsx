import { useState } from 'react'
import '../styles/ProgressBar.css'
const Progressbar = () =>{
    const [width, setWidth] = useState(30);

    const handleDecrement = () =>{
        setWidth((prev) => Math.max(0, prev-10));
    }
    const handleIncrement = () =>{
        setWidth((prev) => Math.min(100, prev+10))
    }
    return (
        <div>
            <h2>Progress Bar</h2>
            <div className="progressbar-container">
                <div className="progressbar-box">
                    <div className="progressbar" style={{ width: `${width}%`, backgroundColor: width<40 ? 'red' : width<80 ?'orange' :'green' }}>
                        <span>{width}%</span>
                    </div>
                </div>
                <div className="progressbar-controller">
                    <span onClick={handleDecrement}>-10%</span>
                    <span onClick={handleIncrement}>+10%</span>
                </div>
            </div>
        </div>
    )
}

export default Progressbar
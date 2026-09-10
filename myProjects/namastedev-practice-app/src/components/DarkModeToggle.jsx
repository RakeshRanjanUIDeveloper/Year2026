import { useState } from 'react';
import '../styles/DarkModeToggle.css'

const DarkModeToggle = () => {
    const [active, setActive] = useState(false)
    const handleToggle = () =>{
        setActive((prev) => !prev)
    }
  return (
    <div className={`container ${active ? "light-mode" : "dark-mode"}`}>
      <h1>Dark Mode Toggle</h1>
      <div className="toggle-container">
        <label className="switch" >
            <input type="checkbox" onClick={handleToggle} />
            <span className="slider round" ></span>
        </label>
        <span className="mode-text"></span>
      </div>
    </div>
  );
};

export default DarkModeToggle

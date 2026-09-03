import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function TogglePassword() {
    const [enteredValue, setEnteredValue] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const handleTogglePassword = () => {
        setIsVisible(prev => !prev);
    };

    return (
        <div className="container">
            <h1 className="title">Toggle Password</h1>
            <div className="password-wrapper">
                <input
                    type={isVisible ? "text" : "password"}
                    placeholder="Enter password"
                    className="password-input"
                    data-testid="password-input"
                    value={enteredValue}
                    onChange={(e) => setEnteredValue(e.target.value)}
                />
                <span
                    className="icon"
                    data-testid="toggle-icon"
                    onClick={handleTogglePassword}
                >
                    {isVisible ? <Eye size={18} /> : <EyeOff size={18} />}
                </span>
            </div>
            <span className="visibility-label">
                Password {isVisible ? 'Visible' : 'Hidden'}
            </span>
        </div>
    );
}

export default TogglePassword;
import React, { useState } from "react";
export function checkPasswordStrength(password) {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);
    const hasLength = password.length >= 8;

    const criteria = [
        hasLength,
        hasUpperCase,
        hasLowerCase,
        hasDigit,
        hasSpecial,
    ];

    let count = 0;

    for (let i = 0; i < criteria.length; i++) {
        if (criteria[i]) {
            count++;
        }
    }

    if (count === 0) return "Weak Password";
    if (count === 1) return "Level 1";
    if (count === 2 || count === 3) return "Level 2";
    if (count >= 4) return "Level 3";
}

const PasswordStrength = () => {
    const [password, setPassword] = useState("");
    const [result, setResult] = useState("");

    const handleStrength = () => {
        const strength = checkPasswordStrength(password);
        setResult(strength);
    };

    return (
        <div>
            <h2>Password Strength Checker</h2>

            <div>
                <input
                    type="text"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleStrength}>Check Strength</button>
            </div>

            <p>Result: {result}</p>
        </div>
    );
};

export default PasswordStrength;

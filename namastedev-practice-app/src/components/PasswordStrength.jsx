import { useState } from "react";

const PasswordStrength = () =>{
    const [enteredPassword, setEnteredPassword] = useState("");
    const [result, setResult] = useState("");
    const handlePasswordStrength = () =>{
        const password = enteredPassword;
        const hasMinimumLength = password.length >= 8;
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecialCharacter = /[^A-Za-z0-9]/.test(password);
        const criteriaCount = [hasMinimumLength, hasUppercase, hasLowercase, hasNumber, hasSpecialCharacter].filter(Boolean).length;
        if (criteriaCount === 5) {
            setResult("Level 3");
        } else if (criteriaCount >= 3) {
            setResult("Level 2");
        } else {
            setResult("Level 1");
        }
    }
    return (
        <div>
            <h2>Password Strength</h2>
            <div>
                <input type="password" placeholder="type your password" value={enteredPassword} onChange={(e) => setEnteredPassword(e.target.value)} />
                <button onClick={handlePasswordStrength}>Check Strength</button>
                <h5>{result}</h5>
            </div>
        </div>
    )
}
export default PasswordStrength;

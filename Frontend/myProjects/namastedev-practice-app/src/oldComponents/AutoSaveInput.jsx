import React, { useEffect, useState } from 'react'

const AutoSaveInput = () => {
    const [enteredValue, setEnteredValue] = useState(() => {
        return localStorage.getItem("autosave-text") || "";
    });

    useEffect(() => {
        localStorage.setItem("autosave-text", enteredValue)
    }, [enteredValue]);

    const clearText = () => {
        setEnteredValue("");
        localStorage.removeItem("autosave-text")
    }
    return (
        <div>
            <h1>Auto Save Input</h1>
            <label>Name:
                <input type='text' data-testid="input-field" value={enteredValue} onChange={(e) => setEnteredValue(e.target.value)} />
                <button data-testid="clear-btn" onClick={clearText}>Clear</button>
            </label>
        </div>
    )
}

export default AutoSaveInput
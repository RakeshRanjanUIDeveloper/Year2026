import React, { useState } from "react";

const AcronymGenerator = () => {
    const [inputValue, setInputValue] = useState("");
    const [result, setResult] = useState("");

    const generateAcronym = () => {
        if (!inputValue.trim()) {
            setResult("");
            return;
        }

        const acronym = inputValue
            .trim()
            .split(/\s+/)
            .map(word => word[0].toUpperCase())
            .join("");

        setResult(acronym);
    };

    return (
        <div>
            <h2>Acronym Generator</h2>

            <input
                data-testid="input"
                type="text"
                placeholder="Enter a Phrase..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />

            <button
                data-testid="generate-button"
                onClick={generateAcronym}
            >
                Generate
            </button>

            <p data-testid="result">
                Result : {result}
            </p>
        </div>
    );
};

export default AcronymGenerator;

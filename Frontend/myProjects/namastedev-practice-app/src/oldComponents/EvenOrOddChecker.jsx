import React, { useState } from "react";

const EvenOrOddChecker = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCheck = () => {
    const trimmedValue = enteredValue.trim();
    setResult("");
    setLoading(true);
    setTimeout(() => {
      const number = Number(trimmedValue);
      if (trimmedValue === "" || isNaN(number)) {
        setResult("Please enter a valid number.");
      } else if (number % 2 === 0) {
        setResult(`The number ${number} is even.`);
      } else {
        setResult(`The number ${number} is odd.`);
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="even-odd-container">
      <h1 className="title">Even or Odd Checker</h1>

      <input
        data-testid="number-input"
        className="number-input"
        type="text"
        placeholder="Enter a number"
        value={enteredValue}
        onChange={(e) => setEnteredValue(e.target.value)}
      />

      <button
        data-testid="check-button"
        className="check-button"
        onClick={handleCheck}
      >
        check
      </button>

      <div className="result-area">
        {loading && (
          <div data-testid="loading">Checking...</div>
        )}

        {!loading && result && (
          <div data-testid="result">{result}</div>
        )}
      </div>
    </div>
  );
};

export default EvenOrOddChecker;

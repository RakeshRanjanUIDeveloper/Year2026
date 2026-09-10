import React, { useState } from "react";

const AgeCalculator = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleAgeCalculation = () => {
    setError("");
    setResult("");

    // ❌ Empty input
    if (!selectedDate) {
      setError("Please select a date");
      return;
    }

    const today = new Date();
    const birthDate = new Date(selectedDate);

    // ❌ Future date
    if (birthDate > today) {
      setError("Birthdate cannot be in the future");
      return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust days
    if (days < 0) {
      months--;
      const lastMonthDays = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      ).getDate();
      days += lastMonthDays;
    }

    // Adjust months
    if (months < 0) {
      years--;
      months += 12;
    }

    setResult(`${years} years, ${months} months, ${days} days`);
  };

  return (
    <div className="container">
      <h2 className="title">Age Calculator</h2>

      <label
        htmlFor="birthdate"
        className="label"
        data-testid="label-birthdate"
      >
        Enter/Select a birthdate:
      </label>

      <input
        id="birthdate"
        type="date"
        placeholder="dd-mm-yyyy"
        className="input-date"
        data-testid="input-birthdate"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />

      <button
        className="btn-calc"
        data-testid="btn-calculate"
        onClick={handleAgeCalculation}
      >
        Calculate Age
      </button>

      <div>
        {error && (
          <p className="error-msg" data-testid="error-msg">
            {error}
          </p>
        )}

        {result && (
          <p className="age-result" data-testid="age-result">
            {result}
          </p>
        )}
      </div>
    </div>
  );
};

export default AgeCalculator;

import React, { useState } from 'react'

const LeapYear = () => {
    const [enteredYear, setEnteredYear] = useState("");
    const [showMessage, setShowMessage] = useState(false)

    const handleLeapYear = () => {
        const year = Number(enteredYear);

        if (!Number.isInteger(year) || year <= 0) {
            setShowMessage("Please enter a valid year");
            return;
        }
        const isLeap =
            year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);

        if (isLeap) {
            setShowMessage(`${year} is a Leap Year`);
        } else {
            setShowMessage(`${year} is not a Leap Year`);
        }
    }
    return (
        <div className="container">
            <h1>Leap Year Checker</h1>
            <label data-testid="label-date">Enter a year:</label>
            <input
                type="text"
                data-testid="year-input"
                value={enteredYear}
                onChange={(e) => setEnteredYear(e.target.value)}
            />

            <button data-testid="check-btn" onClick={handleLeapYear}>
                Check
            </button>
            <p>{showMessage}</p>
        </div>
    )
}

export default LeapYear
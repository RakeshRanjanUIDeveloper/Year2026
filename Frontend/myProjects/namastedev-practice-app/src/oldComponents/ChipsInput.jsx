import React, { useState } from "react";

const ChipsInput = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const [outputs, setOutputs] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && enteredValue.trim() !== "") {
      setOutputs((prev) => [
        ...prev,
        { id: Date.now(), label: enteredValue.trim() }
      ]);
      setEnteredValue("");
    }
  };

  const handleDelete = (chipId) => {
    setOutputs((prev) => prev.filter((chip) => chip.id !== chipId));
  };

  return (
    <div className="main-container">
      <h2>Chips Input</h2>

      <input
        type="text"
        placeholder="Type a chip and press Enter"
        className="input"
        value={enteredValue}
        onChange={(e) => setEnteredValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <div className="chips-output">
        {outputs.map((chip) => (
          <div className="output" key={chip.id}>
            {chip.label}
            <span
              className="cancel"
              onClick={() => handleDelete(chip.id)}
            >
              X
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChipsInput;

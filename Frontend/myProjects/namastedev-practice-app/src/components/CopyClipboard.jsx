import { useState } from "react";

function CopyClipboard() {
  const[enteredValue, setEnteredValue] = useState("");
  const[message, setMessage] = useState("");
  
  async function handleCopy(enteredValue) {
    const actualText = enteredValue.trim();
    if(!actualText){
         setMessage("Please enter a value");
        return;
    }
    try {
        await navigator.clipboard.writeText(actualText);
        setMessage(`${actualText} Value copied successfully!`);
    } catch (error) {
        setMessage("Unable to copy. Please try again.");
    }
  }

const handleChange = (e) =>{
    setEnteredValue(e.target.value)
    setMessage("")
}
  return (
    <div className="copyToClipboard">
      <h1>Copy to Clipboard</h1>
      <p>Click the button to copy the text</p>

      <div className="copyToClipboard-container">
        <div className="form">
          <label htmlFor="text">
            Enter your text:
            <input
              type="text"
              id="text"
              data-testid="input-field"
              placeholder="Type Something"
              value={enteredValue}
              onChange={handleChange}
            />
          </label>
          <button
            onClick={() => {
              handleCopy(enteredValue);
            }}
            className="btn"
            data-testid="copy-button"
          >
            Copy
          </button>
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
}

export default CopyClipboard;

import { useEffect, useState } from "react";

const CharacterCount = () => {
  const [enteredLength, setEnteredLength] = useState(50);
  const [enteredText, setEnteredText] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    const currentLength = enteredText.length;

    if (currentLength > enteredLength) {
      setResult(
        `Limit exceeded by ${currentLength - enteredLength} characters`
      );
    } else if (currentLength >= enteredLength * 0.9) {
      setResult("You are close to the limit!");
    } else {
      setResult(`${currentLength}/${enteredLength}`);
    }
  }, [enteredText, enteredLength]);

  return (
    <div>
      <h2>Character Count</h2>
      <p>Track your input length with live character warnings.</p>

      <div>
        <label>
          Max Length
          <input
            type="number"
            min="0"
            max="100"
            value={enteredLength}
            onChange={(e) => setEnteredLength(Number(e.target.value))}
          />
        </label>
      </div>

      <textarea
        placeholder="start typing..."
        value={enteredText}
        onChange={(e) => setEnteredText(e.target.value)}
      />

      <div className="live-result">{result}</div>
    </div>
  );
};

export default CharacterCount;

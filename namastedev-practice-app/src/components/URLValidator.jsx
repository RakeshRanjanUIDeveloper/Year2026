import { useState } from "react";

const URLValidator = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(null);
  const urlRegex =
    /^https?:\/\/(?:localhost(?::\d+)?|(?:[a-zA-Z0-9-]+\.)+[a-zA-Z0-9-]+)$/;

  const handleChange = (e) => {
    const input = e.target.value;
    setEnteredValue(input);
    setIsValid(urlRegex.test(input));
  };
  return (
    <div>
      <h1>URL Validator</h1>
      <div>
        <input
          type="text"
          placeholder="enter url...."
          onChange={handleChange}
          value={enteredValue}
        />
        <p>
          {isValid === null
            ? "Enter a URL"
            : isValid
              ? "Valid URL"
              : "Invalid URL"}
        </p>
      </div>
    </div>
  );
};
export default URLValidator;

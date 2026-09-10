import React, { useState } from "react";
import { colorNameToHex } from "../data/colorData";
const ColorExplorer = () => {
  const [enteredColor, setEnteredColor] = useState("");
  const [color, setColor] = useState({
  name: "",
  hex: "",
 error: ""})
  const handleColorSearch = () => {
    const hex = colorNameToHex(enteredColor.trim().toLowerCase());
    if (hex) {
      setColor({ name: enteredColor, hex:hex, error:"" })
    } else {
      setColor({
      name: "",
      hex: "",
      error: "Sorry, I couldn't recognize that color."
    });
    }
  }
  return (
    <div className="container">
      <h1>Color Explorer</h1>
      <div className="input-section">
        <input
          type="text"
          data-testid="color-input"
          placeholder="Type a color name e.g. lavender"
          value={enteredColor}
          onChange={(e) => setEnteredColor(e.target.value)}
        />
        <button data-testid="search-button" onClick={handleColorSearch}>
          🔍
        </button>
      </div>
      <div className="color-box" data-testid="color-box">
        <div
          className="preview"
          role="presentation"
          data-testid="color-preview"
          style={{ backgroundColor: color.hex }}
        ></div>
        <p data-testid="color-name">
          <strong>Name: {color.name}</strong>
        </p>
        <p data-testid="color-hex">
          <strong>Hex:{color.hex}</strong>
        </p>
        {color.error && <p>{color.error}</p>}
      </div>

    </div>
  );
};

export default ColorExplorer;

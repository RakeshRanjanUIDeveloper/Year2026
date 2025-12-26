import React, { useState } from "react";

const ColorPicker = () => {
  const colors = [
    { name: "Red", hex: "#EE4B2B" },
    { name: "Blue", hex: "#89CFF0" },
    { name: "Green", hex: "#7FFFD4" },
  ];

  const [selectedColor, setSelectedColor] = useState("");

  const handleColorClick = (hex) => {
    setSelectedColor(hex);
  };

  return (
    <div>
      <h2>Color Picker</h2>
      <div>
        {colors.map((color) => (
          <div key={color.hex} style={{ marginBottom: "1rem" }}>
            <button
              onClick={() => handleColorClick(color.hex)}
              style={{
                backgroundColor: color.hex,
                border: "none",
                padding: "10px 20px",
                color: "#fff",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              {color.name}
            </button>
            {/* Show the HEX code below the button if it's selected */}
            {selectedColor === color.hex && (
              <p style={{ marginTop: "0.5rem" }}>{color.hex}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;

import React, { useState } from 'react';

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState('');

  const colors = {
    red: '#EE4B2B',
    blue: '#89CFF0',
    green: '#7FFFD4'
  };

  const btnStyle = {
    border: '2px solid black',
    width: '50px',
    padding: '10px',
    margin: '10px',
    textAlign: 'center',
    cursor: 'pointer'
  };

  const handleColorValues = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <h2>ColorPicker List</h2>
      <div>
        {Object.entries(colors).map(([colorName, hex]) => (
          <div key={colorName}>
            <div
              style={btnStyle}
              onClick={() => handleColorValues(colorName)}
            >
              {colorName}
            </div>
            {selectedColor === colorName && <p>{hex.trim()}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;

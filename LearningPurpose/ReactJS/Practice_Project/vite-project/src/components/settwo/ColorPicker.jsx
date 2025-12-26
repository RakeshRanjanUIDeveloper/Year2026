import React, { useState } from 'react'

const ColorPicker = () => {
    const colors = [
        { name: "Red", hex: "#EE4B2B" },
        { name: "Blue", hex: "#89CFF0" },
        { name: "Green", hex: "#7FFFD4" },
      ];

    const [selectedColor, setSelectedColor] = useState(null)

  return (
    <React.Fragment>
        <div>
            {
                colors.map((c) => (
                    <div>
                    <button onClick={() => setSelectedColor(c.hex)}>{c.name}</button>
                    {selectedColor === c.hex && <p>{c.hex}</p>}
                    </div>
                ))
            }
           
        </div>

    </React.Fragment>
  )
}

export default ColorPicker
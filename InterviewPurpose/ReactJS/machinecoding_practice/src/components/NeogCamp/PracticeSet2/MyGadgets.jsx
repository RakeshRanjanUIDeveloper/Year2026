import React, { useState } from 'react'
const MyGadgets = ({myGadgets}) => {
    const [highlight, setHighlight] = useState(false);
  return (
    <div>
        <h2>MyGadgets List</h2>
        <ol>
        {
            myGadgets.map((g) => <li style={{background: highlight && g.price>50000 ? 'lightGreen' : ''}}>{g.name} - {g.description} - {g.price}</li>)
        }
        </ol>
        <button onClick={() => setHighlight(true)}>Highlight Expensive Gadget</button>
    </div>
  )
}

export default MyGadgets
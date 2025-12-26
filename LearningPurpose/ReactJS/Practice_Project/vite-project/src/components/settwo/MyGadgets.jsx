import React, { useState } from 'react'

const MyGadgets = ({myGadgetsProducts}) => { 
    const [showStyle, setShowStyle] = useState(false);
    const priceStyle ={
        backgroundColor : 'lightgreen'
    }
  return (
    <React.Fragment>
        <ul>
            {
                myGadgetsProducts.map((g) => (
                    <li key={g.id} style={showStyle && g.price>50000 ? priceStyle : {}}>{g.name} - {g.description} - {g.price}</li>
                ))
            }
        </ul>
        <button onClick={() => setShowStyle(true)}>Highlight Expensive Gadget</button>
    </React.Fragment>
  )
}

export default MyGadgets
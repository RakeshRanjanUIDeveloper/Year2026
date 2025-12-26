import React from 'react'

const Gadgets = ({gadgetProducts}) => {
    console.log(gadgetProducts)
    const gadgetStyle = {
        border: '1px solid red',
        fontWeight: 'bold',
        marginTop:'5px'
      };
      
  return (
    <React.Fragment>
        <ul>
           {
            gadgetProducts.map((g) => (
                <li key={g.name} style={g.price>5000 ? gadgetStyle : {}}>{g.name} - {g.description} - {g.price}</li>
            ))
           }
        </ul>
    </React.Fragment>
  )
}

export default Gadgets
import React from 'react'

const Gadgets = ({gadgets}) => {
  return (
    <div>
        <h2>Gadgets List</h2>
        <ol>
            {
                gadgets.map((gadget) => <li style={{border: gadget.price>50000 ? '2px solid red' : ''}}>{gadget.name} - {gadget.description} - {gadget.price}</li>)
            }
        </ol>
    </div>
  )
}

export default Gadgets
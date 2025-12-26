import React from 'react'

const Gadgets = ({products}) => {
    const borderStyle ={
        border:'3px solid green'
    }
  return (
    <React.Fragment>
        <ol>
        {
            products.map(({name, description,price, id})=> <li key={id} style={price>50000 ? borderStyle: {}}>{name} - {description} - {price}</li>)
        }
        </ol>
    </React.Fragment>
  )
}

export default Gadgets
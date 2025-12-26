import React from 'react'

const Phones = ({products}) => {
  return (
    <React.Fragment>
        <ul>
            {
                products.filter((product) => product.name === 'mobile').map(({ id, name, description, price }) => (<li key={id}>{name} - {description} - {price}</li>))
            }
        </ul>
    </React.Fragment>
  )
}

export default Phones
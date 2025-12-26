import React from 'react'

const Bouquet = ({bouquet}) => {
    const bouquetWithRose = bouquet.filter((b)=> b.flowers.includes('rose'));
  return (
    <React.Fragment>
        {
            bouquetWithRose.map((b) => (
                <p>Price of bouquet with roses : <b>{b.price}</b></p>
            ))
        }
    </React.Fragment>
  )
}

export default Bouquet
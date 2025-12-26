import React from 'react'

const Phones = ({electronicsProducts}) => {

    const phoneProducts = electronicsProducts.filter((p) => p.name==='mobile');

  return (
    <React.Fragment>
        <h2>Display only Phones</h2>
        <ul>
            {
                phoneProducts.map((p) => (
                    <li key={p.description}>{p.description}</li>
                ))
            }
        </ul>
    </React.Fragment>
  )
}

export default Phones
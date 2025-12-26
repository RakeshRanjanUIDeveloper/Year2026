import React from 'react'

const Bouquet = ({bouquet}) => {
  return (
    <React.Fragment>
       {
         bouquet.filter((bouque) => bouque.flowers.includes('rose')).map((item)=> <p key={item.id}>Price of bouquet with roses: {item.price}</p>)
       }
    </React.Fragment>
  )
}

export default Bouquet
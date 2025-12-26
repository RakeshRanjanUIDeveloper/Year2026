import React from 'react'

const Gadgets = ({products}) => {
    const productStyle = {
        border: "2px solid",
        borderColor: 'orangered',
        padding: '10px',
        marginBottom: '10px',
      };

// const productDetails=products;


  return (
    <div>
    <h2>List of Gadgets</h2>
    <ol>{products.map(({name,description,price})=>
        <li style={ price>50000 ? productStyle : {}} >Name={name}  Description={description}  price={price}</li>
     
    )}
</ol>
    
    
    </div>
  )
}

export default Gadgets
import React, { useState } from 'react'

const Vegetables = ({vegetables}) => {
    const [fresh, setFresh] = useState(false)
    const handleVegetables = () =>{
        setFresh(true)
    }
    const vegStyle ={
        color:'green'
    }
  return (
    <React.Fragment>
        <ul>
            {
                vegetables.map((vegetable) => <li key={vegetable.id} style={fresh && vegetable.pickDate === '2023-03-30' ? vegStyle : {}}>{vegetable.name} - {vegetable.pickDate}</li>)
            }
        </ul>
        <button onClick={handleVegetables}>Highlight Fresh Vegetables</button>
    </React.Fragment>
  )
}

export default Vegetables
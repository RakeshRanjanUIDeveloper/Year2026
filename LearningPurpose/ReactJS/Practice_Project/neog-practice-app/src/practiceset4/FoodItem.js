import React, { useState } from 'react'

const FoodItem = ({itemList}) => {
    const [filter, setFilter] = useState("All");

    const handleFilter = (category) =>{
        setFilter(category)
    }
   
    const filteredItem = filter === 'All' ? itemList : itemList.filter((item) => item.category === filter);
  return (
    <React.Fragment>
            <button onClick={() => handleFilter("All")}>Show All</button>
            <button onClick={() => handleFilter("Fruit")}>Show Fruits</button>
            <button onClick={() => handleFilter("Vegetable")}>Show Vegetables</button>
        {
            filteredItem.map((item) => (
                <li key={item.id} style={{color:item.category === 'Fruit' ? 'Orange': 'green'}}>{item.name} - {item.category}</li>
            ))
        }
    </React.Fragment>
  )
}

export default FoodItem
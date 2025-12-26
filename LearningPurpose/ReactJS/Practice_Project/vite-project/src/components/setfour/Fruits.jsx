import React, { useState } from 'react'

const Fruits = () => {
    const itemList = [
        { id: 1, name: "Apple", category: "Fruit" },
        { id: 2, name: "Carrot", category: "Vegetable" },
        { id: 3, name: "Banana", category: "Fruit" },
        { id: 4, name: "Broccoli", category: "Vegetable" },
       ];
    
    const [filteredItems, setFilteredItems] = useState(itemList);
    const uniqueCategories = ["All", ...new Set(itemList.map(c => c.category))];
    const handleCategory = (cate) => {
        if(cate === 'All'){
            setFilteredItems(itemList)
        }else{
            setFilteredItems(itemList.filter((c) => c.category === cate))
        }
      
    }
  return (
    <React.Fragment>
        <div className='button-container'>
            {
                uniqueCategories.map((c, index) => (
                    <div key={index} className='button' onClick={() => handleCategory(c)}>{c}</div>
                ))
            }
        </div>
        <ul>
        {
            filteredItems.map((i) => (
                <li key={i.id}>{i.name}</li>
            ))
        }
        </ul>
    </React.Fragment>
  )
}

export default Fruits
import React, { useState } from 'react'

const Tab = ({characters}) => {
    const [activeTab, setActiveTab] = useState("")
    const handleHeroes = () =>{
        setActiveTab("heroes")
    }
    const handleVillains = () => {
        setActiveTab("villains")
    }
  return (
   <React.Fragment>
        <button onClick={handleHeroes}>Show Heroes</button>
        <button onClick={handleVillains}>Show Villains</button>
            {
              activeTab === "heroes" && (
                <ol>
                    {characters.heroes.map((hero) => (<li>{hero.name}- {hero.powers} - {hero.costume}</li>))}
                </ol>
              ) 
            }
       
            {
             activeTab === "villains" &&  (
                <ol>
                    {characters.villains.map((villain) => (<li>{villain.name}- {villain.powers} - {villain.costume}</li>))}
                </ol>
             )
            }
       
   </React.Fragment>
  )
}

export default Tab
import React, { useEffect, useState } from 'react'
import { fakeHabitFetch } from './fakeHabitFetch'

const Habbit = () => {
    const [allHabits, setAllHabits] = useState([]);
    const fetchHabbitData = async () =>{
        try{
            const response = await fakeHabitFetch('https://example.com/api/habits');
            setAllHabits(response.data.habits)
        }catch(error){
            console.log(error)
        }
    }
    useEffect(() => {
        fetchHabbitData();
    }, [])
  return (
   <React.Fragment>
        <h2>Habbit Tracker</h2>
        <div className='habits-container'>
            {
                allHabits.map((h) => (
                    <div className='habit'>
                    <h3>{h.title}</h3>
                    <p>{h.desc}</p>
                    <p><b>Days Followed</b> : {h.daysFollowed}</p>
                    <p><b>Days Skipped</b> : {h.daysSkipped}</p>
                </div>
                ))
            }
        </div>
   </React.Fragment>
  )
}

export default Habbit
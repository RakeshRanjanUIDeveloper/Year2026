import React, { useEffect, useState } from 'react'
import fakeHabitFetch from './fakeHabitFetch'

const Habits = () => {
  const[allHabits, setAllHabits] = useState([]);
    useEffect(() =>{
      const fetchHabitData = async () =>{
        try {
          const response = await fakeHabitFetch('https://example.com/api/habits');
          if(response.status === 200){
            setAllHabits(response.data.habits)
          }
        } catch (error) {
          console.log(error)
        }
      }
      fetchHabitData();

    }, [])
  return (
    <React.Fragment>
        <h2>Habbit Tracker</h2>
        <ul>
          {
            allHabits.map((habit) => (
              <React.Fragment>
                <li><b>{habit.title}</b></li>
                <p>{habit.desc}</p>
                <ul>
                    <li><b>Days Followed: </b>{habit.daysFollowed}</li>
                    <li><b>Days Skipped: </b>{habit.daysSkipped}</li>
                </ul>
              </React.Fragment>
            ))
          }
        </ul>
    </React.Fragment>
  )
}

export default Habits
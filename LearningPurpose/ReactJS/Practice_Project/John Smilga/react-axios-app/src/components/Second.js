import axios from 'axios'
import React, { useState } from 'react'

const Second = () => {
const url ='https://icanhazdadjoke.com/';
const [joke, setJoke] = useState("random dad joke")
const fetchDadJoke = async () =>{
    try {
        const {data} = await axios(url, {
            headers:{
                Accept : 'application/json'
            }
        });
        setJoke(data.joke);
    } catch (error) {
        console.log(error.response)
    }
}
  return (
    <section className='section text-center'>
        <button className='btn' onClick={fetchDadJoke} >Random Joke</button>
        <p className='dad-joke'>{joke}</p>
    </section>
  )
}

export default Second
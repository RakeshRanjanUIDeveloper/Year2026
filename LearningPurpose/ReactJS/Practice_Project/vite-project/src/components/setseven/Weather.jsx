import React, { useEffect, useState } from 'react'
import { fakeWeatherFetch } from './fakeWeatherFetch';

const Weather = () => {
    const [weatherData, setWeatherData] = useState({});
    const [isCelcius, setIsCelcius] = useState(true);

    const fetchWeatherData = async () =>{
        try {
            const response = await fakeWeatherFetch('https://example.com/api/weather');
            setWeatherData(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchWeatherData();
    }, [])

  const temperature = isCelcius ? Math.floor(5/9*(weatherData.temperature-32)) : weatherData.temperature

  const handleTemperature = () =>{
    setIsCelcius((prev) => !prev);
  }

  return (
    <React.Fragment>
        <h2>Weather</h2>
        <p><b>Temperature</b>{temperature} {isCelcius ? 'C' : 'F'}</p>
        <p><b>Humidity</b> : {weatherData.humidity}</p>
        <p><b>Wind Speed</b> : {weatherData.windSpeed}</p>
        <button onClick={handleTemperature}>Change to {isCelcius ? 'Farenheit' : 'Celcius'}</button>
    </React.Fragment>
  )
}

export default Weather
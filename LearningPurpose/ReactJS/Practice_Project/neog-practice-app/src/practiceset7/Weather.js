import React, { useEffect, useState } from 'react'
import fakeWeatherFetch from './fakeWeatherFetch'
const Weather = () => {
    const [weatherData, setWeatherData] = useState([]);
    const [isCelsius, setIsCelsius] = useState(true);
    const [temperature, setTemperature] = useState();
    useEffect(() =>{
        const fetchWeatherData = async () =>{
            try {
                const response = await fakeWeatherFetch('https://example.com/api/weather');
                if(response.status === 200){
                    setWeatherData(response.data)
                    setTemperature(response.data.temperature)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchWeatherData();
    }, [])

    const handleTemperature = () =>{
        if(isCelsius){
            setTemperature((prevTemp) =>(prevTemp * 9) / 5 + 32);
        }else{
            setTemperature((prevTemp) => ((prevTemp - 32) * 5) / 9);
        }
        setIsCelsius((prevvalue) => !prevvalue)
    }
  return (
    <React.Fragment>
        <h2>Weather</h2>
        
        {
            weatherData &&
            <div className='weather-data'>
                <p><b>Temperature</b> - {temperature} {isCelsius ? 'Celsius' : 'Fahrenheit'}</p>
                <p><b>Humidity</b> - {weatherData.humidity}%</p>
                <p><b>Wind Speed</b> - {weatherData.windSpeed}km/h</p>
                <button onClick={handleTemperature}>Switch to {isCelsius ? 'Fahrenheit' : 'Celsius'}</button>
            </div>
        }
    </React.Fragment>
  )
}

export default Weather
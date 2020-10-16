import React, {useState, useEffect} from 'react'
import axios from 'axios'
const api_key = process.env.REACT_APP_WEATHER_API_KEY
let location = ''

const WeatherView = (props) => {
    location = props.location
    const [weather, setWeather] = useState()

    useEffect(() => {
        axios
          .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${location}`)
          .then(response => {
              console.log('weather data obtained:', response.data.current)
              setWeather(response.data.current)})
        },[])
        if (weather){
            return (
                <div>
                <p>
                    <strong>temperature: </strong>
                    {weather.temperature} Celsius
                </p>
                <p>
                    <img src={weather.weather_icons[0]} alt={weather.weather_icons[0]}/>
                </p>
                <p>
                    <strong>wind: </strong>
                    {weather.wind_speed} mph {weather.wind_dir}
                </p>
            </div>

            )
        }
    else return(
        <>
        </>
       
    )

}

export default WeatherView
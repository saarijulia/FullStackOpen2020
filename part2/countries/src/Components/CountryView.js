import React from 'react'

import WeatherView from './WeatherView'

const CountryView = (props) => {
    const country = props.country
    const capital = country.capital

    /*setCountries(response.data.map(({ name, capital, population, languages, flag }) =>
          ({ name, capital, population, languages, flag }))) */
        return (<div>
            <h1>{country.name}</h1>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h2>Spoken Languages</h2>
            <ul>
                {country.languages.map(language =>
                    <li key={language.name}>{language.name}</li>
                )}
            </ul>
            <img alt={country.flag} src={country.flag} height="200" />

            <div>
                <h2>Weather in {capital}</h2>
                
                    <WeatherView location={capital}/>

            </div>

        </div>)

}

export default CountryView

/*
http://api.weatherstack.com/current
    ? access_key = YOUR_ACCESS_KEY
    & query = New York
    */
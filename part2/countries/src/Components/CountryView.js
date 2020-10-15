import React from 'react'

const CountryView = ({ country }) => {

    return (
        <div>
            <h1>{country.name}</h1>
            <p>capital: {country.capital}</p>
            <p>population: {country.population}</p>
            <h2>languages</h2>
            <ul>
                {country.languages.map(language=> 
                    <li key={language.name}>{language.name}</li>
                )}
            </ul>
            <img alt={country.flag} src={country.flag} width="400" height="400"/>

        </div>
    )
}

export default CountryView
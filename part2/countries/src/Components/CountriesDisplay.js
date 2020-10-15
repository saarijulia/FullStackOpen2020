import React from 'react'
import CountryView from './CountryView'


const CountriesDisplay = (props) => {
    const countries = props.countries

    if (countries.length > 10) {
        return (
            <div>
                <p>Too many matches, specify another filter</p>
            </div>
        )
    } else if (countries.length === 1) {
        return (
            <>
           <CountryView country={countries[0]}/>
           </>
        )
    }
    return (
        <div>
            {countries.map(country => <p key={country.name}> {country.name}</p>)}

        </div>
    )

}

export default CountriesDisplay
// {countries.filter(country=> country.name.toLowerCase().includes(searchText.toLowerCase())).map(country => <p key={country.name}> {country.name}</p>)}∑
/*
                {countries.map(country =>
                    <div key={country.name}>
                        <h1>{country.name}</h1>
                        <p>capital: {country.capital}</p>
                        <p>population: {country.population}</p>
                        <h2>languages</h2>
                        <ul>
                            {countries.map(country=>
                                country.languages.map(language=> <li key={language.name}>{language.name}</li>)
                        )}
                        </ul>
                        {countries.map(country => <img key={country.name} src={country.flag} width="400" height="400" alt={country.flag}/>)}
                    </div>)}
*/ 
import React, { useState, useEffect } from 'react'


const CountriesDisplay = (props) => {
const countries = props.countries

if (countries.length>10) {
    return (
        <div>
            <p>Too many matches, specify another filter</p>
        </div>
    )
}
return (
    <div>
        {countries.map(country => <p key={country.name}> {country.name}</p>)}
         
    </div>
)

}

export default CountriesDisplay
// {countries.filter(country=> country.name.toLowerCase().includes(searchText.toLowerCase())).map(country => <p key={country.name}> {country.name}</p>)}
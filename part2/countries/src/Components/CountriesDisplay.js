import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchText from './SearchText'

const CountriesDisplay = (props) => {
const countries = props.countries
const searchText = props.searchText

if (searchText !== '') {
    return (
        <div>
            {countries.filter(country=> country.name.toLowerCase().includes(searchText.toLowerCase())).map(country => <p key={country.name}> {country.name}</p>)}
        </div>
    )
}

return (
    <div>
        {countries.map(country => <p key={country.name}>{country.name}</p>)}

    </div>
)

}

export default CountriesDisplay
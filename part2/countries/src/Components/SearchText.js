import React from 'react'

const SearchText = (props) => {
const countries = props.countries
const setFilterCountries = props.setFilterCountries

    
    const textSearch = (event) => {
        setFilterCountries(countries.filter(country => country.name.toLowerCase().includes(event.target.value.toLowerCase())))
    }

    return (
        <>
        find countries: <input onChange={textSearch} />
        </>
    )
}

 
export default SearchText
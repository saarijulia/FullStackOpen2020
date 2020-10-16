import React, { useState, useEffect } from 'react'



const CountriesDisplay = (props) => {
    // the countries to be shown
    const countries = props.countries
    // state toggle to view a country 
    const setShowCountryView = props.setShowCountryView
    const setSelectedCountry = props.setSelectedCountry

    return (
        <div id="display">
                {countries.map(country => <p key={country.name}>
                    {country.name}
                    <button onClick={() => {
                        setSelectedCountry(country)
                        console.log(country);
                        setShowCountryView(true)
                    }}>
                        show
             </button>
                </p>)}
            </div>
    )
}

export default CountriesDisplay

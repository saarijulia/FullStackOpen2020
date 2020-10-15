import React, { useState, useEffect } from 'react';
import axios from 'axios'
import CountriesDisplay from './Components/CountriesDisplay';
import SearchText from './Components/SearchText'


const App = () => {


  const [countries, setCountries] = useState([])
  const [filterCountries, setFilterCountries] = useState(countries)

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('country data obtained:', response.data);
        setCountries(response.data.map(({ name, capital, population, languages, flag }) =>
          ({ name, capital, population, languages, flag })))
      })
  }, [])


  return (

    <div>
      <h1>
        countries
      </h1>
      <SearchText setFilterCountries={setFilterCountries} countries={countries} />
      <CountriesDisplay countries={filterCountries} />
    </div>

  )
}

export default App;

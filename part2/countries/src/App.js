import React, { useState, useEffect} from 'react';
import axios from 'axios'
import CountriesDisplay from './Components/CountriesDisplay';
import SearchText from './Components/SearchText'


const App = () => {
  const [searchText, setSearchText] = useState('')

  const [countries, setCountries] = useState([])
  const [filterCountries, setFilterCountries] = useState(countries)

  useEffect(() => {
    console.log('effect:');
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('country data obtained:');
        setCountries(response.data.map(({name, capital, population, languages, flag}) => 
        ({name, capital, population, languages, flag})))
      })
  }, [])

  
  

  return (
    
    <div>
      <h1>
        countries
      </h1>
      <SearchText setSearchText={setSearchText} setFilterCountries={setFilterCountries} countries={countries}/> 
      <CountriesDisplay countries={filterCountries}/>
    </div>

  )
}

export default App;

/*
props.setFilterList(props.persons.filter(function (person) {
  return person.name.toLowerCase().startsWith(event.target.value.toLowerCase())
}))

  {countries.map(country => <p key={country.name}>{country.name}</p>)}*/
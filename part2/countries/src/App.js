import React, { useState, useEffect } from 'react';
import axios from 'axios'
import CountriesDisplay from './Components/CountriesDisplay';
import SearchText from './Components/SearchText'
import CountryView from './Components/CountryView'
import Header from './Components/Header'


const App = () => {

  const [countries, setCountries] = useState([])
  const [filterCountries, setFilterCountries] = useState(countries)
  const [showCountryView, setShowCountryView] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('country data obtained:', response.data);
        setCountries(response.data.map(({ name, capital, population, languages, flag }) =>
          ({ name, capital, population, languages, flag })))
      })
  }, [])

  if (filterCountries.length>10) {
    return (
      <div>
      <Header text="countries"/>
      <SearchText setFilterCountries={setFilterCountries} 
        countries={countries} 
        setShowCountryView={setShowCountryView}
        showCountryView={showCountryView}/>
      <p>Too many results, filter search</p>
      </div>
      )
  }
  else if (filterCountries.length===1) {
    return (
      <div>
     <Header text="countries"/>
      <SearchText setFilterCountries={setFilterCountries} 
        countries={countries} 
        setShowCountryView={setShowCountryView}
        showCountryView={showCountryView}/>
      <CountryView country={filterCountries[0]}/>
      </div>
    )
  } else if (showCountryView){
    return (
      <div>
     <Header text="countries"/>
      <SearchText setFilterCountries={setFilterCountries} 
        countries={countries} 
        setShowCountryView={setShowCountryView}
        showCountryView={showCountryView}/>
      <CountryView country={selectedCountry}/>
      </div>
    )
  }
  return (
    <div>
      <Header text='countries'/>
      <SearchText setFilterCountries={setFilterCountries} 
        countries={countries} 
        setShowCountryView={setShowCountryView}
        showCountryView={showCountryView}/>
      <CountriesDisplay countries={filterCountries} showCountryView={showCountryView}
        setShowCountryView = {setShowCountryView} setSelectedCountry={setSelectedCountry}/>
    </div>

  )
}

export default App;

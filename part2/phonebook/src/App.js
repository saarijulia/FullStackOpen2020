import React, { useState, useEffect } from 'react'
import PersonsList from './Components/PersonsList'
import Form from './Components/Form'
import TextSearch from './Components/TextSearch'
import axios from 'axios'

const App = () => {

    

    const [persons, setPersons] = useState([])
    const [textSearch, setText] = useState('')
    const [filterList, setFilterList] = useState(persons)

    useEffect(() => {
        console.log('effect');
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                console.log('promise fulfilled');
                setPersons(response.data)
                console.log("get data",response);
            })
    }, [])
    console.log('render', persons.length, 'persons');

    if (textSearch !== '') {
        return (
            <div>
                <h2>
                    Phonebook
            </h2>
                <TextSearch textSearch={textSearch} setText={setText} setFilterList={setFilterList} persons={persons} />

                <h2>add a new</h2>
                <Form persons={persons} setPersons={setPersons} />
                <h2>Numbers</h2>
                <PersonsList persons={filterList} />
            </div>
        )
    }

    else return(
        <div>
            <h2>
                Phonebook
            </h2>
            <TextSearch textSearch={textSearch} setText={setText} setFilterList={setFilterList} persons={persons} />

            <h2>add a new</h2>
            <Form persons={persons} setPersons={setPersons} />
            <h2>Numbers</h2>
            <PersonsList persons={persons} />
        </div>
    )
}

export default App


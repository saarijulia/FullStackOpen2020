import React, { useState } from 'react'
import PersonsList from './Components/PersonsList'
import Form from './Components/Form'

const App = () => {

    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])

    const [newFilter, setFilter] = useState(persons)
    const [textSearch, setTextSearch] = useState('')

    const changeFilter = (event) => {
        setFilter(persons.filter(function (person) {
            return person.name.toLowerCase().startsWith(event.target.value.toLowerCase())
        }))
        setTextSearch(event.target.value)
    }

    return (
        <div>
            <h2>
                Phonebook
            </h2>
            <div>
                filter shown with <input onChange={changeFilter} />
            </div>

            <h2>add a new</h2>
            <Form persons={persons} setPersons={setPersons} />
            <h2>Numbers</h2>
            <PersonsList persons={persons} textSearch={textSearch} newFilter={newFilter} />
        </div>
    )
}

export default App


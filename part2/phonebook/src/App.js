import React, { useState } from 'react'
import PersonsList from './Components/PersonsList'
import Form from './Components/Form'
import TextSearch from './Components/TextSearch'

const App = () => {

    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])

    const [textSearch, setText] = useState('')
    const [filterList, setFilterList] = useState(persons)

    if (textSearch != '') {
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


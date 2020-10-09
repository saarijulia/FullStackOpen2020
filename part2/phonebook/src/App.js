import React, { useState } from 'react'

const PersonsList = (props) => {

    if (props.textSearch != '') {
        return (
            <div>
                {props.newFilter.map(person => <p key={person.name}>{person.name} {person.number}</p>)}
            </div>
        )
    } else {
        return (
            <div>
                {props.persons.map(person => <p key={person.name}>{person.name} {person.number}</p>)}
            </div>
        )
    }
}

const App = () => {

    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [newFilter, setFilter] = useState(persons)
    const [textSearch, setTextSearch] = useState('')


    const changeFilter = (event) => {
        setFilter(persons.filter(function (person) {
            return person.name.toLowerCase().startsWith(event.target.value.toLowerCase())
        }))
        setTextSearch(event.target.value)
    }

    // event handler to get the input and set that as newName
    const changeName = (event) => {
        console.log(event.target.value);
        setNewName(event.target.value)
    }

    // get number input and set that as newNumber
    const changeNumber = (event) => {
        console.log(event.target.value);
        setNewNumber(event.target.value)
    }

    // handles submitting a name - creates a name object and adds that to persons array
    const addName = (event) => {
        event.preventDefault()
        const nameObject = {
            name: newName,
            number: newNumber,
        }

        console.log("New Name:", newName);
        console.log("included: ", persons.some(person => person.name === newName))

        // only add name to phonebook if it is not included
        persons.some(person => person.name === newName)
            ? alert(`${newName} is already added to phonebook`)
            : setPersons(persons.concat(nameObject))

        setNewName('')
        setNewNumber('')
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
            <form onSubmit={addName}>
                <div>
                    name: <input value={newName} onChange={changeName} />
                </div>
                <div>number: <input value={newNumber} onChange={changeNumber} /></div>
                <div>
                    <button type="submit">
                        add
                    </button>
                </div>
            </form>
            <h2>Numbers</h2>
            <PersonsList persons={persons} textSearch={textSearch} newFilter={newFilter} />
        </div>
    )
}

export default App


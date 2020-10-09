import React, { useState } from 'react'

const App = () => {

    const [persons, setPersons] = useState([
        { name: 'Arto Hellas' }
    ])

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

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
            <form onSubmit={addName}>
                <div>
                    name: <input value={newName} onChange={changeName} />
                </div>
                <div>number: <input value={newNumber} onChange={changeNumber}/></div>
                <div>debug: {newNumber}</div>
                <div>
                    <button type="submit">
                        add
                    </button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div>
    {persons.map(person => <p key={person.name}>{person.name} {person.number}</p>)}
            </div>
        </div>
    )
}

export default App
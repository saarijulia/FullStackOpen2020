import React, { useState } from 'react'
import phonenumberService from '../services/phonenumbers'

const Form = ({ persons, setPersons }) => {
    const [newNumber, setNewNumber] = useState('')
    const [newName, setNewName] = useState('')

    // get number input and set that as newNumber
    const changeNumber = (event) => {
        setNewNumber(event.target.value)
    }

    // event handler to get the input and set that as newName
    const changeName = (event) => {
        setNewName(event.target.value)
    }

    // handles submitting a name - if name is not included then uses phonenumberService to add name 
    const addName = (event) => {
        event.preventDefault()
        const nameObject = {
            name: newName,
            number: newNumber,
        }
        persons.some(person => person.name === newName)
            ? alert(`${newName} is already added to phonebook`)
            : phonenumberService.addName(nameObject)
                .then(response => {
                    setPersons(persons.concat(response.data))

                })
        setNewName('')
        setNewNumber('')
    }

    return (
        <div>
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
        </div>
    )
}

export default Form
import React, { useState } from 'react'

const Form = ({ persons, setPersons }) => {
    const [newNumber, setNewNumber] = useState('')
    const [newName, setNewName] = useState('')

    // get number input and set that as newNumber
    const changeNumber = (event) => {
        console.log(event.target.value);
        setNewNumber(event.target.value)
    }

    // event handler to get the input and set that as newName
    const changeName = (event) => {
        console.log(event.target.value);
        setNewName(event.target.value)
    }

    // handles submitting a name - creates a name object and adds that to persons array
    const addName = (event) => {
        event.preventDefault()
        const nameObject = {
            name: newName,
            number: newNumber,
        }
        // only add name to phonebook if it is not included
        persons.some(person => person.name === newName)
            ? alert(`${newName} is already added to phonebook`)
            : setPersons(persons.concat(nameObject))

        setNewName('')
        setNewNumber('')
    }

    console.log("New Name:", newName);
    console.log("included: ", persons.some(person => person.name === newName))
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
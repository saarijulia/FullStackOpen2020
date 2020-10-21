import React, { useState } from 'react'
import phonenumberService from '../services/phonenumbers'

const Form = ({ persons, setPersons, setMessage }) => {
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
            ?   phonenumberService.update(
                persons.find(person=>person.name===newName).id,
                    {...persons.find(person=>person.name===newName), 
                    number: newNumber})
                    .then(response => {
                        setMessage(`${newName}'s number was changed`)
                        phonenumberService.getAll()
                        .then(response => setPersons(response.data))
                    })     
            :   phonenumberService.addName(nameObject)
                .then(response => {
                    setMessage(nameObject.name + ' was added to phonebook')
                    setPersons(persons.concat(response.data))
                })
                console.log(nameObject);
        setNewName('')
        setNewNumber('')
        setTimeout(() => {
            setMessage(null)
        }, 5000)
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
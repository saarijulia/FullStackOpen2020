import React, { useState } from 'react'

const App = () => {

    const [persons, setPersons] = useState([
        { name: 'Arto Hellas' }
    ])

    const [newName, setNewName] = useState('')

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
        }
        setPersons(persons.concat(nameObject))
        setNewName('')
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
                <div>
                    <button type="submit">
                        add
                    </button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div>
                {persons.map(person => <p>{person.name}</p>)}
            </div>
        </div>
    )
}

export default App
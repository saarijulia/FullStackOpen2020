import React, { useState, useEffect } from 'react'
import PersonsList from './components/PersonsList'
import Notification from './components/Notification'
import Form from './components/Form'
import TextSearch from './components/TextSearch'
import phonenumberService from './services/phonenumbers'

const App = () => {

    const [persons, setPersons] = useState([])
    const [textSearch, setText] = useState('')
    const [filterList, setFilterList] = useState(persons)
    const [message, setMessage] = useState({message: null, error: false})

    useEffect(() => {
        console.log('effect');
        phonenumberService.getAll()
            .then(response => {
                setPersons(response.data)
                console.log('get person data', response.data);
            })
    }, [])
    console.log('render', persons.length, 'persons');

    if (textSearch !== '') {
        return (
            <div>
                <h2>
                    Phonebook
                </h2>
                <Notification message={message}/>
                <TextSearch textSearch={textSearch} setText={setText} setFilterList={setFilterList} persons={persons} />

                <h2>add a new</h2>
                <Form persons={persons} setPersons={setPersons} setMessage={setMessage} />
                <h2>Numbers</h2>
                <PersonsList persons={filterList} setMessage={setMessage} />
            </div>
        )
    }

    else return (
        <div>
            <h2>
                Phonebook
            </h2>
            <Notification message={message}/>
            <TextSearch textSearch={textSearch} setText={setText} setFilterList={setFilterList} persons={persons} />

            <h2>add a new</h2>
            <Form persons={persons} setPersons={setPersons} setMessage={setMessage} />
            <h2>Numbers</h2>
            <PersonsList persons={persons} setMessage={setMessage} />
        </div>
    )
}

export default App


import React from 'react'
import DeleteButton from './DeleteButton'

const PersonsList = (props) => {

    const persons = props.persons
    const setMessage = props.setMessage


    return (
        <div>
            {persons.map(person => 
            <p key={person.name}>{person.name} {person.number} 
            <DeleteButton person={person} setMessage={setMessage} /></p>)}
        </div>
    )
}


export default PersonsList
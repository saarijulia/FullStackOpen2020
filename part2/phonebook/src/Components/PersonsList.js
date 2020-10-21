import React from 'react'
import DeleteButton from './DeleteButton'

const PersonsList = (props) => {

    const persons = props.persons


    return (
        <div>
            {persons.map(person => <p key={person.name}>{person.name} {person.number} <DeleteButton person={person} /></p>)}
        </div>
    )
}


export default PersonsList
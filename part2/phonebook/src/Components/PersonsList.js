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

export default PersonsList
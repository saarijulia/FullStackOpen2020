import React from 'react'
import phonenumberService from '../services/phonenumbers'



const DeleteButton = ({person, setMessage}) => {

    const deleteNumber = () => {
        phonenumberService.deleteNumber(person)
        .then(
            setMessage({message:`${person.name} was deleted from phonebook`})
        )
        .catch(error => {
            setMessage({message:`${person.name} does not exist in phonebook`, error:true})
        })
        }

    return (
        <>
        <button onClick={deleteNumber}>delete</button>
        </>
    )
    
}

export default DeleteButton
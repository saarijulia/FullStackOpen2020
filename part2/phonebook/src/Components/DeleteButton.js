import React from 'react'
import phonenumberService from '../services/phonenumbers'



const DeleteButton = ({person}) => {

    const deleteNumber = () => {
        phonenumberService.deleteNumber(person)
        }

    return (
        <>
        <button onClick={deleteNumber}>delete</button>
        </>
    )
    
}

export default DeleteButton
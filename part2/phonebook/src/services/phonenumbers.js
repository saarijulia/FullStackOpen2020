import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const addName = (newNumber) => {
    return axios.post(baseUrl, newNumber)
}

const deleteNumber = (id) => {
    console.log(`${baseUrl}/${id.id}`);
    return (
    axios.delete(`${baseUrl}/${id.id}`)
        .catch(error => {
            console.log('person does not exist in system')
            alert('This person does not exist in phonebook')
        })
    )
}

export default {getAll, addName, deleteNumber}
import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const addName = (newNumber) => {
    return axios.post(baseUrl, newNumber)
}

const deleteNumber = (person) => {
    console.log(`${baseUrl}/${person.id}`);
    const result = window.confirm(`Do you want to delete ${person.name}?`)
    if (result) {
        return (
            axios.delete(`${baseUrl}/${person.id}`)
                .catch(error => {
                    console.log('person does not exist in system')
                    alert('This person does not exist in phonebook')
                })
            )
    }


   
}

export default {getAll, addName, deleteNumber}
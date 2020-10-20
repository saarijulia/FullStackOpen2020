import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const addName = newNumber => {
    return axios.post(baseUrl, newNumber)
}

export default {getAll, addName}
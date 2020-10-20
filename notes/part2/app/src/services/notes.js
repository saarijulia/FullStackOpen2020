import axios from 'axios'
// this module returns an object that has three functions (getAll, create, update) as its properties
// the three functions deal with handling the notes 
// the functions directly return the promises returnes by the axios methods 
const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

export default {
    getAll: getAll,
    create: create,
    update: update
}


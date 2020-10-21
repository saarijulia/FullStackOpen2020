import axios from 'axios'
// this module returns an object that has three functions (getAll, create, update) as its properties
// the three functions deal with handling the notes 
// the functions directly return the promises returnes by the axios methods 
const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
    const request = axios.get(baseUrl)
    const nonExisting = {
        id:10000,
        content: 'This note is note saved to the server',
        date: '2019-05-30T17:30:31.098Z',
        important: true,
    }
    return request.then(response => response.data.concat(nonExisting))
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
}

export default { getAll, create, update}


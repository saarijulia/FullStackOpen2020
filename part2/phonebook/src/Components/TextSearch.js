import React from 'react'
const TextSearch = (props) => {

    const searchText = (event) => {
        props.setText(event.target.value)
        props.setFilterList(props.persons.filter(function (person) {
            return person.name.toLowerCase().startsWith(event.target.value.toLowerCase())
        }))
    }
    return (

        <div>
            filter shown with <input onChange={searchText} />
        </div>
    )
}

export default TextSearch
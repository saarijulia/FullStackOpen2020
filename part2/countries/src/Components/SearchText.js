import React, {useState, useEffect} from 'react'

const SearchText = (props) => {


    
    const textSearch = (event) => {
        props.setSearchText(event.target.value)
    }

    return (
        <>
        <input onChange={textSearch} />
       
        </>
    )
}

 
export default SearchText
import React from 'react'
const messageStyle = {
    color: 'green',
    fontSize: '20px',
    background: 'lightgray',
    borderStyle: 'solid',
    borderColor: 'green',
    padding: '10px',
    marginBottom: '10px',
}
const errorStyle = {
    color: 'red',
    fontSize: '20px',
    background: 'lightgray',
    borderStyle: 'solid',
    borderColor: 'red',
    padding: '10px',
    marginBottom: '10px',
}
const Notification = ({message}) => {
    
    const error = message.error
    const text = message.message
    
    if (text === null) {
        return null
    }
    else if (error) {
        return (
            <div style={errorStyle}>
                {text}
            </div>
        )
    }
   
        return (
        <div style={messageStyle}>
            {text}
        </div>
    )
        

}

export default Notification
import React from 'react'

const Notification = ({message}) => {

    const messageStyle = {
        color: 'green',
        fontSize: '20px',
        background: 'lightgray',
        borderStyle: 'solid',
        borderColor: 'green',
        padding: '10px',
        marginBottom: '10px',
    }
    if (message === null) {
        return null
    }

    return (
        <div style={messageStyle}>
            {message}
        </div>
    )

}

export default Notification
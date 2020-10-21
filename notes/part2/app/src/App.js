import React, { useState, useEffect } from 'react'
import noteService from './services/notes'
import Note from './components/Note'
import Notification from './components/Notification'
const Footer = () => {
    const footerStyle = {
        color: 'green',
        fonstStyle: 'italic',
        fontSize: 16
    }
    return (
        <div style = {footerStyle}>
            <br/>
            <em>Note app, Department of Computer science, University of Helsinki</em>
        </div>
    )
}

const App = (props) => {
    const [notes, setNotes] = useState([])
    // a statehook for storing the users input 
    const [newNote, setNewNote] = useState('a new note...')
    //statehook to determine which notes to be displayed 
    const [showAll, setShowAll] = useState(true)
    // effect is run after a component has rendered 
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
        noteService
            .getAll()
            .then(initialNotes => {
                setNotes(initialNotes)
            })
    }, [])

    console.log('render', notes.length, 'notes');

    const toggleImportanceOf = id => {
        const note = notes.find(n => n.id === id)
        const changedNote = { ...note, important: !note.important }
    
        noteService
          .update(changedNote).then(returnedNote => {
            setNotes(notes.map(note => note.id !== id ? note : returnedNote))
          })
          .catch(error => {
            setErrorMessage(
              `Note '${note.content}' was already removed from server`
            )
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
            setNotes(notes.filter(n => n.id !== id))
          })
      }


    const notesToShow = showAll
        ? notes // if true 
        : notes.filter(note => note.important) // if false

    const addNote = (event) => {
        event.preventDefault()
        const noteObject = {
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() < 0.5,
        }

        noteService
            .create(noteObject)
            .then(returnedNote => {
                setNotes(notes.concat(returnedNote))
                setNewNote('')
            })

    }

    const handleNoteChange = (event) => {
        console.log(event.target.value);
        setNewNote(event.target.value)
    }

    return (
        <div>
            <h1>Notes</h1>
            <Notification message={errorMessage}/>
            <div>
                <button onClick={() => setShowAll(!showAll)}>
                    show {showAll ? 'important' : 'all'}
                </button>
            </div>
            <ul>
                {notesToShow.map((note) =>
                    <Note key={note.id}
                        note={note}
                        toggleImportance={() => toggleImportanceOf(note.id)} />)}
            </ul>

            <form onSubmit={addNote}>
                <input value={newNote}
                    onChange={handleNoteChange} />
                <button type="submit">save</button>
            </form>

            <Footer />
        </div>
    )
}

export default App
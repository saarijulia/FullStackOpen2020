import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = ({ text }) => <h1>{text}</h1>

const Anecdote = ({ anecdote }) => {
  return (
    <p>{anecdote}</p>
  )
}

const Points = (props) => {
  const [points, setPoints] = useState(() => props.initialPoints)

  const incrementPoints = (index) => {
    const copy = [...points]
    copy[index]++
    setPoints(copy)
    console.log(copy)
  }

  const indexOfHighestVote = () => {
    const highestScore = Math.max.apply(null, points)
    console.log('highest point score:', highestScore)
    if (highestScore > 0) {
      return (
        points.indexOf(highestScore)
      )
    }
  }

  return (
    <>
      <p>has {points[props.index]} votes</p>
      <button onClick={() => incrementPoints(props.index)}>vote</button>
      <Header text='Anecdote with most votes' />
      <p>{props.anecdotes[indexOfHighestVote()]}</p>
    </>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState()
  const anecdotes = props.anecdotes
  const randomNum = () => (Math.floor((Math.random() * anecdotes.length)))

  return (
    <div>
      <Header text='Anecdotes' />
      <Anecdote anecdote={selected} />
      <button onClick={() => setSelected(anecdotes[randomNum()])}>next anecdote</button>
      <Points initialPoints={Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf, 0)} index={anecdotes.indexOf(selected)} anecdotes={anecdotes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />, document.getElementById('root')
)
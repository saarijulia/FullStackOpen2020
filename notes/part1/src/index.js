import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
  return (
    <div>
      <p> Hello {props.name}, you are {props.age} years old </p>
    </div>
  )
}

// A function that is assigned to the const App 
const App = () => {
  const name ='Peter'
  const age = 10
return (
  <>
    <h1>Greetings</h1>
    <Hello name = "Maya" age={26+10} />
    <Hello name = {name} age= {age}/>
  </>
)
}

// Defines a react-component called App and its command 
ReactDOM.render(<App />, document.getElementById('root'))
import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}



const Total = ({ parts}) => {
  console.log(parts)

  const sum = parts.reduce((tempVal, part) => {
    console.log("part:",part);
    console.log("tempVal:",tempVal);
    console.log("total:",tempVal+part.exercises);
    return(tempVal+part.exercises)
  }, 0)

  return (
    <p><strong>Number of exercises {sum}</strong></p>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = ({ course }) => {
  const parts = course.parts
  return (
    <div>
      {parts.map(part =>
        <Part key = {part.id} part ={part}/>)}
        <Total parts = {parts}/>
    </div>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
    </div>
  )
}

const App = () => {

  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />

}


ReactDOM.render(<App />, document.getElementById('root'))
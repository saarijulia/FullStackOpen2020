import React from 'react'
import ReactDOM from 'react-dom'

const App =() => {

  const course = { 
    name:   'Half Stack application development',
    parts: [ // an array of the courses and their exercises 
      {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name:'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
   ]
  }

  const Header = (course) => {
    console.log(course)
    return <h1> {course.course} </h1>
  }

  const Total = (exercises) => {
    console.log(exercises)
    let sum = 0;
    exercises.exercises.forEach( part => {sum = sum + part.exercises})
    return (
    <p>Number of exercises {sum}</p>
    )
  }

  const Part = (part) => {
    return (<p>{part.name} {part.exercises}</p>)

  }

  const Content = (courses) => {
    console.log(courses)
    let partsArray =[]

  
    courses.parts.forEach(part => {
    partsArray.push(<Part name= {part.name} exercises={part.exercises}/>)
    })

    return partsArray
  }


  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total exercises={course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
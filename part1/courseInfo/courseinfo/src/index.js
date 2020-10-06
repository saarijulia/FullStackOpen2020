import React from 'react'
import ReactDOM from 'react-dom'

const App =() => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = (course) => {
    return <h1> {course.course} </h1>
  }

  const Total = (exercises) => {
    return (
    <p>Number of exercises {exercises.ex1 + exercises.ex2 + exercises.ex3}</p>
    )
  }

  const Part = (part) => {
    return (<p>{part.name} {part.exercises}</p>)

  }

  const Content = (courses) => {
    return (<>
    <Part name={courses.name1} exercises={courses.ex1}/>
    <Part name={courses.name2} exercises={courses.ex2}/>
    <Part name={courses.name3} exercises={courses.ex3}/>
    </>
    )

  }



 
  return (
    <div>
      <Header course={course}/>
      <Content name1={part1} name2={part2} name3={part3} ex1={exercises1} ex2={exercises2} ex3={exercises3}/>
      <Total ex1 ={exercises1} ex2={exercises2} ex3={exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
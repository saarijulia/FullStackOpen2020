import React from 'react'
import ReactDOM from 'react-dom'

const App =() => {

  const course = 'Half Stack application development'

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }

  const part2 = {
    name:'Using props to pass data',
    exercises: 7
  }

  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
 

  const Header = (course) => {
    console.log(course)
    return <h1> {course.course} </h1>
  }

  const Total = (exercises) => {
    console.log(exercises)
    return (
    <p>Number of exercises {exercises.ex1 + exercises.ex2 + exercises.ex3}</p>
    )
  }

  const Part = (part) => {
    return (<p>{part.name} {part.exercises}</p>)

  }

  const Content = (courses) => {
    console.log(courses)
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
      <Content name1={part1.name} name2={part2.name} name3={part3.name} ex1={part1.exercises} ex2={part2.exercises} ex3={part3.exercises}/>
      <Total ex1 ={part1.exercises} ex2={part2.exercises} ex3={part3.exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
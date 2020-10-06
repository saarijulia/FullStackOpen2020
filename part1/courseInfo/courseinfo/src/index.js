import React from 'react'
import ReactDOM from 'react-dom'

const App =() => {

  const course = 'Half Stack application development'

  const parts = [ // an array of the courses and their exercises 
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

    /*
    return (<>
    <Part name={courses.name1} exercises={courses.ex1}/>
    <Part name={courses.name2} exercises={courses.ex2}/>
    <Part name={courses.name3} exercises={courses.ex3}/>
    </>
    )
    */



  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total exercises={parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
 import React, {useState} from 'react'
 import ReactDom from 'react-dom'

 const Header = ({text}) => <h1>{text}</h1>

 const Button = ({handleClick, text}) => {

  return(
    <button onClick={handleClick}>{text}</button>
  )

 }

 const Statistic = (feedback) => {
   return (
     <p>{feedback.name} {feedback.value}</p>
   )
 }

 const Statistics = (feedback) => {
   const good = feedback.goodFeedback
   const bad = feedback.badFeedback
   const neutral = feedback.neutralFeedback


  const average = () => {
    const sum = good - bad
    const total = good + bad + neutral
    return (sum/total)
  }

  const percentagePos = () => {
    const total = good + bad + neutral
    return (good / total + '%')
  }
   return(
     <div>
     <Statistic name='good' value={feedback.goodFeedback}/>
     <Statistic name='neutral' value={feedback.neutralFeedback}/>
     <Statistic name='bad' value={feedback.badFeedback}/>
     <Statistic name = 'average' value= {average()} /> 
       <Statistic name = 'positive' value = {percentagePos()}/> 
     </div>

   )

 }


 const App = () => {
   // save clicks of each button to its own state 
   const [good, setGood] = useState(0)
   const [neutral, setNeutral] = useState(0)
   const [bad, setBad] = useState(0)


   const addFeedback = (feedback, setter) => {
     setter(feedback +1)
   }

   return (
     <div>
       <Header text='give feedback'/>
       <Button handleClick={() =>addFeedback(good, setGood)} text='good'/>
       <Button handleClick={() => addFeedback(neutral, setNeutral)} text='neutral'/>
       <Button handleClick={() => addFeedback(bad, setBad)} text='bad'/>
       
       <Header text='statistics'/>
       <Statistics goodFeedback={good} neutralFeedback={neutral} badFeedback={bad}/>
       
   
       

     </div>
   )


 }

 ReactDom.render(<App />, document.getElementById('root'))

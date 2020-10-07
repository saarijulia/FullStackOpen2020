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


 const App = () => {
   // save clicks of each button to its own state 
   const [good, setGood] = useState(0)
   const [neutral, setNeutral] = useState(0)
   const [bad, setBad] = useState(0)

   const addFeedback = (feedback, setter) => {
     setter(feedback +1)
   }
/*
   const addGoodFeedback = () => {
     setGood(good +1)
   }

   const addBadFeedback = () => {
     setBad(bad +1)
   }

   const addNeutralFeedback = () => {
     setNeutral(neutral + 1)
   }
*/
   return (
     <div>
       <Header text='give feedback'/>
       <Button handleClick={() =>addFeedback(good, setGood)} text='good'/>
       <Button handleClick={() => addFeedback(neutral, setNeutral)} text='neutral'/>
       <Button handleClick={() => addFeedback(bad, setBad)} text='bad'/>
       
       <Header text='statistics'/>
       <Statistic name = 'good' value = {good} />
       <Statistic name = 'neutral' value = {neutral} />
       <Statistic name = 'bad' value = {bad} />

     </div>
   )


 }

 ReactDom.render(<App />, document.getElementById('root'))

 import React, {useState} from 'react'
 import ReactDom from 'react-dom'

 const Header = ({text}) => <h1>{text}</h1>

 const Button = ({handleClick, text}) => {

  return(
    <button onClick={handleClick}>{text}</button>
  )

 }


 const App = () => {
   // save clicks of each button to its own state 
   const [good, setGood] = useState(0)
   const [neutral, setNeutral] = useState(0)
   const [bad, setBad] = useState(0)

   const addGoodFeedback = () => {
     setGood(good + 1)
   }

   return (
     <div>
       <Header text='give feedback'/>
       {good}
       <Button handleClick={addGoodFeedback} text='good'/>
       <Header text='statistics'/>

     </div>
   )


 }

 ReactDom.render(<App />, document.getElementById('root'))

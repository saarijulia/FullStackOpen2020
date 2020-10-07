 import React, {useState} from 'react'
 import ReactDom from 'react-dom'

 const Header = ({text}) => <h1>{text}</h1>
 const App = () => {
   // save clicks of each button to its own state 
   const [good, setGood] = useState(0)
   const [neutral, setNeutral] = useState(0)
   const [bad, setBad] = useState(0)

   return (
     <div>
       <Header text='give feedback'/>

     </div>
   )


 }

 ReactDom.render(<App />, document.getElementById('root'))

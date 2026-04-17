import React from 'react'
import Car from './Car'

function App(props) {
  return (
    <div>
      {/* Object example */}

        {/* <h1>My favoruit car is {props.carinfo.name} color is {props.carinfo.model} </h1> */}
        {/* Array acces example */}
        {/* <p>but is model are very {props.year[0]},{props.year[1]},{props.year[2]}</p> */}
        {/* Object example */}
        {/* <h1>My favoruit car is {props.details.name} color is {props.details.color} model is {props.details.model} year is {props.details.year}</h1> */}
        {/* Array acces example */}
        {/* <h1>My favoruit car is {props.details[0]} color is {props.details[3]} model is {props.details[1]} year is {props.details[2]}</h1> */}
        
        
    </div>
  )
}

export default App
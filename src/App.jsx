import React from 'react'
import Car from './Car'

function App(props) {
  let myFunction=(name)=> {
    return name.toUpperCase();
  }

  function handleClick() {
    alert("Button Clicked");
  }
  function handleinput(event) {
    console.clear();
    console.log("Input value:", event.target.value);
  }

  function handlemouseover() {
    console.log("Mouse over event triggered");
  }
  function handledoubleclick() {
    console.log("Double click event triggered");
  }
  const name="Konain"
  const name2="saif"

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
        
        <h1>Hello {myFunction(name)}</h1>
        <h1>Hello {myFunction(name2)}</h1>
        <button onClick={handleClick}>{props.title}</button>
        <input type="text" onChange={handleinput} placeholder='enter text' />

        <p onMouseOver={handlemouseover} onDoubleClick={handledoubleclick}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        
    </div>
  )
}

export default App
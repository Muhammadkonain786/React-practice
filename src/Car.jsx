import React from 'react'

function Car(props) {
    const {brand, model, color,...rest} = props;
  return (
    <div>
       {/* <h1>My Car name is {props.brand}</h1> */}
         {/* <h1>My Car name is {brand}</h1> */}
         {/* <h2>It is a {color} color and model is {model}</h2> */}
            {/* <h1>My Car model is {model}</h1>
                <h2>It has {engine} engine</h2> */}
                {/* <h3>{rest.color}</h3> */}
                {/* <h2>my car color is {color}</h2>
                <h3>car engine{engine}</h3>
                <h3>car model{model}</h3> */}
                    <h2>my car color is {color}</h2>
                <h3>car model{model}</h3>
                <h3>car engine{rest.engine}</h3>
                <h3>car barnd {brand}</h3>
    </div>
  )
}

export default Car
import React from 'react'

function Button({lable, handleClick}) {
  return (
    <div>
        <button onClick={handleClick}>{lable}</button>
    </div>
  )
}

export default Button
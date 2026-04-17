import React from 'react'

function Button({ handler, lable }) { // Destructuring
  return (
    <button onClick={handler}>
      {lable}
    </button>
  );
}

export default Button
// import React from 'react'

function propsChild({greeting , message ,onclick}) {
  return (
   <div>
     <div>propschild</div>
    <div>{greeting}</div>
    <div>{message}</div>
    <button onClick={onclick} >Hello</button>

   </div>
  )
}

export default propsChild
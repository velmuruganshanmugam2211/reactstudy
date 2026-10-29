import { useState } from 'react'
import PropsChild from '../../hooks/props/propschild'

function propshook() {

    const message ="Welcome to Props variable "
 const [data,setData] = useState("")

 const handlesumit = () => {
    alert("welcome to button")
    setData("we can channge props value")
 }
  return (
   <div>
   
    <h1 className='text-4xl font-bold' >propshook</h1>
     <PropsChild greeting ={data} message= {message} onclick = {handlesumit}  />
   </div>
    
  )
}

export default propshook
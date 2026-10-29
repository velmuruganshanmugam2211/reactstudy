import React from 'react'
import { useState,useEffect } from 'react';

function useEffecthook() {

  const [data,setData] = useState(null);
  
  
    useEffect(() => {
  
      const fetchData = async ()=>{
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/todos')
          const result = await response.json()
          setData(result)
        } catch (error) {
          console.error("Error fetching data:",error)
        }
      }
      fetchData();
  
      return ()=>{
        console.log("cleanup Function")
      }
    },[])

  return (
     <div> 
        {data?.map((item)=>(
          <div className='flex flex-col border m-10 p-10 gap-2'>
          <p className='font-bold text-white m-10 p-2 rounded-lg hover:bg-white hover:text-green-500 cursor-pointer bg-blue-500' >{item.title}</p>
          <p className='font-bold text-white m-10 p-2 rounded-lg hover:bg-white hover:text-green-500 cursor-pointer bg-blue-500' >{item.id}</p>
          </div>
        ))}
      </div>
  )
}

export default useEffecthook
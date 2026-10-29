import React, { useEffect, useState } from 'react'
function useTodos() {
    const [todos,setTodos]=useState([])
    const [loading,setLoading]=useState(true)
    

    useEffect (()=>{
        const fetchTodos = async()=>{
         try {
            const responce = await fetch('https://jsonplaceholder.typicode.com/todos')
            if(!responce.ok){
                throw new Error("Failed to fetch todos")
            }
            const data = await responce.json()
            setTodos(data)
            setLoading(false)
            
         } catch (error) {
            console.log(error)
            setLoading(false)
         }   
        }
        fetchTodos()
    },[])
  return {
    todos,
    loading
  }
}

export default useTodos
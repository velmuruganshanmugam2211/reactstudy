import React from 'react'
import { useRef } from 'react'
function useRefhook() {

    const inputRef = useRef();
    const texref = useRef("Velu")

    const focusinput = ()=>{
      inputRef.current.focus();
    }

    return (
        <>
            <div className='flex items-center gap-2 justify-center flex-col'>
            <h1 className='bg-white p-2 text-black font-bold'>useRefhook</h1>
            <input className='m-10 p-2 border border-gray-300 rounded-lg' maxLength={10} ref={inputRef} type="text" />
            <button className='bg-green-500 text-white p-2 rounded-lg cursor-pointer hover:bg-white hover:text-green-500 'onClick={focusinput}  >Continue</button>
            </div>
            <div>
              <p>{texref.current}</p>
            </div>
        </>

    )
}

export default useRefhook
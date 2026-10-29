import { useState } from "react";

function useStatehook(){
    const [count , setCount] = useState(0);

    function handleIncrease(){
        setCount(count + 1);
    }

    function handleDecrease(){
        setCount(count - 1);
    }

    return(
        <>
        <div className="bg-black text-white p-2">{count}</div>
        <button className="bg-white p-2" onClick={handleIncrease}>+</button>
        <button className="bg-white p-2" onClick={handleDecrease}>-</button>
        </>
    )
}

export default useStatehook
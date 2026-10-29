import { useReducer, useState } from "react"

const initialState = { count: 0 }
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENTTT': return { count: state.count + 1 }
        case 'INCREMENT': return { count: state.count + action.payload }
        case 'DECREMENT': return { count: state.count - 1 }
        case 'RESET': return { count: 0 }
        // default: return state;
        default: return {count : "Poda pani"};
    }
}

function useReducerhook() {

    const [state, dispatch] = useReducer(reducer, initialState)
    // const [count, setCount] = useState(0)
    return (
        <div className="flex flex-col m-50 gap-5" >
            <div>Count : {state.count}</div>
            <button onClick={() => dispatch({ type: 'INCREMENT' ,payload:5 })} >Increment</button>
            <button onClick={() => dispatch({ type: 'INCREMENTTT' })} >Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })} >Decrement</button>
            <button onClick={() => dispatch({ type: 'RESET' })} >Reset</button>
            <button onClick={() => dispatch({ type: 'Something' })} >Something</button>
        </div>

    )
}

export default useReducerhook
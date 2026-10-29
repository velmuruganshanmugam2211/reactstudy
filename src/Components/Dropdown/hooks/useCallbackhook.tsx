import { useState, useCallback } from "react"

function useCallbackhook() {

    const [count, setCount] = useState(0)
    const [alertMessage, setAlertmessage] = useState("")
    const increment = useCallback(() => {
        console.log("in fun called")
        setCount(count + 10)
    }, [count])
    const decrement = useCallback(() => {
        if (count <= 0) {
            console.log("dec fun called")

            setAlertmessage("Count is 0 Keela pogathu da")
            // return alert("Count is 0 Keela pogathu da");
            return
        }
        setCount(count - 10)
    }, [count])

    console.log("Component Rendered")
    return (
        <div>
            <div>useCallbackhook</div>
            <button className="p-2 border border-white rounded-lg bg-green-500 text-white font-bold hover:bg-red-500 hover:text-white hover:font-bold hover:cursor-pointer" onClick={increment} >increment</button>
            <button className="p-2 border border-white rounded-lg bg-red-500 text-white font-bold hover:bg-green-500 hover:text-white hover:font-bold hover:cursor-pointer" onClick={decrement} >decrement</button>
            <p>hello your Count {count}</p>
            {alertMessage && (
                <div className="flex items-center gap-3 rounded-xl border border-red-300 bg-red-50 p-4 text-red-700 shadow-lg">
                    <span className="text-2xl">⚠️</span>

                    <p className="font-semibold">
                        {alertMessage}
                    </p>

                    <button
                        onClick={() => setAlertmessage("")}
                        className="ml-2 font-bold hover:text-red-900"
                    >
                        ✕
                    </button>
                </div>
            )}
        </div>
    )
}

export default useCallbackhook
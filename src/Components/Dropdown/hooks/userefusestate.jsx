import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom';

function userefusestate() {
    const [stateCount, setStateCount] = useState(0)
    const refCount = useRef(0);

    useEffect(() => {
        console.log("Component Rerendered")
    }, []);


    useEffect(() => {
        console.log("Component Mounted")
        return () => {
            console.log("Component Unmounted")
        }
    });

    const incrementRefcount = () => {
        console.log("refCount")
        refCount.current = refCount.current + 1;

    }
    const increamentStatecount = () => {
        setStateCount(stateCount + 1);
        console.log("state")
        refCount.current = refCount.current + 1;
        console.log("refCount")
    }
// its for use prams practice 
    let {id} = useParams();

    return (
        <div>
            <p>State count: {stateCount}</p>
            <p>Ref count: {refCount.current}</p>
            <button onClick={increamentStatecount}>increase state</button>
            <button onClick={incrementRefcount}>increase ref</button>
            {/* its for use prams practice */}
            <h1>hello Velu {id}</h1>
        </div>
    )
}

export default userefusestate
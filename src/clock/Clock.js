import React from 'react'
import { useState , useEffect } from "react"


const Clock = () => {
    const [currTime, setCurrTime] = useState(new Date().toString());
    useEffect(()=>{
        setTimeout(()=>{
            let curr = new Date();
            let timeOut= setCurrTime( curr.toString());
            console.count("times "+ curr.getTime().toLocaleString())
            // return clearTimeout(timeOut);
        },1000);
    },[currTime])
    return (
        <div>
            <h1>{currTime}</h1>
        </div>
    )
}

export default Clock

<<<<<<< HEAD
import React, { useState, useRef, useEffect } from "react";
=======
import React from "react";
import { useState, useRef } from "react"
>>>>>>> 4ed736fb5ad43ec5eb04443b520f83c29de97844
import './index.css'

const Timer = () => {
    const [timer, setTimer] = useState(10);
    const id = useRef(null);
<<<<<<< HEAD
    const clear = () => {
    window.clearInterval(id.current)
    }
    useEffect(() => {
        id.current = window.setInterval(() => {
            setTimer((time) => time-1)
        },1000)
        return () => clear();
    },[])

    useEffect(() => {
        if(timer === 0) {
=======
    const clear=()=>{
    window.clearInterval(id.current)
    }
    useEffect(()=>{
        id.current = window.setInterval(()=>{
            setTimer((time)=>time-1)
        },1000)
        return ()=>clear();
    },[])

    useEffect(()=>{
        if(timer===0){
>>>>>>> 4ed736fb5ad43ec5eb04443b520f83c29de97844
            clear()
        }

    },[timer])


    return (
    <div className="Timer">

    <div id="timeDisplay">Time left : {timer} </div>

    </div>
    );
}
  

export default Timer;

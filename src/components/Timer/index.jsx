<<<<<<< HEAD
import React from "react";
import { useState, useRef, useEffect } from "react"
=======
import React, { useEffect, useState, useRef } from "react";
>>>>>>> dfa363502e29e5caabe3d4fcbf0bd5e208dca0ed
import './index.css'

const Timer = () => {
    const [timer, setTimer] = useState(10);
    const id = useRef(null);
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

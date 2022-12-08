import React, { useState, useEffect } from "react";
import "./index.css"


const Progress = () => {
    
    const [filled, setFilled] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    useEffect (() => {
        if(filled < 100 && isRunning) {
            setTimeout(() => setFilled(prev => prev += 5), 50)
        }
    },[filled, isRunning])
return (
        <div className="progresscontainer">
            <div className="progressbar">
                <div style={{
                    height: "100%",
                    width: `${filled}`,
                    backgroundColor: "black",
                    transition: "width 0.5s",
                    zIndex: "2"
                }}></div>
                <span className="progressPercent">{ filled }</span>
            </div>
            <button className="btn" onClick={() => setIsRunning(true)}>Run</button>
        </div>
)
    
}

export default Progress;
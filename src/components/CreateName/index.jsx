import React from "react";
import { useNavigate } from "react-router-dom";
import "nes.css/css/nes.min.css";

const CreateName = props => {
    const navigate = useNavigate()
    
    if (!props.show) {
        return null
    }

    const goHandler = () => {
        //save the username to redux and do something
        navigate('/createroom')
    }
    

    return (
        <div className="nes-container with-title is-centered" id="modalcontainer">
            <p className="title">Create a 4-letter username!</p>
            <div class="nes-field">
                <label htmlFor="username">Your name</label>
                <input type="text" id="username" class="nes-input" maxLength={4}></input>
            </div>
            <div className="buttons">
                <button type="button" class="nes-btn is-error" onClick={props.onClose}>Close</button>
                <button onClick={goHandler} type="button" class="nes-btn is-primary">Go!</button>
            </div>
        </div>
    )
}

export default CreateName;

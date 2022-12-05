import React from "react";
import "nes.css/css/nes.min.css";

const CreateName = props => {

    
    if (!props.show) {
        return null
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
                <button type="button" class="nes-btn is-primary">Go!</button>
            </div>
        </div>
    )
}

export default CreateName;
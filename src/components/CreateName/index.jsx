import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usersActions } from "../../store/usersSlice";
import useUserStatus from "../../hooks/useUserStatus";
import { useSelector, useDispatch } from 'react-redux';
import { socket } from "../../hooks/socket";
import "nes.css/css/nes.min.css";

const CreateName = props => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const { createUser } = useUserStatus()
    const users = useSelector(state => state);
    if (!props.show) {
        return null
    }

    const goHandler = (e) => {
        e.preventDefault()
        //save the username to redux and do something
        usersActions.setUser(name)
        // navigate('/lobby')
    }

    function handleChange(e) { 
        setName(e.target.value)
        console.log(name)
    }

    function submit(e) {
        e.preventDefault()
        console.log(name)
        const user = { id: socket.id, name: name.toUpperCase() }
        createUser(user)
        navigate('/lobby')
    }
    

    return (
        <div className="nes-container with-title is-centered" id="modalcontainer">
            <p className="title">Create a 4-letter username!</p>
            <div className="nes-field">
                <label htmlFor="username">Your name</label>
                <input type="text" id="username" className="nes-input" onChange={handleChange} value={name} maxLength={4}></input>
            </div>
            <div className="buttons">
                <button type="button" className="nes-btn is-error" onClick={props.onClose}>Close</button>
                <button onClick={submit} type="button" className="nes-btn is-primary">Go!</button>
            </div>
        </div>
    )
}

export default CreateName;

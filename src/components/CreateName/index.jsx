import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usersActions } from "../../store/usersSlice";
import useUserStatus from "../../hooks/useUserStatus";
import { useSelector, useDispatch } from 'react-redux';
import { socket } from "../../hooks/socket";
import "nes.css/css/nes.min.css";
import { motion } from 'framer-motion';
import Backdrop from '../Backdrop'
import './index.css';

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
};





const CreateName = ({ handleClose }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const { createUser } = useUserStatus()
    const users = useSelector(state => state);
    // if (!props.show) {
    //     return null
    // }

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
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="nes-container is-rounded with-title is-centered is-dark"
                id="modalcontainer"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit">
                <p className="title">Create a 4-letter username!</p>
                <div className="nes-field">
                    <label htmlFor="username">Your name</label>
                    <input type="text" id="username" className="nes-input" onChange={handleChange} value={name} maxLength={4}></input>
                </div>
                <div className="buttons">
                    <button onClick={submit} type="button" className="nes-btn is-primary">Go!</button>
                    <button type="button" className="nes-btn is-error" onClick={handleClose}>Close</button>
                </div>
            </motion.div>
        </Backdrop>
    )
}

export default CreateName;

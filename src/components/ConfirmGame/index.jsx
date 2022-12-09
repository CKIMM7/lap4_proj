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





const ConfirmGame = ({ handleClose }) => {
    // if (!props.show) {
    //     return null
    // }

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
                <p className="title">Are you ready to start the game?</p>
                <div className="buttons">
                    <button type="button" className="nes-btn is-primary">Start</button>
                    <button type="button" className="nes-btn is-error" onClick={handleClose}>Cancel</button>
                </div>
            </motion.div>
        </Backdrop>
    )
}

export default ConfirmGame;

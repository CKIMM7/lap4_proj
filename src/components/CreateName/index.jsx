import React from "react";
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
                        <input type="text" id="username" className="nes-input" maxLength={4}></input>
                    </div>
                    <div className="buttons">
                        <button type="button" className="nes-btn is-primary">Go!</button>
                        <button type="button" className="nes-btn is-error" onClick={handleClose}>Close</button>
                    </div>
            </motion.div>
        </Backdrop>
    )
}

export default CreateName;
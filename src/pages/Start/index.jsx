import React, { useState } from "react";
import { Rockets, CreateName, Header } from "../../components"
<<<<<<< HEAD
import { motion, AnimatePresence } from 'framer-motion';

const Start = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

=======
import useUserStatus from "../../hooks/useUserStatus";

const Start = () => {

    const [show, setShow] = useState(false)
    const { createRoom, sendMessage, setMessage } = useUserStatus();
>>>>>>> game

    return (
            <div className="other">
                <Header />
                
                <div className="buttoncontainer">
                    <button
                    type="button"
                    className="nes-btn is-success"
                    onClick= {() => (modalOpen ? close() : open())}>Play Now!
                    </button>
                </div>
                <Rockets />
                <AnimatePresence
                    initial={false}
                    exitBeforeEnter={true}>
                    {modalOpen && <CreateName modalOpen={modalOpen} handleClose={close}/>}
                </AnimatePresence>
            </div>
            
    )
}

export default Start

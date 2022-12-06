import React, { useState } from "react";
import { Rockets, CreateName, Header } from "../../components"
import { motion, AnimatePresence } from 'framer-motion';

const Start = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);


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

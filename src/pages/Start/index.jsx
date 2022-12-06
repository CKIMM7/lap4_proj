import React, { useState } from "react";
import { Rockets, CreateName, Header } from "../../components"

const Start = () => {

    const [show, setShow] = useState(false)

    return (
            <div className="other">
                <Header show={show}/>
            <div className="modal">
                <div className="buttoncontainer">
                <button type="button" class="nes-btn is-success" onClick={() => setShow(true)}>Play Now!</button>
                </div>
                <CreateName onClose={() => setShow(false)} show={show} />
            </div>

            <Rockets />
            </div>
            
    )
}

export default Start

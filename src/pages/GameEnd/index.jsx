import React from "react";

import { ShowWinner } from "../../components";

import './GameEnd.css'

const GameEnd = () => {
    return <div>
        <h2>Winnner</h2>
        <ShowWinner />
        <button className="endbtn">Exit Game Lobby</button>
        <button className="endbtn">Return to party lobby</button>
    </div>
}

export default GameEnd
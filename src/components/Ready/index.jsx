import React from "react";
import { socket } from "../../hooks/socket";
import useUserStatus from "../../hooks/useUserStatus";
import { useParams } from "react-router-dom";
    
const Ready = () => { 

    const { id } = useParams()
    const { readyUp } = useUserStatus()


    function ready() { 
        console.log('Ready up')
        console.log(id)
        readyUp(id, socket.id)
    }

    return (
        <>
            <h1>Ready Page</h1>
            <p>{ socket.id }</p>
            <button onClick={ready}>Ready Up</button>
        </>
    )
}

export default Ready
import React, { useState } from "react";
import { socket } from "../../hooks/socket";
import useUserStatus from "../../hooks/useUserStatus";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
    
const Ready = () => {

    const { id } = useParams()
    const { joinRoom, sendMessage, setMessage, message, readyUp } = useUserStatus()

    const messageReceived = useSelector(state => state.room.messageReceived);
    console.log('message')
    console.log(messageReceived)
    const roomsArray = useSelector(state => state.room.room);
    console.log(roomsArray)
    const room = roomsArray.filter(room => room.id == id)[0]
    console.log(room)


    function ready() {
        console.log('Ready up')
        console.log(id)
        readyUp(id, socket.id)
    }

    function handleChange() { }

    const sendMessageHandler = (e) => {
        e.preventDefault()
        console.log(message)
        sendMessage(message, room)
    };

    
    return (
        <div className="App">
            <h1>Room - {id}</h1>
            <button onClick={ready}>Ready Up!</button>
            
            <h1> Users:</h1>
            {room.users.map(user => <p>{ user.name }</p>)}
            <h1> Chatroom:</h1>
            { console.log(room.messages)}
            {room.messages.map(msg => <p>{msg.user} - {msg.message}</p>)}
            <input
                placeholder="Message..."
                onChange={(event) => {
                    setMessage(event.target.value);
                }}
            />
            <button onClick={sendMessageHandler}> Send Message</button>
        </div>
    )
    
}

export default Ready
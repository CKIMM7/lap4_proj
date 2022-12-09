import React, { useState } from "react";
import { socket } from "../../hooks/socket";
import useUserStatus from "../../hooks/useUserStatus";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Rockets from "../Rockets"
import "nes.css/css/nes.min.css";
import "./index.css"

const Ready = ({ start, setStart }) => {

    const { id } = useParams()
    const navigate = useNavigate()
    const { joinRoom, leaveRoom, sendMessage, setMessage, message, readyUp } = useUserStatus()

    const messageReceived = useSelector(state => state.room.messageReceived);
    console.log('message')
    // console.log(messageReceived)
    const userArray = useSelector(state => state.user.users);
    const roomsArray = useSelector(state => state.room.room);
    console.log(roomsArray)
    const indexOfRoom = roomsArray.findIndex(obj => obj.id == id)
    console.log(indexOfRoom)

    const room = roomsArray.filter(room => room.id == id)[0]
    console.log(room)


    function ready() {
        console.log('Ready up')
        console.log(id)
        readyUp(id, socket.id)
        console.log(roomsArray[indexOfRoom].users)
        if (!roomsArray[indexOfRoom].users.find(obj => obj.isReady == false)) {
            console.log('Start Game')
            setStart(true)
        }
    }


    const sendMessageHandler = (e) => {
        e.preventDefault()
        console.log(message)
        sendMessage(message, room)
        setMessage('')
    };

    function leaveHandler(e) {
        e.preventDefault()
        leaveRoom(room)
        navigate('/lobby')
    }


    return (
        <div className="App">

            <div className="roomsection" id="playerinfo">
                <h1 className="infotitle">Players:</h1>
                {room.users.map(user => <p>{userArray.filter(obj => obj.id == user.name)[0].name}</p>)}
            </div>
            <div className="roomsection" id="chatroominfo">
                <h1 className="infotitle"> Chatroom:</h1>
                {console.log(room.messages)}
                <div className="nes-container is-rounded is-dark" id="roommessages">
                    {room.messages.map(msg =>
                        <p>{userArray.filter(obj => obj.id == msg.user)[0].name} - {msg.message}</p>)}
                </div>
                <input
                    placeholder="Type a message..."
                    className="nes-input is-warning"
                    value={message}
                    onChange={(event) => {
                        setMessage(event.target.value);
                    }}
                />
                <button onClick={sendMessageHandler} className="nes-btn is-warning" id="sendmessagebtn"> Send Message</button>
            </div>
            <div className="roomsection" id="roominfo">
                <h1 className="infotitle">Room Name - {id}</h1>
                <button className="nes-btn is-success" onClick={ready}>Ready Up!</button>
                <button className="nes-btn is-error" onClick={leaveHandler}>Leave Lobby</button>
            </div>

            <Rockets />
        </div>
    )

}

export default Ready
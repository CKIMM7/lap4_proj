import { useEffect } from 'react';
import { socket } from '../../hooks/socket';
import useUserStatus from '../../hooks/useUserStatus'
import { useParams, useNavigate } from 'react-router-dom';

export default function Room({ data }) {
    // console.log('room client js')
    // console.log(data)


    const { roomId } = useParams()
    const navigate = useNavigate()
    const { joinRoom, leaveRoom, sendMessage, setMessage, message } = useUserStatus()

    const joinRoomHandler = (e) => {
        e.preventDefault()
        joinRoom(data)
        navigate(`/lobby/${data.id}`, { state: { userId: socket.id } })
    };

    return (
        <div className='room'>
            <p>Lobby : {data.id}</p>
            {console.log(data)}
            {console.log(data.messages)}

            <p>Players: {data.users.length}/6</p>

            <button id='join-button' onClick={joinRoomHandler}>Join</button>


        </div>
    )
}

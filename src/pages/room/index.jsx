import { useEffect } from 'react';
import { socket } from '../../hooks/socket';
import useUserStatus from '../../hooks/useUserStatus'
import { useParams, useNavigate, useLocation } from 'react-router-dom';

export default function Room({ data }) {
    // console.log('room client js')
    // console.log(data)

    console.log(data)
    
    const { roomId } = useParams()
    const navigate = useNavigate()
    const { joinRoom, leaveRoom, sendMessage, setMessage, message } = useUserStatus()

    const joinRoomHandler = () => {
        joinRoom(data)
        //leads to Game component
        navigate(`/lobby/${data.id}`, {state: { userId: socket.id }} )
    };

    const leaveRoomHandler = () => {
        leaveRoom(data)
    };


    const sendMessageHandler = () => {
        console.log(message)
        sendMessage(message, data)
    };

    useEffect(() => {
        console.log(message)
    }, [message])

    return (
        <div className='room'>
            {data.id}<br />

            <p>Users:</p>
            {data.users.map((user, i) => <p key={i}>{`${user.username}`}</p>)}

            <p>Chatroom:</p>
            {data.messages.map((msg, i) => <p key={ i}>{`${msg.user} - ${msg.message}`}</p>)}

        <input placeholder="Message..."
               onChange={(event) => {
               setMessage(event.target.value);
        }}
        /><br/>
      <button onClick={sendMessageHandler}> Send Message</button>
      <br/>

            <button onClick={joinRoomHandler}>Join</button>
            <button onClick={leaveRoomHandler}>Leave</button>
        </div>
    )
  }
  
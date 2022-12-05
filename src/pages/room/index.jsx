import { useEffect } from 'react';
import { socket } from '../../hooks/socket';
import useUserStatus from '../../hooks/useUserStatus'
import { useParams, useNavigate } from 'react-router-dom';

export default function Room({ data }) {
    // console.log('room client js')
    // console.log(data)
<<<<<<< HEAD:src/components/room/index.jsx

    const { joinRoom, leaveRoom, sendMessage, setMessage, message } = useUserStatus()
=======
    const { roomId } = useParams()
    const navigate = useNavigate()
    const { joinRoom, sendMessage, setMessage, message } = useUserStatus()
>>>>>>> 6dab8c2ecda15522f4fe2d6215099c4f992b419e:src/pages/room/index.jsx

    const joinRoomHandler = () => {
        joinRoom(data)
        navigate(`/rooms/${data}`)
    };

    const leaveRoomHandler = () => {
        leaveRoom(data)
    };


    const sendMessageHandler = () => {
        console.log(message)
        console.log(data)
        sendMessage(message, data)

    };

    useEffect(() => {
        console.log(message)
    }, [message])

    return (
        <div className='room'>
            {data.id}<br />
            {console.log(data)}
            {console.log(data.messages)}

            <p>Users:</p>
            {data.users.map((user, i) => <p key={i}>{`${user}`}</p>)}

            <p>Chatroom:</p>
            {data.messages.map((msg, i) => <p key={ i}>{`${msg.user} - ${msg.message}`}</p>)}

        <input placeholder="Message..."
               onChange={(event) => {
               setMessage(event.target.value);
        }}
        /><br/>
      <button onClick={sendMessageHandler}> Send Message</button>
      <br/>

<<<<<<< HEAD:src/components/room/index.jsx
            <button onClick={joinRoomHandler}>Join</button>
            <button onClick={leaveRoomHandler}>Leave</button>
=======
        <button onClick={joinRoomHandler}>
            join room: {data}
        </button>
>>>>>>> 6dab8c2ecda15522f4fe2d6215099c4f992b419e:src/pages/room/index.jsx
        </div>
    )
  }
  
import { useEffect } from 'react';
import { socket } from '../../hooks/socket';
import useUserStatus from '../../hooks/useUserStatus'

export default function Room({ data }) {
    // console.log('room client js')
    // console.log(data)

    const { joinRoom, leaveRoom, sendMessage, setMessage, message } = useUserStatus()

    const joinRoomHandler = () => {
        joinRoom(data)
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
        // console.log(message)
    }, [message])

    return (
        <div className='room'>
            {data.id}<br />
            {console.log(data)}
            {console.log(data.messages)}

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
  
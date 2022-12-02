import { useEffect } from 'react';
import { socket } from '../../hooks/socket';
import useUserStatus from '../../hooks/useUserStatus'

export default function Room({ data }) {
    // console.log('room client js')
    // console.log(data)

    const { joinRoom, sendMessage, setMessage, message } = useUserStatus()

    const joinRoomHandler = () => {
        joinRoom(data)
    };


    const sendMessageHandler = () => {
        console.log(message)
        sendMessage(message, data)
    };

    useEffect(() => {
        // console.log(message)
    }, [message])

    return (
        <div className='room'>
            {data}<br/>

        <input placeholder="Message..."
               onChange={(event) => {
               setMessage(event.target.value);
        }}
        /><br/>
      <button onClick={sendMessageHandler}> Send Message</button>
      <br/>

        <button onClick={joinRoomHandler}>join</button>
        </div>
    )
  }
  
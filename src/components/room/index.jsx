import { useEffect } from 'react';
import { socket } from '../../hooks/socket';
import useUserStatus from '../../hooks/useUserStatus'
import { useParams, useNavigate } from 'react-router-dom';

export default function Room({ data }) {
    // console.log('room client js')
    // console.log(data)
    const { roomId } = useParams()
    const navigate = useNavigate()
    const { joinRoom, sendMessage, setMessage, message } = useUserStatus()

    const joinRoomHandler = () => {
        joinRoom(data)
        navigate(`/rooms/${data}`)
    };


    const sendMessageHandler = (e) => {
        e.preventDefault()
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

        <button onClick={joinRoomHandler}>
            join room: {data}
        </button>
        </div>
    )
  }
  
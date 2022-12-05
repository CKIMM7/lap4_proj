import { useDispatch, useSelector } from 'react-redux';
import useUserStatus from "../../hooks/useUserStatus";
import Room from "../room";
import { socket } from "../../hooks/socket";

export default function CreateRoom ({ data }) {
   
    const { createRoom } = useUserStatus();
      
    return (
        <div className="App">
        <h2>user: {socket.id}</h2>
        <button onClick={createRoom}> Create Room</button>
      </div>
    )
  }

import useGetGames from "../../hooks/useGetGames"
import { useDispatch, useSelector } from 'react-redux';
import useUserStatus from "../../hooks/useUserStatus";
import Room from "../room";
import { socket } from "../../hooks/socket";

export default function CreateRoom ({ data }) {
   
    const { createRoom } = useUserStatus();
    const roomsArray = useSelector(state => state.room.room);
    let createdRooms = roomsArray.map((r, i) => {
        console.log(r)
        return <Room data={r} key={i}></Room>
    })
        
    return (
        <div className="App">
        <h2>user: {socket.id}</h2>
        <button onClick={createRoom}> Create Room</button>
      </div>
    )
  }

import useGetGames from './hooks/useGetGames';
import { useDispatch, useSelector } from 'react-redux';
import useUserStatus from './hooks/useUserStatus';
import Room from './pages/room';
import { socket } from './hooks/socket';
import CreateRoom from './pages/createRoom';

function App() {

  const { status } = useGetGames(10, 11, 'easy', 'multiple')
  //const { createRoom } = useUserStatus();
  const roomsArray = useSelector(state => state.room.room);


  let createdRooms = roomsArray.map((r,i) => {
      console.log(r)
      return <Room data={r} key={i}></Room>
  })


return (

  <div className="App">
      <CreateRoom />
      {createdRooms}
    </div>
)}

export default App;

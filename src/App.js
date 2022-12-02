import { useDispatch, useSelector } from 'react-redux';

import Room from './pages/room';
import CreateRoom from './pages/createRoom';
import GameSettings from './pages/gameSettings';

function App() {

  const roomsArray = useSelector(state => state.room.room);

  let createdRooms = roomsArray.map((r,i) => {
      console.log(r)
      return <Room data={r} key={i}></Room>
  })


return (

  <div className="App">
      <CreateRoom />
      <GameSettings />
      {createdRooms}
    </div>
)}

export default App;

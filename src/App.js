import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import Room from './pages/room';
import CreateRoom from './pages/createRoom';
import GameSettings from './pages/gameSettings';
import FetchTravia from './components/FetchTravia';
import Nav from './pages/navBar';
import GameRoom from './pages/gameRoom';

function App() {


return (
 <>
  <Routes>
    <Route path='/' element={<Nav />}></Route>
    <Route path='/rooms/:roomId' element={<GameRoom />}></Route>
  </Routes>
 
 </>

)}

export default App;

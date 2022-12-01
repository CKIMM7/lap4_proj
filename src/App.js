import { Routes, Route } from 'react-router-dom'
import useGetGames from './hooks/useGetGames';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const { status } = useGetGames(10, 11, 'easy', 'multiple')
  const gamesData = useSelector(state => state.games.gamesData)
  console.log(gamesData)
  const userData = useSelector(state => state.users.user);
  console.log(userData)
  const highestScore = useSelector(state => state.gameStats.highestScore)
  console.log(highestScore)

  return (
    <div className="App">
      <h1>GAME</h1>
    </div>
  );
}

export default App;

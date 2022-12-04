// import logo from './logo.svg';
import './App.css';

import useGetGames from './hooks/useGetGames';

import { Difficulty, Topic, Leaderboard } from './components'

function App() {

  const { status, difficulty } = useGetGames()

  return (
    <div className="App">
      <h1>GAME</h1>
      <Difficulty />
      <Topic />
      {/* <Leaderboard /> */}
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';

import useGetGames from './hooks/useGetGames';

import { Difficulty, Topic, Leaderboard } from './components'

function App() {

  const { status, category, difficulty } = useGetGames()

  return (
    <div className="App">
      <h1>GAME</h1>
      <Difficulty level={difficulty} />
      <Topic topic={category} />
      {/* <Leaderboard /> */}
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';

import useGetGames from './hooks/useGetGames';

import { Difficulty, Topic } from './components'

function App() {

  const { status, difficulty } = useGetGames()

  return (
    <div className="App">
      <h1>GAME</h1>
      <Difficulty />
      <Topic />
    </div>
  );
}

export default App;

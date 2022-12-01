import logo from './logo.svg';
import './App.css';
import useGetGames from './hooks/useGetGames';

function App() {

  const { status } = useGetGames()

  return (
    <div className="App">
      <h1>GAME</h1>
    </div>
  );
}

export default App;

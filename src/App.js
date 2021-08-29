import logo from './logo.svg';
import './App.css';
import HistoryCollection from './history_collection';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Andraya and Gabriel</h1>
      </header>
      <main>
        <HistoryCollection></HistoryCollection>
      </main>
    </div>
  );
}

export default App;

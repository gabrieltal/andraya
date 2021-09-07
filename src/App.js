import logo from './assets/images/logo.svg';
import './App.css';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Andraya and Gabriel</h1>
      </header>
      <main>
        <Timeline></Timeline>
      </main>
    </div>
  );
}

export default App;

import Main from './components/Main';
import About from './components/About';
import Gallery from './components/Gallery';
import Registry from './components/Registry';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/registry" element={<Registry />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

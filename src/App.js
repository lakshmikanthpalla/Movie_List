import { Routes, Route } from 'react-router-dom';
import FlickFinder from './components/FlickFinder';
import Movies from './components/Movies';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<FlickFinder />} />
      <Route path="/Movies" element={<Movies />} />
    </Routes>
  );
}

export default App;
import { Routes, Route } from 'react-router-dom';

import './App.css';

// Pages
import Home from './routes/home/home.page';
import Albums from './routes/albums/albums.page';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/albums' element={<Albums />} />
    </Routes>
  );
}

export default App;

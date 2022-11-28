import { Routes, Route } from 'react-router-dom';

import './App.css';

// Pages
import HomePage from './routes/home/home.page';
import AlbumsPage from './routes/albums/albums.page';
import AboutPage from './routes/about/about.page';
import ContactPage from './routes/contact/contact.page';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/albums' element={<AlbumsPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/contact' element={<ContactPage />} />
    </Routes>
  );
}

export default App;

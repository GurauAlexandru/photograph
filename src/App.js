import { Routes, Route } from 'react-router-dom';
import './App.css';

// Pages
import HomePage from './routes/home/home.page';
import ContactPage from './routes/contact/contact.page';
import Albume from './routes/albume/albume.page';
import AboutPage from './routes/about-me/about-me.page';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/albume/*' element={<Albume />} />
      <Route path='//despre-mine' element={<AboutPage />} />
      <Route path='/contact' element={<ContactPage />} />
    </Routes>
  );
}

export default App;

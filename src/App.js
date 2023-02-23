import { Routes, Route } from 'react-router-dom';
import './App.css';

// Pages
import HomePage from './routes/home/home.page';
import DesprePage from './routes/despre/despre.page';
import ContactPage from './routes/contact/contact.page';
import Albume from './routes/albume/albume.page';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/albume/*' element={<Albume />} />
      <Route path='/despre-mine' element={<DesprePage />} />
      <Route path='/contact' element={<ContactPage />} />
    </Routes>
  );
}

export default App;

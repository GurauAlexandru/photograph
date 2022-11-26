import './navigation.styles.scss';
import { Link, Outlet } from 'react-router-dom';

const Navigation = () => (
  <>
    <nav className='navigation'>
      <Link to='/' className='navigation__link'>
        Acasa
      </Link>
      <Link to='/albums' className='navigation__link'>
        Albume
      </Link>
      <li>Despre</li>
      <li>Contact</li>
    </nav>
    <Outlet />
  </>
);

export default Navigation;

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
      <Link to='/about' className='navigation__link'>
        Despre
      </Link>
      <Link to='/contact' className='navigation__link'>
        Contact me
      </Link>
    </nav>
    <Outlet />
  </>
);

export default Navigation;

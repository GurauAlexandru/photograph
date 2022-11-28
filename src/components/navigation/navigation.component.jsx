import './navigation.styles.scss';
import { Link, Outlet } from 'react-router-dom';
import hamburgerIcon from '../../assets/icons/hamburger-icon.svg';
import { useState, useEffect } from 'react';

const Navigation = () => {
  let size;
  function GetSize() {
    size = useWindowSize();
    console.log(size.width < 500 ? true : false);
    return size;
  }

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener('resize', handleResize);
      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
  }

  GetSize();

  return (
    <>
      <nav className='navigation'>
        {size.width > 500 ? (
          <>
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
          </>
        ) : (
          <img alt='Menu button' src={hamburgerIcon} className='menu--button' />
        )}
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;

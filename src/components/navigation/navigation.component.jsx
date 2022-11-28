import './navigation.styles.scss';
import { useState, useEffect, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { UserContext } from '../../context/user.context';
import hamburgerIcon from '../../assets/icons/hamburger-icon.svg';
import closeIcon from '../../assets/icons/close-icon.svg';
import Button from '../button/button.component';
import Icon from '../icon/icon.component';

const Navigation = () => {
  const { isActive, setIsActive } = useContext(UserContext);

  let size;
  function GetSize() {
    size = useWindowSize();
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

  const turnOn = () => {
    setIsActive(true);
  };

  const turnOff = () => {
    setIsActive(false);
  };

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
          <Button className='button--menu' onClick={() => turnOn()}>
            <Icon src={hamburgerIcon} alt='Menu button' className='icon-btn' />
          </Button>
        )}
      </nav>
      <Outlet />
      {isActive ? (
        <div className='mobile-menu'>
          <Button className='button--menu btn--right' onClick={() => turnOff()}>
            <Icon alt='Close modal' src={closeIcon} className='icon-btn' />
          </Button>

          <div className='mobile-view__container'>
            <Link
              to='/'
              className='navigation__link navigation__link--mobile'
              onClick={() => turnOff()}
            >
              Acasa
            </Link>
            <Link
              to='/albums'
              className='navigation__link navigation__link--mobile'
              onClick={() => turnOff()}
            >
              Albume
            </Link>
            <Link
              to='/about'
              className='navigation__link navigation__link--mobile'
              onClick={() => turnOff()}
            >
              Despre
            </Link>
            <Link
              to='/contact'
              className='navigation__link navigation__link--mobile'
              onClick={() => turnOff()}
            >
              Contact me
            </Link>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Navigation;

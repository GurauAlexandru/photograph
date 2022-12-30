import './navigation.styles.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';
import hamburgerIcon from '../../assets/icons/hamburger-icon.svg';
import closeIcon from '../../assets/icons/close-icon.svg';
import Button from '../button/button.component';
import Icon from '../icon/icon.component';
import DropdownContainer from '../dropdown-container/dropdown-container.component';
import DropdownMenu from '../dropdown-menu/dropdown-menu.component';

const Navigation = () => {
  const { isActive, setIsActive } = useContext(UserContext);

  const turnOn = () => {
    setIsActive(true);
  };

  const turnOff = () => {
    setIsActive(false);
  };

  return (
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
          Contact
        </Link>

        <Button
          className='button--menu button--mobile'
          onClick={() => turnOn()}
        >
          <Icon src={hamburgerIcon} alt='Menu button' className='icon-btn' />
        </Button>
      </nav>

      {isActive ? (
        <DropdownContainer>
          {
            <>
              <Button
                className='button--menu btn--right'
                onClick={() => turnOff()}
              >
                <Icon alt='Close modal' src={closeIcon} className='icon-btn' />
              </Button>
              <DropdownMenu>
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
              </DropdownMenu>
            </>
          }
        </DropdownContainer>
      ) : (
        ''
      )}
    </>
  );
};

export default Navigation;

import './header.styles.scss';
import Navigation from '../navigation/navigation.component';

const Header = ({ title }) => (
  <div className='header'>
    <div className='header__text'>
      <Navigation />
      <h1>{title}</h1>
    </div>
    <div className='header__picture'></div>
  </div>
);

export default Header;

// just a comment

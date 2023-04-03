import './header.styles.scss';

const Header = ({ header }) => (
  <div className='header'>
    <h3 className='h h--xLarge'>{header}</h3>
  </div>
);

export default Header;

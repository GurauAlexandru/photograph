import './header.styles.scss';

const Header = ({ img, alt, title, description, children }) => (
  <header className='header'>
    <section className='header__box'>
      <h1 className='h h--xLarge'>{title}</h1>
      <h3 className='h h--small handwrite'>{description}</h3>
      {children}
    </section>
    <section className='header__box'>
      <img src={img} className='header__image' alt={alt} />
    </section>
  </header>
);

export default Header;

import './mainHeader.styles.scss';

const MainHeader = ({ img, alt, title, description, children }) => (
  <header className='main-header'>
    <section className='main-header__box'>
      <h1 className='h h--mega'>{title}</h1>
      <h3 className='h h--small handwrite'>{description}</h3>
      {children}
    </section>
    <section className='main-header__box'>
      <img src={img} className='main-header__image' alt={alt} />
    </section>
  </header>
);

export default MainHeader;

import './footer.styles.scss';
import signagureLogo from '../../assets/icons/logo--black.png';
import facebookLogo from '../../assets/icons/facebook.svg';
import instagramLogo from '../../assets/icons/instagram.svg';

const Footer = () => (
  <footer className='footer'>
    <section className='footer__utils'>
      <img src={signagureLogo} alt='semnătura mea' className='footer__logo' />
      <h3 className='h h--small handwrite'>Fotograf profesionist</h3>
      <div className='container__social-buttons'>
        <a
          href='https://www.facebook.com/'
          className='social-icon'
          target='_blank'
          rel='noreferrer'
        >
          <img
            className='icon'
            alt='pictogramă facebook'
            src={facebookLogo}
          ></img>
        </a>
        <a
          href='https://www.instagram.com/'
          className='social-icon'
          target='_blank'
          rel='noreferrer'
        >
          <img
            className='icon'
            alt='pictogramă instagram'
            src={instagramLogo}
          ></img>
        </a>
      </div>
    </section>
    <section className='footer__disclamer'>
      <p className='p--footer'>
        Designer & developer |{' '}
        <a
          href='https://www.instagram.com/al.webdesign/'
          target='_blank'
          rel='noreferrer'
          className='designer'
        >
          Alexandru Gurău
        </a>
      </p>
      <p className='p--footer'>
        Acest site nu folosește cookies, și nici nu colectează date despre
        utilizatori
      </p>
      <p className='p--footer'>
        Copyright ©2023 | Toate drepturile sunt rezervate
      </p>
    </section>
  </footer>
);

export default Footer;

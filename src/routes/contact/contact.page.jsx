import './contact.styles.scss';
import Navigation from '../../components/navigation/navigation.component';
import wallpaper from '../../assets/images/wallpapers/Chat.jpg';

// Icons
import whatsappLogo from '../../assets/icons/WhatsAppButtonGreenLarge.svg';
import myLogo from '../../assets/icons/logo--black.png';
import emailLogo from '../../assets/icons/email.svg';
import phoneLogo from '../../assets/icons/phone.svg';
import facebookLogo from '../../assets/icons/facebook.svg';
import instagramLogo from '../../assets/icons/instagram.svg';

const ContactPage = () => {
  return (
    <>
      <Navigation />
      <div className='contact-page'>
        <div className='contact-page__imageBox'>
          <img
            src={wallpaper}
            alt='chat wallpaper'
            className='contact-page__image'
          />
        </div>
        <div className='contact-page__contactBox'>
          <div className='contact-page__contactBox--box'>
            <h3 className='h h--small'>Salut,</h3>
            <p className='paragraph'>
              Mă poți contacta cu un simplu click pe oricare pictogramă de mai
              jos:
            </p>

            <div className='container__contact-buttons'>
              <a href='mailto:fotograf@email.com' className='social-link'>
                <img alt='email' src={emailLogo} className='icon' /> Email
              </a>
              <a href='tel:0747111222' className='social-link'>
                <img alt='telefon' src={phoneLogo} className='icon' />{' '}
                0747111222
              </a>

              <a
                aria-label='Chat on WhatsApp'
                href='https://wa.me/+40747111222'
              >
                <img alt='Chat on WhatsApp' src={whatsappLogo} />
              </a>
            </div>

            <p className='paragraph'>De asemenea, imi poți da un follow pe:</p>
            <div className='container__social-buttons'>
              <a href='https://www.facebook.com/' className='social-icon'>
                <img
                  className='icon'
                  alt='pictogramă facebook'
                  src={facebookLogo}
                ></img>
              </a>
              <a href='https://www.instagram.com/' className='social-icon'>
                <img
                  className='icon'
                  alt='pictogramă instagram'
                  src={instagramLogo}
                ></img>
              </a>
            </div>

            <img src={myLogo} alt='semnatura mea' className='my-logo' />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;

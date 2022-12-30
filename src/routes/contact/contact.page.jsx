import './contact.styles.scss';
import Navigation from '../../components/navigation/navigation.component';
import wallpaper from '../../assets/images/wallpapers/Chat.jpg';
import whatsappLogo from '../../assets/icons/WhatsAppButtonGreenLarge.svg';
import myLogo from '../../assets/icons/logo--black.png';
import emailLogo from '../../assets/icons/email.svg';

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

            <div className='contact-page__contactBox--box__socialButtons'>
              <a
                aria-label='Chat on WhatsApp'
                href='https://wa.me/+40747111222'
              >
                <img alt='Chat on WhatsApp' src={whatsappLogo} />
              </a>

              <a href='mailto:fotograf@email.com' className='social-link'>
                <img alt='email' src={emailLogo} className='icon' /> Email
              </a>
            </div>

            <p className='paragraph'>De asemenea, imi poți da un follow pe:</p>

            <img src={myLogo} alt='semnatura mea' className='my-logo' />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;

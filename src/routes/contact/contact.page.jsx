import './contact.styles.scss';
import Header from '../../components/header/header.component';
import img from '../../assets/images/wallpaper-contact.jpg';
import whatsappLogo from '../../assets/icons/WhatsAppButtonGreenLarge.svg';
import messengerLogo from '../../assets/icons/messenger.svg';

const ContactPage = () => {
  return (
    <div className='contact-page'>
      <Header title='Contact me' img={img} />
      <main className='contact-page__main'>
        <a aria-label='Chat on WhatsApp' href='https://wa.me/+40747111222'>
          <img alt='Chat on WhatsApp' src={whatsappLogo} />
        </a>
        <a href='http://m.me/+40799980957'>
          <img alt='Chat on Messenger' src={messengerLogo} className='icon' />
        </a>
      </main>
    </div>
  );
};

export default ContactPage;

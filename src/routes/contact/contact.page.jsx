import './contact.styles.scss';
import Header from '../../components/header/header.component';
import img from '../../assets/images/wallpaper-contact.jpg';
import whatsappLogo from '../../assets/icons/WhatsAppButtonGreenLarge.svg';
import emailLogo from '../../assets/icons/email.svg';
// import messengerLogo from '../../assets/icons/messenger.svg'; //doesnt work

const ContactPage = () => {
  return (
    <div className='contact-page'>
      <Header title='Contactează-mă' img={img} />
      <main className='contact-page__main'>
        <section className='contact-page__program'>
          <h3 className='h h-large'>Salut, </h3>
          <p className='p contact-page__text'>
            Mă poți contacta de luni până vineri între orele 08:00 - 16:00 cu un
            simplu click pe oricare dintre pictogramele afișate.{' '}
          </p>
        </section>
        <section className='contact-page__messenger'>
          <a aria-label='Chat on WhatsApp' href='https://wa.me/+40747111222'>
            <img alt='Chat on WhatsApp' src={whatsappLogo} />
          </a>
          <a href='mailto:fotograf@email.com' className='social-link'>
            <img alt='Send me an email' src={emailLogo} className='icon' /> Send
            email
          </a>

          {/* <a href='http://m.me/alexandru.gurau.96'>
          <img alt='Chat on Messenger' src={messengerLogo} className='icon' />
        </a> */}
        </section>
      </main>
    </div>
  );
};

export default ContactPage;

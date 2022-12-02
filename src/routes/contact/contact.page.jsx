import './contact.styles.scss';
import Navigation from '../../components/navigation/navigation.component';
import Header from '../../components/header/header.component';

import img from '../../assets/images/wallpaper-contact-c.jpg';

import whatsappLogo from '../../assets/icons/WhatsAppButtonGreenLarge.svg';
import emailLogo from '../../assets/icons/email.svg';

const ContactPage = () => {
  return (
    <>
      <Navigation />
      <Header
        img={img}
        alt='img text'
        title='Contact page'
        description='welcome to contact page'
      />
      <div className='contact-page'>
        <main className='contact-page__main'>
          <section className='contact-page__program'>
            <h3 className='h h--large'>Salut, </h3>
            <p className='p contact-page__text'>
              Mă poți <span>contacta</span> de <span>luni</span> până{' '}
              <span>vineri</span> între orele <span>08:00</span> -{' '}
              <span>16:00</span> cu un simplu <span>click</span> pe oricare
              dintre pictogramele afișate.{' '}
            </p>
          </section>
          <section className='contact-page__messenger'>
            <a aria-label='Chat on WhatsApp' href='https://wa.me/+40747111222'>
              <img alt='Chat on WhatsApp' src={whatsappLogo} />
            </a>
            <a href='mailto:fotograf@email.com' className='social-link'>
              <img alt='Send me an email' src={emailLogo} className='icon' />{' '}
              Send email
            </a>
          </section>
        </main>
      </div>
    </>
  );
};

export default ContactPage;

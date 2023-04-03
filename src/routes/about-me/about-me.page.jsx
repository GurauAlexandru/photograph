import './about-me.styles.scss';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../../components/navigation/navigation.component';
import signagureLogo from '../../assets/icons/logo--black.png';
import Header from '../../components/header/header.component';

// Wallpapers
import wallpaper1 from '../../assets/images/wallpapers/wallpaper-despre--1.webp';
import wallpaper2 from '../../assets/images/wallpapers/wallpaper-despre--2.webp';
import wallpaper3 from '../../assets/images/wallpapers/wallpaper-despre--3.webp';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

const AboutPage = () => (
  <>
    <ScrollToTop />
    <section className='about'>
      <Navigation />
      <Header header='despre mine' />
      <article className='about__article' id='about-fotograf'>
        <div className='about__text'>
          <h3 className='h h--small'>Cel mai bun fotograf</h3>
          <p className='paragraph'>
            In peste 10 ani de activitate am obținut diverse distincții, care mă
            poziționează in topul celor mai buni fotografi din România.
          </p>
        </div>
        <img src={wallpaper1} alt='despre mine' className='about__image' />
      </article>
      <article
        className='about__article about__article--landscape'
        id='about-client'
      >
        <div className='about__text about__text--landscape'>
          <h3 className='h h--small'>Seriozitate și profesionalism</h3>
          <p className='paragraph'>
            Calitatea, seriozitatea, profesionalismul și experiența de peste 10
            ani în acest domeniu sunt atuurile care mă poziționează în această
            industrie.
          </p>
        </div>
        <img src={wallpaper2} alt='despre mine' className='about__image' />
      </article>
      <article className='about__article' id='about-rezultat'>
        <div className='about__text'>
          <h3 className='h h--small'>Cele mai bune rezultate</h3>
          <p className='paragraph'>
            Este obiectivul cu care mi-am început activitatea fotografică,
            obiectiv care mă dirijează în cariera mea de fotograf.
          </p>
        </div>
        <img src={wallpaper3} alt='despre mine' className='about__image' />
      </article>
      <img
        src={signagureLogo}
        alt='Semnatura fotograf'
        className='about__signature'
      />
    </section>
  </>
);

export default AboutPage;

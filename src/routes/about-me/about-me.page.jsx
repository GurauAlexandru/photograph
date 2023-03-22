import './about-me.styles.scss';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../../components/navigation/navigation.component';
import signagureLogo from '../../assets/icons/logo--black.png';

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
      <div className='about__header'>
        <h3 className='h h--xLarge'>despre mine</h3>
      </div>

      <article className='about__article' id='about-fotograf'>
        <div className='about__text'>
          <h3 className='h h--small'>Cel mai bun fotograf</h3>
          <p className='paragraph'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
            rerum vel, laudantium autem deleniti ex suscipit sunt rem veniam
            iure modi facere omnis ipsam id deserunt quam ab minus quis
            inventore animi fugit sint eos temporibus amet? Culpa, magnam
            delectus!
          </p>
        </div>
        <img src={wallpaper1} alt='despre mine' className='about__image' />
      </article>
      <article
        className='about__article about__article--landscape'
        id='about-client'
      >
        <div className='about__text about__text--landscape'>
          <h3 className='h h--small'>Orientat spre client</h3>
          <p className='paragraph'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            deleniti cumque recusandae sint quibusdam quidem ipsum nulla facere
            obcaecati non, repudiandae quos numquam molestias! Magni, sint
            placeat corrupti consequatur, officia repellat minima, repellendus
            debitis soluta molestias quas!
          </p>
        </div>
        <img src={wallpaper2} alt='despre mine' className='about__image' />
      </article>
      <article className='about__article' id='about-rezultat'>
        <div className='about__text'>
          <h3 className='h h--small'>Rezultate excelente</h3>
          <p className='paragraph'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
            harum sint aperiam qui earum suscipit modi quasi id quia voluptatum?
            Sed modi ipsa quo! Voluptates similique ducimus eveniet nesciunt,
            impedit error natus.
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

import './about-me.styles.scss';
import Navigation from '../../components/navigation/navigation.component';
import DespreComponent from '../../components/despre/despre.component';
import signagureLogo from '../../assets/icons/logo--black.png';

// Wallpapers
import wallpaper1 from '../../assets/images/wallpapers/wallpaper-despre--1.webp';
import wallpaper2 from '../../assets/images/wallpapers/wallpaper-despre--2.webp';
import wallpaper3 from '../../assets/images/wallpapers/wallpaper-despre--3.webp';

const AboutPage = () => (
  <section className='about'>
    <Navigation />
    <div className='about__header'>
      <h3 className='h h--xLarge'>despre mine</h3>
    </div>
    <div className='about__container'>
      <DespreComponent
        cls='about__article about__article--1'
        title='Cel mai bun fotograf'
        firstParagraph='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
          rerum vel, laudantium autem deleniti ex suscipit sunt rem veniam iure
          modi facere omnis ipsam id deserunt quam ab minus quis inventore animi
          fugit sint eos temporibus amet? Culpa, magnam delectus!'
        secondParagraph='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum,
          explicabo! Recusandae, animi quod pariatur laborum dolores voluptatum
          non numquam quibusdam, veniam, sint quo! Neque, similique?'
      />
      <DespreComponent
        cls='about__article about__article--2'
        title='Orientat spre client'
        firstParagraph='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
          rerum vel, laudantium autem deleniti ex suscipit sunt rem veniam iure
          modi facere omnis ipsam id deserunt quam ab minus quis inventore animi
          fugit sint eos temporibus amet?'
        secondParagraph='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum,
          explicabo! Recusandae, animi quod pariatur laborum dolores voluptatum
          non numquam quibusdam! Neque, similique?'
      />
      <DespreComponent
        cls='about__article about__article--3'
        title='Rezultate excelente'
        firstParagraph='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
          rerum vel, laudantium autem deleniti ex suscipit sunt rem veniam iure
          modi facere omnis ipsam id deserunt quam ab minus quis inventore animi
          fugit sint eos temporibus amet?'
        secondParagraph='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum,
          explicabo! Recusandae, animi quod pariatur laborum dolores voluptatum
          non numquam quibusdam! Neque, similique?'
      />
      <img
        src={wallpaper1}
        alt='despre mine'
        className='about__container__picture about__container__picture--1'
      />
      <img
        src={wallpaper2}
        alt='despre mine'
        className='about__container__picture about__container__picture--2'
      />
      <img
        src={wallpaper3}
        alt='despre mine'
        className='about__container__picture about__container__picture--3'
      />
      <img
        src={signagureLogo}
        alt='semnătura mea'
        className='about__container__logo'
      />
    </div>
  </section>
);

export default AboutPage;

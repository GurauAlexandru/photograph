import './home.styles.scss';
import { Link } from 'react-router-dom';
import Navigation from '../../components/navigation/navigation.component';
import MainHeader from '../../components/mainHeader/mainHeader.component';
import Title from '../../components/title/title.component';
import Container from '../../components/container/container.component';
import Boxes from '../../components/boxes/boxes.component';
import Box from '../../components/box/box.component';
import Banner from '../../components/banner/banner.component';
import PhotoColaje from '../../components/photo-colaj/photo-colaje.component';
import Portofoliu from '../../components/portofoliu/portofoliu.component';
import Footer from '../../components/footer/footer.component';

// Images
import img from '../../assets/poze/wallpaper--1.webp';
import wallpaperWelcome from '../../assets/poze/wallpaper--3.webp';

const HomePage = () => {
  return (
    <>
      <Navigation />
      <MainHeader
        img={img}
        alt='image alt'
        title='Florin Gireadă'
        description='Fotograf profesionist'
      />
      <Container>
        <section className='welcome'>
          <img
            src={wallpaperWelcome}
            alt='welcome to my website'
            className='welcome__image'
          />

          <div className='welcome__box'>
            <h3 className='h h--small h--mobile handwrite'>
              Momente de neuitat
            </h3>
            <p className='paragraph'>
              Iubirea, Increderea și prietenia sunt tainele celui mai frumos
              parcurs în doi, colectionand momente, zâmbete și împliniri spre a
              fi păstrate pentru totdeauna. Împreună astăzi înseamnă toată
              fericirea unei întregi vieți.
            </p>
          </div>
        </section>
      </Container>
      <Container>
        <Title firstTitle='De ce clienții' secondTitle='mă aleg pe mine?' />
        <Boxes>
          <Link to='/despre-mine' className='link-design'>
            <Box
              number='01'
              title='Cel mai bun fotograf'
              paragraph='In peste 10 ani de activitate am obținut diverse distincții, care mă poziționează in topul celor mai buni fotografi din România.'
            />
          </Link>

          <Link to='/despre-mine' className='link-design'>
            <Box
              number='02'
              title='Seriozitate și profesionalism'
              paragraph='Calitatea, seriozitatea, profesionalismul și experiența de peste 10 ani în acest domeniu sunt atuurile care mă poziționează în această industrie.'
            />
          </Link>
          <Link to='/despre-mine' className='link-design'>
            <Box
              number='03'
              title='Cele mai bune rezultate'
              paragraph='Este obiectivul cu care mi-am început activitatea fotografică, obiectiv care mă dirijează în cariera mea de fotograf.'
            />
          </Link>
        </Boxes>
      </Container>
      <Banner />
      <Container>
        <Title firstTitle='Cele mai noi poze' />
        <PhotoColaje />
      </Container>

      <Container>
        <Title firstTitle='Evenimente' />
        <Boxes>
          <Link to='/albume/nunti' className='link-design'>
            <Box
              number='01'
              title='Nunți'
              paragraph='Eleganța, romantismul și aspectele distractive ale zilei nunții tale sunt surprinse de la început până la sfârșit.'
            />
          </Link>
          <Link to='/albume/botezuri' className='link-design'>
            <Box
              number='02'
              title='Botezuri'
              paragraph='Nașterea unui copil este un moment ce aduce nespus de multă bucurie în viața oricărui cuplu, acest eveniment fiind rememorat cu drag de către întreaga familie tot restul vieții.'
            />
          </Link>

          <Link to='/albume/studio' className='link-design'>
            <Box
              number='03'
              title='Studio'
              paragraph='Dacă o imagine merită o mie de cuvinte, o imagine uimitoare a unui produs merită o mie de vizite pe site.'
            />
          </Link>
        </Boxes>
      </Container>
      <Container>
        <Title firstTitle='Portofoliu' />
        <Portofoliu />
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;

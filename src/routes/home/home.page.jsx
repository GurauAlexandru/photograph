import './home.styles.scss';
// import { Link } from 'react-router-dom';
import Navigation from '../../components/navigation/navigation.component';
import Header from '../../components/header/header.component';
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
      <Header
        img={img}
        alt='image alt'
        title='Florin Gireadă'
        description='Fotograf profesionist'
        // children={
        //   <Link to='/contact' className='button--cta'>
        //     Contactează-mă
        //   </Link>
        // }
      />
      <Container>
        <Title firstTitle='Fotografia' />
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
          <Box
            number='01'
            title='Cel mai bun fotograf'
            paragraph='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id at
              neque, perferendis voluptatum quam minus odit.'
          />
          <Box
            number='02'
            title='Orientat spre client'
            paragraph='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id at
              neque, perferendis voluptatum quam minus odit.'
          />
          <Box
            number='03'
            title='Rezultate excelente'
            paragraph='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id at
              neque, perferendis voluptatum quam minus odit.'
          />
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
          <Box
            number='01'
            title='Nunți'
            paragraph='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id at
              neque, perferendis voluptatum quam minus odit.'
          />
          <Box
            number='02'
            title='Botezuri'
            paragraph='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id at
              neque, perferendis voluptatum quam minus odit.'
          />
          <Box
            number='03'
            title='Familie'
            paragraph='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id at
              neque, perferendis voluptatum quam minus odit.'
          />
          <Box
            number='04'
            title='Studio'
            paragraph='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id at
              neque, perferendis voluptatum quam minus odit.'
          />
          <Box
            number='05'
            title='Produse'
            paragraph='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id at
              neque, perferendis voluptatum quam minus odit.'
          />
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

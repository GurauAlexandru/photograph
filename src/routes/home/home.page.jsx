import './home.styles.scss';
import Navigation from '../../components/navigation/navigation.component';
import Header from '../../components/header/header.component';
import Title from '../../components/title/title.component';
import Container from '../../components/container/container.component';
import Boxes from '../../components/boxes/boxes.component';
import Box from '../../components/box/box.component';
import img from '../../assets/images/wallpaper-home-c.jpg';
import Button from '../../components/button/button.component';
import Banner from '../../components/banner/banner.component';
import PhotoColaje from '../../components/photo-colaj/photo-colaje.component';

import wallpaperWelcome from '../../assets/images/wallpaper-welcome-c.jpg';

import img1 from '../../assets/images/wallpaper-contact-c.jpg';
import img2 from '../../assets/images/wallpaper-banner.jpg';
import img3 from '../../assets/images/wallpaper-albums-c.jpg';
import img4 from '../../assets/images/wallpaper-despre-c.jpg';
import img5 from '../../assets/images/wallpaper-home-c.jpg';
import img6 from '../../assets/images/wallpaper-welcome-c.jpg';

const HomePage = () => {
  return (
    <>
      <Navigation />
      <Header
        img={img}
        alt='image alt'
        title='Title'
        description='Welcome to home page'
        children={
          <Button
            className='button--cta'
            onClick={() => console.log('My work')}
          >
            My work
          </Button>
        }
      />
      <Container>
        <Title firstTitle='Title' />
        <section className='welcome'>
          <img
            src={wallpaperWelcome}
            alt='welcome to my website'
            className='welcome__image'
          />

          <div className='welcome__box'>
            <h3 className='h h--small h--mobile'>Title small</h3>
            <p className='paragraph'>Lorem ipsum dolor sit amet.</p>
            <p className='paragraph'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className='paragraph'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id at
              neque, perferendis voluptatum quam minus odit. Eaque voluptatem
              alias suscipit molestias. Voluptatibus, distinctio. Debitis,
              aliquam!
            </p>
          </div>
        </section>
      </Container>
      <Container>
        <Title firstTitle='De ce clienții' secondTitle='mă aleg pe mine?' />
        <Boxes>
          <Box
            number='01'
            title='First'
            paragraph='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id at
              neque, perferendis voluptatum quam minus odit.'
          />
          <Box
            number='02'
            title='Second'
            paragraph='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id at
              neque, perferendis voluptatum quam minus odit.'
          />
          <Box
            number='03'
            title='Third'
            paragraph='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id at
              neque, perferendis voluptatum quam minus odit.'
          />
        </Boxes>
      </Container>
      <Banner />
      <Container>
        <Title firstTitle='My work' />
        <PhotoColaje />
      </Container>

      <Container>
        <Title firstTitle='Servicii oferite' />
        <Boxes>
          <Box
            number='01'
            title='First'
            paragraph='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id at
              neque, perferendis voluptatum quam minus odit.'
          />
          <Box
            number='02'
            title='Second'
            paragraph='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id at
              neque, perferendis voluptatum quam minus odit.'
          />
          <Box
            number='03'
            title='Third'
            paragraph='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id at
              neque, perferendis voluptatum quam minus odit.'
          />
          <Box
            number='04'
            title='Forth'
            paragraph='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id at
              neque, perferendis voluptatum quam minus odit.'
          />
          <Box
            number='05'
            title='Fifth'
            paragraph='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id at
              neque, perferendis voluptatum quam minus odit.'
          />
        </Boxes>
      </Container>
      <Container>
        <Title firstTitle='Modal' />
        <section className='modal'>
          <img src={img1} alt='wallpaper' className='modal__image' />
          <img src={img2} alt='wallpaper' className='modal__image' />
          <img src={img3} alt='wallpaper' className='modal__image' />
          <img src={img4} alt='wallpaper' className='modal__image' />
          <img src={img5} alt='wallpaper' className='modal__image' />
          <img src={img6} alt='wallpaper' className='modal__image' />
        </section>
      </Container>
    </>
  );
};

export default HomePage;

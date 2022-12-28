import './home.styles.scss';
import Navigation from '../../components/navigation/navigation.component';
import Header from '../../components/header/header.component';
import Title from '../../components/title/title.component';
import Container from '../../components/container/container.component';
import Boxes from '../../components/boxes/boxes.component';
import Box from '../../components/box/box.component';
import Button from '../../components/button/button.component';
import Banner from '../../components/banner/banner.component';
import PhotoColaje from '../../components/photo-colaj/photo-colaje.component';
import Modal from '../../components/modal/modal.component';
import Footer from '../../components/footer/footer.component';

// Images
import img from '../../assets/poze/wallpaper--1.jpg';
import wallpaperWelcome from '../../assets/poze/wallpaper--3.jpg';

const HomePage = () => {
  return (
    <>
      <Navigation />
      <Header
        img={img}
        alt='image alt'
        title='Florin Gireada'
        description='Fotograf profesionist'
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
        <Modal />
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;

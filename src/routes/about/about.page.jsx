import './about.styles.scss';
import Navigation from '../../components/navigation/navigation.component';
import Container from '../../components/container/container.component';
import Box from '../../components/box/box.component';
import Images from '../../components/images/images.component';
import img from '../../assets/images/wallpaper-despre-c.jpg';
import logo from '../../assets/icons/logo--black.png';

const AboutPage = () => {
  return (
    <>
      <Navigation />
      <Container>
        <Box to='right'>
          {
            <>
              <img src={logo} alt='logo' className='logo' />
              <p className='p'>Lorem ipsum dolor sit amet.</p>
            </>
          }
        </Box>
        <Box to='left'>
          {<Images src={img} to='left' alt='about wallpaper' />}
        </Box>
      </Container>
    </>
  );
};

export default AboutPage;

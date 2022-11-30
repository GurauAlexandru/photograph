import './home.styles.scss';
import Navigation from '../../components/navigation/navigation.component';

import wallpaperWelcome from '../../assets/images/wallpaper-welcome-c.jpg';

import Container from '../../components/container/container.component';
import Box from '../../components/box/box.component';
import Images from '../../components/images/images.component';

import img from '../../assets/images/wallpaper-home-c.jpg';
import logo from '../../assets/icons/logo--black.png';

const HomePage = () => {
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
          {<Images src={img} to='left' dimension='big' alt='' />}
        </Box>
      </Container>
      <Container>
        <Box to='right'>
          {
            <Images
              src={wallpaperWelcome}
              to='right'
              alt='home wallpaper'
              dimension='small'
            />
          }
        </Box>
        <Box to='left'>
          {
            <div className='welcome__container welcome__container__text'>
              <h1 className='h h-xLarge'>
                THE <br /> SIMPLY <br /> HONESTY <br /> EXPRESSED <br /> ITSELF
              </h1>
            </div>
          }
        </Box>
      </Container>
    </>
  );
};

export default HomePage;

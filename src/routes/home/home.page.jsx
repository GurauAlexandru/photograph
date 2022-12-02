import './home.styles.scss';
import Navigation from '../../components/navigation/navigation.component';
import Header from '../../components/header/header.component';
import img from '../../assets/images/wallpaper-home-c.jpg';

// import wallpaperWelcome from '../../assets/images/wallpaper-welcome-c.jpg';

// import Images from '../../components/images/images.component';

const HomePage = () => {
  return (
    <>
      <Navigation />
      <Header
        img={img}
        alt='image alt'
        title='Title'
        description='Welcome to home page'
      />
    </>
  );
};

export default HomePage;

import './about.styles.scss';
import Navigation from '../../components/navigation/navigation.component';
import Header from '../../components/header/header.component';
import img from '../../assets/images/wallpaper-despre-c.jpg';

const AboutPage = () => {
  return (
    <>
      <Navigation />
      <Header
        img={img}
        alt='image alt'
        title='About page'
        description='Welcome to about page'
      />
    </>
  );
};

export default AboutPage;

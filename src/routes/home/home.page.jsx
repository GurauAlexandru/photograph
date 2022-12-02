import './home.styles.scss';
import Navigation from '../../components/navigation/navigation.component';
import Header from '../../components/header/header.component';
import Title from '../../components/title/title.component';
import img from '../../assets/images/wallpaper-home-c.jpg';

import wallpaperWelcome from '../../assets/images/wallpaper-welcome-c.jpg';

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
    </>
  );
};

export default HomePage;

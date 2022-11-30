import './home.styles.scss';
import Header from '../../components/header/header.component';
import img from '../../assets/images/wallpaper-home.jpg';
import wallpaperWelcome from '../../assets/images/wallpaper-welcome.jpg';

const HomePage = () => {
  return (
    <>
      <Header title='Acasă' img={img} />
      <section className='noname'>
        <h1 className='h h--big'>Welcome</h1>
      </section>
      <section className='welcome'>
        <div className='welcome__container'>
          <div
            className='welcome__picture'
            style={{ backgroundImage: `url("${wallpaperWelcome}")` }}
          ></div>
        </div>
        <div className='welcome__container welcome__container__text'>
          <h1 className='h h-xLarge'>
            THE <br /> SIMPLY <br /> HONESTY <br /> EXPRESSED <br /> ITSELF
          </h1>
        </div>
      </section>
    </>
  );
};

export default HomePage;

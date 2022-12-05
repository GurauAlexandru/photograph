import './banner.styles.scss';
import wallpaperBanner from '../../assets/poze/wallpaper--5.jpg';

const Banner = () => (
  <section className='banner'>
    <h2 className='h h--small'>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, non?
    </h2>
    <img
      src={wallpaperBanner}
      alt='wallpaper banner'
      className='banner__wallpaper'
    />
  </section>
);

export default Banner;

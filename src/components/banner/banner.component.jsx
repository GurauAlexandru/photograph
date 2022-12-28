import './banner.styles.scss';
import wallpaperBanner from '../../assets/poze/wallpaper--5.webp';

const Banner = () => (
  <section className='banner'>
    <h2 className='h h--small'>
      Viitorul aparține celor care cred în visele lor
    </h2>
    <img
      src={wallpaperBanner}
      alt='wallpaper banner'
      className='banner__wallpaper'
    />
  </section>
);

export default Banner;

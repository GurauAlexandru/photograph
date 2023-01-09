import './albums.styles.scss';
import Navigation from '../../components/navigation/navigation.component';
import Footer from '../../components/footer/footer.component';
import albumWallpaper from '../../assets/poze/wallpaper--albums.webp';
import brideWallaper from '../../assets/poze/wallpaper--bride.webp';

const AlbumsPage = () => {
  return (
    <>
      <Navigation />
      <main className='album-page'>
        <section className='album-preview'>
          <div className='album-preview__container'>
            <h1 className='h h--xLarge'>Albume foto</h1>
            <p className='paragraph'>
              Mai jos vei găsi linkurile catre albumele de nunți, botezuri, poze
              de produs, de familie, etc.
            </p>
          </div>
          <img
            src={brideWallaper}
            alt='album wallpaper 2'
            className='album-page__wallpaper'
          />
          <div className='album-preview__box'>
            <img
              src={albumWallpaper}
              alt='album wallpaper'
              className='album-preview__wallpaper'
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AlbumsPage;

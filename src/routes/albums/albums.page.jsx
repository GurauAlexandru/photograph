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
        <section className='album-welcome'>
          <div className='album-welcome__container'>
            <h1 className='h h--xLarge'>Albume foto</h1>
            <p className='paragraph'>
              Mai jos vei găsi linkurile catre albumele de nunți, botezuri, poze
              de produs, de familie, etc.
            </p>
          </div>
          <img
            src={brideWallaper}
            alt='album wallpaper 2'
            className='album-welcome__wallpaper'
          />
          <div className='album-welcome__box'>
            <img
              src={albumWallpaper}
              alt='album wallpaper'
              className='album-welcome__picture'
            />
          </div>
        </section>
        <section className='album-noName'>
          <div className='album-noName__bar'></div>
          <p className='paragraph'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            eveniet exercitationem unde eum nihil ipsum est officia doloribus
            reiciendis, deserunt voluptatibus praesentium earum. Autem
            temporibus pariatur nisi laborum officiis debitis vitae, unde modi
            velit ea.
          </p>
          <div className='album-noName__bar'></div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AlbumsPage;

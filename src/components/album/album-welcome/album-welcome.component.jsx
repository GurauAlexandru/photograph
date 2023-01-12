import './album-welcome.styles.scss';

const AlbumWelcome = ({ img, picture }) => (
  <section className='album-welcome'>
    <div className='album-welcome__container'>
      <h1 className='h h--xLarge'>Albume foto</h1>
      <p className='paragraph'>
        Mai jos vei găsi linkurile catre albumele de nunți, botezuri, poze de
        produs, de familie, etc.
      </p>
    </div>
    <img
      src={img}
      alt='album wallpaper 2'
      className='album-welcome__wallpaper'
    />
    <div className='album-welcome__box'>
      <img
        src={picture}
        alt='album wallpaper'
        className='album-welcome__picture'
      />
    </div>
  </section>
);

export default AlbumWelcome;

import './album-welcome.styles.scss';

const AlbumWelcome = ({ img, picture }) => (
  <section className='album-welcome'>
    <div className='album-welcome__container'>
      <h1 className='h h--xLarge'>albume foto</h1>
      <p className='paragraph'>
        Mai jos sunt afișate albume cu fotografii de la nunți, botezuri cât și
        cele făcute în studio.
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

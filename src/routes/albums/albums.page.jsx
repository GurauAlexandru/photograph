import './albums.styles.scss';
import Navigation from '../../components/navigation/navigation.component';
import Footer from '../../components/footer/footer.component';
// import nuntiImg from '../../assets/images/wallpaper-albums-c.jpg';

const AlbumsPage = () => {
  return (
    <>
      <Navigation />
      {/* <main className='album-page'>
        <section className='album-preview'>
          <div className='album-preview__container'>
            <h3 className='h h--big'>Nunti</h3>
          </div>
          <div className='album-preview__box'>
            <img
              className='album-preview__image'
              alt='poza nunta'
              src={nuntiImg}
            />
          </div>
        </section>

      </main> */}
      <Footer />
    </>
  );
};

export default AlbumsPage;

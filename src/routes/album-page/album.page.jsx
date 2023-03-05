import './album.styles.scss';
import Navigation from '../../components/navigation/navigation.component';
// import Footer from '../../components/footer/footer.component';
import AlbumPreview from '../../components/album/album-preview/album-preview.component';

const AlbumPage = () => {
  return (
    <>
      <Navigation />
      <main className='album-page'>
        <AlbumPreview firstName='Will' secondName='Jessica' />
        <AlbumPreview firstName='John' secondName='Anna' />
        <AlbumPreview firstName='Davin' secondName='Maria' />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default AlbumPage;

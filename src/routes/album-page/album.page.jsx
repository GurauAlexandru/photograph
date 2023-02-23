import './album.styles.scss';
import Navigation from '../../components/navigation/navigation.component';
import Footer from '../../components/footer/footer.component';

const AlbumPage = ({ header }) => {
  return (
    <>
      <Navigation />
      <h1>{header}</h1>
      <Footer />
    </>
  );
};

export default AlbumPage;

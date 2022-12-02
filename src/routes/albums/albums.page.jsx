import './albums.styles.scss';
import Navigation from '../../components/navigation/navigation.component';
import Header from '../../components/header/header.component';
import img from '../../assets/images/wallpaper-albums-c.jpg';

const AlbumsPage = () => {
  return (
    <>
      <Navigation />
      <Header
        img={img}
        alt='img text'
        title='Albums page'
        description='welcome to albums page'
      />
    </>
  );
};

export default AlbumsPage;

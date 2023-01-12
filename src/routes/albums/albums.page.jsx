import './albums.styles.scss';
import { Link } from 'react-router-dom';
import Navigation from '../../components/navigation/navigation.component';
import AlbumPreview from '../../components/album/album-preview/album-preview.component';
import AlbumWelcome from '../../components/album/album-welcome/album-welcome.component';
import Footer from '../../components/footer/footer.component';
import albumWallpaper from '../../assets/poze/wallpaper--albums.webp';
import brideWallaper from '../../assets/poze/wallpaper--bride.webp';
import nuntiPrev from '../../assets/poze/coperta/nunta--1.webp';
import botezPrev from '../../assets/poze/coperta/botez--1.webp';
import studioPrev from '../../assets/poze/coperta/studio--1.webp';

const AlbumsPage = () => {
  return (
    <>
      <Navigation />
      <main className='album-page'>
        <AlbumWelcome img={brideWallaper} picture={albumWallpaper} />
        <section className='album-box'>
          <div className='album-box__bar'></div>
          <p className='paragraph'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            eveniet exercitationem unde eum nihil ipsum est officia doloribus
            reiciendis, deserunt voluptatibus praesentium earum. Autem
            temporibus pariatur nisi laborum officiis debitis vitae, unde modi
            velit ea.
          </p>
          <div className='album-box__bar'></div>
        </section>
        <AlbumPreview
          img={nuntiPrev}
          alt='albume nunti'
          smallTitle='Lorem ipsum dolor sit amet.'
          title='Nunți'
          paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi corrupti
          blanditiis accusantium magni ipsa in! Molestias natus et officiis eaque!
          Quibusdam rerum tenetur laudantium consequuntur.'
          link={
            <Link to='/' className='link--album-prev'>
              Home
            </Link>
          }
        />

        <AlbumPreview
          img={botezPrev}
          alt='albume botez'
          smallTitle='Lorem ipsum dolor elit tenetur.'
          title='Botezuri'
          paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi corrupti
          blanditiis accusantium magni ipsa in! Molestias natus et officiis eaque!
          Quibusdam rerum tenetur laudantium consequuntur.'
          link={
            <Link to='/' className='link--album-prev'>
              Home
            </Link>
          }
        />
        <AlbumPreview
          img={studioPrev}
          alt='albume studio'
          smallTitle='Lorem ipsum dolor elit tenetur.'
          title='Studio'
          paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi corrupti
          blanditiis accusantium magni ipsa in! Molestias natus et officiis eaque!
          Quibusdam rerum tenetur laudantium consequuntur.'
          link={
            <Link to='/' className='link--album-prev'>
              Home
            </Link>
          }
        />
      </main>
      <Footer />
    </>
  );
};

export default AlbumsPage;

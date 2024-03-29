import './albume-overview.styles.scss';
import { Link } from 'react-router-dom';
import Navigation from '../../components/navigation/navigation.component';
import AlbumCollectionPreview from '../../components/album/album-collection-preview/album-collection-preview.component';
// import Header from '../../components/header/header.component';
import AlbumWelcome from '../../components/album/album-welcome/album-welcome.component';
import Footer from '../../components/footer/footer.component';
import albumWallpaper from '../../assets/poze/wallpaper--albums.webp';
import brideWallaper from '../../assets/poze/wallpaper--bride.webp';
import nuntiPrev from '../../assets/poze/coperta/nunta--1.webp';
import botezPrev from '../../assets/poze/coperta/botez--1.webp';
import studioPrev from '../../assets/poze/coperta/studio--1.webp';

const AlbumeOverview = () => {
  return (
    <>
      <Navigation />
      <main className='album-overview'>
        {/* <Header header='albume foto' /> */}
        <AlbumWelcome img={brideWallaper} picture={albumWallpaper} />
        <section className='album-box'>
          <div className='album-box__bar'></div>
          <p className='paragraph'>
            Cauți un fotograf profesionist pentru a realiza o ședință foto? Ai
            nevoie de un fotograf de nuntă sau de botez? Sau poate iți dorești o
            ședință foto de logodnă sau o sedință foto Trash the Dress? Nu ezita
            să mă{' '}
            <Link to='/contact' className='no-style'>
              {' '}
              contactezi!
            </Link>
          </p>
          <div className='album-box__bar'></div>
        </section>
        <AlbumCollectionPreview
          img={nuntiPrev}
          alt='albume nunti'
          smallTitle='Un "Da" hotărât.'
          title='Nunți'
          paragraph='Eleganța, romantismul și aspectele distractive ale zilei nunții tale sunt surprinse de la început până la sfârșit, pentru ca tu să păstrezi și să te bucuri de acele amintiri frumoase pentru totdeauna. Fotografiile reprezintă o poveste, pe care să o poți retrăi alături de persoana aleasă și s-o împărtășești cu cei dragi.'
          link={
            <Link to='/albume/nunti/' className='link--album-prev'>
              Vezi albumele
            </Link>
          }
        />

        <AlbumCollectionPreview
          img={botezPrev}
          alt='albume botez'
          smallTitle='Primul eveniment din viața bebelușului.'
          title='Botezuri'
          paragraph='Nașterea unui copil este un moment ce aduce nespus de multă bucurie în viața oricărui cuplu, acest eveniment fiind rememorat cu drag de către întreaga familie tot restul vieții.'
          link={
            <Link to='/albume/botezuri' className='link--album-prev'>
              Vezi albumele
            </Link>
          }
        />
        <AlbumCollectionPreview
          img={studioPrev}
          alt='albume studio'
          smallTitle='Orice fotografie spune o poveste.'
          title='Studio'
          paragraph='Dacă o imagine merită o mie de cuvinte, o imagine uimitoare a unui produs merită o mie de vizite pe site.'
          link={
            <Link to='/albume/studio/' className='link--album-prev'>
              Vezi albumele
            </Link>
          }
        />
      </main>
      <Footer />
    </>
  );
};

export default AlbumeOverview;

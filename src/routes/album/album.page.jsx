import './album.page.scss';
import Navigation from '../../components/navigation/navigation.component';

const AlbumPage = ({ event }) => {
  function getCurrentUrl() {
    return window.location.pathname;
  }

  const url = getCurrentUrl();
  const albumName = url.split('/')[3];

  const obj = event.find((el) => el.slug === albumName);

  return (
    <section>
      <Navigation />
      <div className='album-page'>
        <h1 className='h h--xLarge'>{obj.name} </h1>
      </div>
      <div className='album-page__container'>
        {obj.poze.map((el, i) => {
          return (
            <img src={el} key={i} className='album-page__img' alt={obj.name} />
          );
        })}
      </div>
    </section>
  );
};

export default AlbumPage;

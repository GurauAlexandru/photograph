import './album.styles.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/navigation/navigation.component';
import AlbumPreview from '../../components/album/album-preview/album-preview.component';

const AlbumPage = ({ event, title, leftBtn, rightBtn }) => {
  const [data, setData] = useState(event);

  useEffect(() => {
    async function fetchAPI() {
      let response = event;
      setData(response);
    }
    fetchAPI();
  }, [event]);

  return (
    <>
      <Navigation />
      <main className='album-page'>
        <div className='album-page__header'>
          <h1 className='h h--xLarge'>{title}</h1>
          <div className='album-page__link-box'>
            <Link to={`/albume/${leftBtn}/`} className='album-page__small-link'>
              {leftBtn.charAt(0).toUpperCase() + leftBtn.slice(1)}
            </Link>
            <div className='album-page__link-box--decoration'></div>
            <Link
              to={`/albume/${rightBtn}/`}
              className='album-page__small-link'
            >
              {rightBtn.charAt(0).toUpperCase() + rightBtn.slice(1)}
            </Link>
          </div>
        </div>
        {data.map((el) => {
          return (
            <AlbumPreview
              key={el.id}
              header={el.name}
              img1={el.poza1}
              img2={el.poza2}
              img3={el.poza3}
            />
          );
        })}
      </main>
    </>
  );
};

export default AlbumPage;

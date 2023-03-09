import './album-collections.styles.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/navigation/navigation.component';
import AlbumPreview from '../../components/album/album-preview/album-preview.component';

const AlbumCollections = ({ event, title, leftBtn, rightBtn }) => {
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
      <main className='album-collections'>
        <div className='album-collections__header'>
          <h1 className='h h--xLarge'>{title}</h1>
          <div className='album-collections__link-box'>
            <Link
              to={`/albume/${leftBtn}/`}
              className='album-collections__small-link'
            >
              {leftBtn.charAt(0).toUpperCase() + leftBtn.slice(1)}
            </Link>
            <div className='album-collections__link-box--decoration'></div>
            <Link
              to={`/albume/${rightBtn}/`}
              className='album-collections__small-link'
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
              img1={el.poze[0]}
              img2={el.poze[1]}
              img3={el.poze[2]}
              link={el.slug}
            />
          );
        })}
      </main>
    </>
  );
};

export default AlbumCollections;

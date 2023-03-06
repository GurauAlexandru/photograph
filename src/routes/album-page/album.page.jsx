import './album.styles.scss';
import { useEffect, useState } from 'react';
import Navigation from '../../components/navigation/navigation.component';
import AlbumPreview from '../../components/album/album-preview/album-preview.component';

const AlbumPage = ({ event }) => {
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
        {data.map((el) => {
          return (
            <AlbumPreview
              key={el.id}
              firstName={el.him}
              secondName={el.her}
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

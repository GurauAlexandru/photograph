import './albume.styles.scss';
import { Routes, Route } from 'react-router-dom';
import AlbumeOverview from '../albume-overview/albume-overview.page';
import AlbumPage from '../album-page/album.page';

const Albume = () => {
  return (
    <>
      <Routes>
        <Route index element={<AlbumeOverview />} />
        <Route path='/nunti' element={<AlbumPage header='Albume nunti' />} />
        <Route
          path='/botezuri'
          element={<AlbumPage header='Albume botezuri' />}
        />
        <Route path='/studio' element={<AlbumPage header='Albume studio' />} />
      </Routes>
    </>
  );
};

export default Albume;

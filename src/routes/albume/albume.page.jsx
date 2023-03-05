import './albume.styles.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import AlbumeOverview from '../albume-overview/albume-overview.page';
import AlbumPage from '../album-page/album.page';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Albume = () => {
  return (
    <>
      <ScrollToTop />
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

import './albume.styles.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import AlbumeOverview from '../albume-overview/albume-overview.page';
import AlbumPage from '../album-page/album.page';

import { dbAlbumeNunti } from '../../utils/dbAlbumeNunti.js';
import { dbAlbumeBotezuri } from '../../utils/dbAlbumeBotezuri.js';
import { dbAlbumeStudio } from '../../utils/dbAlbumeStudio.js';

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
        <Route path='/nunti' element={<AlbumPage event={dbAlbumeNunti} />} />
        <Route
          path='/botezuri'
          element={<AlbumPage event={dbAlbumeBotezuri} />}
        />
        <Route path='/studio' element={<AlbumPage event={dbAlbumeStudio} />} />
      </Routes>
    </>
  );
};

export default Albume;

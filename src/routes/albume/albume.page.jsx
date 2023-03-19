import './albume.styles.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import AlbumeOverview from '../albume-overview/albume-overview.page';
import AlbumCollections from '../album-collections/album-collections.page';
import GalleryPage from '../gallery/gallery.page';

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
        <Route
          path='/nunti'
          element={
            <AlbumCollections
              title='Albume nunți'
              event={dbAlbumeNunti}
              leftBtn='botezuri'
              rightBtn='studio'
            />
          }
        />
        <Route
          path='/nunti/*'
          element={<GalleryPage event={dbAlbumeNunti} />}
        />
        <Route
          path='/botezuri'
          element={
            <AlbumCollections
              title='Albume botezuri'
              event={dbAlbumeBotezuri}
              leftBtn='nunti'
              rightBtn='studio'
            />
          }
        />
        <Route
          path='/botezuri/*'
          element={<GalleryPage event={dbAlbumeBotezuri} />}
        />
        <Route
          path='/studio'
          element={
            <AlbumCollections
              title='Albume studio'
              event={dbAlbumeStudio}
              leftBtn='nunti'
              rightBtn='botezuri'
            />
          }
        />
        <Route
          path='/studio/*'
          element={<GalleryPage event={dbAlbumeStudio} />}
        />
      </Routes>
    </>
  );
};

export default Albume;

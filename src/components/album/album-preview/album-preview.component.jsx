import './album-preview.styles.scss';
import AlbumPreviewPicture from '../album-preview-picture/album-preview-picture.component';
import nuntiPrev from '../../../assets/poze/coperta/nunta--1.webp';
import pozaNunta1 from '../../../assets/poze/colaj/poza--1.webp';
import pozaNunta2 from '../../../assets/poze/colaj/poza--2.webp';

const AlbumPreview = () => {
  return (
    <>
      <section className='album-preview'>
        <h3 className='h h--small handwrite'>Will & Jessica</h3>
        <div className='album-preview__container'>
          <AlbumPreviewPicture imagine={nuntiPrev} alt='album title' />
          <AlbumPreviewPicture imagine={pozaNunta1} alt='album title' />
          <AlbumPreviewPicture imagine={pozaNunta2} alt='album title' />
        </div>
      </section>
    </>
  );
};

export default AlbumPreview;

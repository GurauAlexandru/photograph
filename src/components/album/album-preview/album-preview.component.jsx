import './album-preview.styles.scss';
import AlbumPreviewPicture from '../album-preview-picture/album-preview-picture.component';

const AlbumPreview = ({ firstName, secondName, img1, img2, img3 }) => {
  return (
    <>
      <section className='album-preview'>
        <h3 className='h h--small handwrite'>
          {firstName} & {secondName}
        </h3>
        <div className='album-preview__container'>
          <AlbumPreviewPicture
            imagine={img1}
            alt={`Poza ${firstName} & ${secondName}`}
          />
          <AlbumPreviewPicture
            imagine={img2}
            alt={`Poza ${firstName} & ${secondName}`}
          />
          <AlbumPreviewPicture
            imagine={img3}
            alt={`Poza ${firstName} & ${secondName}`}
          />
        </div>
      </section>
    </>
  );
};

export default AlbumPreview;

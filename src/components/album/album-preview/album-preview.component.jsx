import './album-preview.styles.scss';
import { Link } from 'react-router-dom';
import AlbumPreviewPicture from '../album-preview-picture/album-preview-picture.component';

const AlbumPreview = ({ header, img1, img2, img3, link }) => {
  return (
    <>
      <Link to={link} className='album-preview'>
        <h3 className='h h--small handwrite'>{header}</h3>
        <div className='album-preview__container'>
          <AlbumPreviewPicture imagine={img1} alt={`Poza ${header}`} />
          <AlbumPreviewPicture imagine={img2} alt={`Poza ${header}`} />
          <AlbumPreviewPicture imagine={img3} alt={`Poza ${header}`} />
        </div>
      </Link>
    </>
  );
};

export default AlbumPreview;

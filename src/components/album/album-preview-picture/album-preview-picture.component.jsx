import './album-preview-picture.styles.scss';

const AlbumPreviewPicture = ({ imagine, alt }) => {
  return (
    <div className='album-preview--picture'>
      <img src={imagine} alt={alt} className='album-preview--img' />;
    </div>
  );
};

export default AlbumPreviewPicture;

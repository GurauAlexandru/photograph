import './album-collection-preview.styles.scss';

const AlbumCollectionPreview = ({
  img,
  alt,
  smallTitle,
  title,
  paragraph,
  link,
}) => (
  <section className='album-collection-preview'>
    <img src={img} alt={alt} className='album-collection-preview__img' />
    <div className='album-collection-preview__box'>
      <h3 className='h h--small'>{smallTitle}</h3>
      <h2 className='h--large'>{title}</h2>
      <p className='paragraph'>{paragraph}</p>
      {link}
    </div>
  </section>
);

export default AlbumCollectionPreview;

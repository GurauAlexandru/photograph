import './album-preview.styles.scss';

const AlbumPreview = ({ img, alt, smallTitle, title, paragraph, link }) => (
  <section className='album-preview'>
    <img src={img} alt={alt} className='album-preview__img' />
    <div className='album-preview__box'>
      <h3 className='h h--small'>{smallTitle}</h3>
      <h2 className='h--large'>{title}</h2>
      <p className='paragraph'>{paragraph}</p>
      {link}
    </div>
  </section>
);

export default AlbumPreview;

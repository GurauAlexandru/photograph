import './images.styles.scss';

const Images = ({ src, alt, to, dimension }) => (
  <img
    src={src}
    className={`image image__${to} image__${dimension}`}
    alt={alt}
  />
);

export default Images;

// delete

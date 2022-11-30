import './images.styles.scss';

const Images = ({ src, alt, to, dimension }) => (
  <img
    src={src}
    className={`image image__${to} image__${dimension}`}
    alt={alt}
  />
);

export default Images;

/**
 * setup for better responsive
 * maybe I have to refactor the entire design by adding a master container which will have a max-width
 */

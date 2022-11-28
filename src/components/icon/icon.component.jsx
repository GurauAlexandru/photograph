import './icon.styles.scss';

const Icon = ({ src, alt, ...otherProps }) => (
  <img alt={alt} src={src} {...otherProps} />
);

export default Icon;

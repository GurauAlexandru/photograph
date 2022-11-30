import './box.styles.scss';

const Box = ({ children, to }) => (
  <div className={`box box__${to}`}>{children}</div>
);

export default Box;

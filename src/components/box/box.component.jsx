import './box.styles.scss';

const Box = ({ number, title, paragraph }) => (
  <div className='box'>
    <h2 className='h--cart'>{number}</h2>
    <div className='box__content'>
      <h3 className='h h--small h--small__cart'>{title}</h3>
      <p className='paragraph'>{paragraph}</p>
    </div>
  </div>
);

export default Box;

import './title.styles.scss';

const Title = ({ firstTitle, secondTitle }) => (
  <div className='title'>
    <h1 className='h h--xLarge h--mobile'>{firstTitle}</h1>
    <h1 className='h h--xLarge h--mobile'>{secondTitle}</h1>
  </div>
);

export default Title;

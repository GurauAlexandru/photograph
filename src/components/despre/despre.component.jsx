import './despre.styles.scss';

const DespreComponent = ({ cls, title, firstParagraph, secondParagraph }) => (
  <article className={cls}>
    <h4 className='h h--large'>{title}</h4>
    <p className='paragraph'>{firstParagraph}</p>
    <p className='paragraph'>{secondParagraph}</p>
  </article>
);

export default DespreComponent;

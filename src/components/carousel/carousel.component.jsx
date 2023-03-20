import './carousel.styles.scss';
import Button from '../button/button.component';
import nextBtn from '../../assets/icons/next.svg';
import previousBtn from '../../assets/icons/previous.svg';

const Carousel = ({ name, image, nextButton, prevButton }) => {
  return (
    <section className='carousel'>
      <Button
        onClick={prevButton}
        className='carousel--btn carousel--btn__left'
      >
        <img
          src={previousBtn}
          alt='play next'
          className='carousel--btn__icon'
        />
      </Button>
      <img src={image} alt={name} className='carousel__image' />

      <Button
        onClick={nextButton}
        className='carousel--btn carousel--btn__right'
      >
        <img src={nextBtn} alt='play next' className='carousel--btn__icon' />
      </Button>
    </section>
  );
};

export default Carousel;

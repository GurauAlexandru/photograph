import './modal.styles.scss';

import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';

const Modal = () => (
  <section className='my-carousel'>
    <CarouselProvider
      naturalSlideWidth={400}
      naturalSlideHeight={700}
      orientation='horizontal'
      totalSlides={3}
    >
      <Slider>
        <Slide index={0}>I am the first Slide.</Slide>
        <Slide index={1}>I am the second Slide.</Slide>
        <Slide index={2}>I am the third Slide.</Slide>
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  </section>
);

// const Modal = ({ name, image, nextButton }) => {
//   return (
//     <section className='modal'>
//       <img src={image} alt={name} className='modal__image' />
//       <button onClick={nextButton}>Next</button>
//     </section>
//   );
// };

export default Modal;

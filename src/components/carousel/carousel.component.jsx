import './carousel.styles.scss';

// const Carousel = () => {
//   const slidesContainer = document.getElementById('slides-container');
//   const slide = document.querySelector('.slide');
//   const prevButton = document.getElementById('slide-arrow-prev');
//   const nextButton = document.getElementById('slide-arrow-next');

//   // nextButton.addEventListener('click', () => {
//   //   const slideWidth = slide.clientWidth;
//   //   slidesContainer.scrollLeft += slideWidth;
//   // });

//   // prevButton.addEventListener('click', () => {
//   //   const slideWidth = slide.clientWidth;
//   //   slidesContainer.scrollLeft -= slideWidth;
//   // });
//   return (
//     <section className='carousel'>
//       <div className='slider-wrapper'>
//         <button className='slide-arrow' id='slide-arrow-prev'>
//           &#8249;
//         </button>
//         <button className='slide-arrow' id='slide-arrow-next'>
//           &#8250;
//         </button>
//         <div className='slides-container' id='slides-container'>
//           <div className='slide'>1</div>
//           <div className='slide'>2</div>
//           <div className='slide'>3</div>
//           <div className='slide'>4</div>
//         </div>
//       </div>
//     </section>
//   );
// };

const Carousel = ({ name, image, nextButton }) => {
  return (
    <section className='carousel'>
      <img src={image} alt={name} className='carousel__image' />
      <button onClick={nextButton} className='button--next'>
        Next
      </button>
    </section>
  );
};

export default Carousel;

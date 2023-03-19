import './gallery.page.scss';
import { useState, useEffect, useContext } from 'react';
import Carousel from '../../components/carousel/carousel.component';
import Navigation from '../../components/navigation/navigation.component';
import Button from '../../components/button/button.component';
import closeIcon from '../../assets/icons/close-square.svg';
import { PicturesContext } from '../../context/pictures.context';

// NEED TO FIND CURRENT IMAGE IN THE ARRAY

const GalleryPage = ({ event }) => {
  const [picture, setPicture] = useState(null);
  const { currentPictures, setCurrentPictures } = useContext(PicturesContext);
  const [modal, setModal] = useState(false);
  let [num, setNum] = useState(0);

  const Increment = () => {
    if (num < currentPictures.length - 1) {
      return setNum(num + 1);
    } else {
      return setNum(0);
    }
  };

  // GET current url
  function getCurrentUrl() {
    return window.location.pathname;
  }
  const url = getCurrentUrl();
  const albumName = url.split('/')[3];
  const obj = event.find((el) => el.slug === albumName);

  // Get all pictures and target clicked one for carousel
  useEffect(() => {
    if (currentPictures === null) {
      const myPictures = document.querySelectorAll('.gallery-page__picture');
      return myPictures.forEach((el) => {
        el.addEventListener('click', (e) => {
          setPicture(e.target.src);
        });
      });
    }
  }, [modal, picture, currentPictures]);

  // Open carousel
  const openCarousel = () => {
    setModal(true);
    const pics = document.querySelectorAll('.gallery-page__picture');
    const images = Array.from(pics);
    setCurrentPictures(images);
  };

  // Close carousel
  // 1. with button
  const closeCarousel = () => {
    setPicture(() => null);
    setModal(false);
  };
  // 2. with key pres
  window.addEventListener('keydown', (e) => {
    e.preventDefault();
    if (e.key === 'Escape') {
      closeCarousel();
    }
  });

  useEffect(() => {
    // Show next carousel image
    const nextCarouselImage = () => {
      if (currentPictures !== null) {
        console.log(num);
        setPicture(currentPictures[num]?.src);
      }
    };
    return nextCarouselImage();
  }, [currentPictures, num]);

  return (
    <section className='gallery-section'>
      {modal === false ? (
        <>
          <Navigation />
          <div className='gallery-page'>
            <h1 className='h h--xLarge'>{obj.name} </h1>
          </div>
          <div className='gallery-page__container'>
            {obj.poze.map((el, i) => {
              return (
                <img
                  src={el}
                  key={i}
                  className='gallery-page__picture'
                  alt={obj.name}
                  onClick={openCarousel}
                />
              );
            })}
          </div>
        </>
      ) : (
        <>
          <section className='gallery-page__navigation-modal'>
            <Button
              id='button-close'
              className='button--close'
              onClick={closeCarousel}
            >
              <img
                src={closeIcon}
                alt='close modal icon'
                className='button--close__icon'
              />
            </Button>
          </section>
          <Carousel image={picture} nextButton={() => Increment()} />
        </>
      )}
    </section>
  );
};

export default GalleryPage;

import './gallery.page.scss';
import { useState, useEffect, useContext } from 'react';
import Carousel from '../../components/carousel/carousel.component';
import Navigation from '../../components/navigation/navigation.component';
import Button from '../../components/button/button.component';
import closeIcon from '../../assets/icons/close-square.svg';
import { PicturesContext } from '../../context/pictures.context';

const GalleryPage = ({ event }) => {
  const [picture, setPicture] = useState(null);
  const { currentPictures, setCurrentPictures } = useContext(PicturesContext);
  const [carousel, setCarousel] = useState(false);
  const [num, setNum] = useState(0);

  // Get all pictures and target clicked one for carousel
  useEffect(() => {
    const myPictures = document.querySelectorAll('.gallery-page__picture');

    return myPictures.forEach((el) => {
      el.addEventListener('click', (e) => {
        setPicture(e.target.src);
      });
    });
  }, [carousel, picture, currentPictures]);

  // Open carousel
  const openCarousel = () => {
    setCarousel(true);
    const pics = document.querySelectorAll('.gallery-page__picture');
    const images = Array.from(pics);
    setCurrentPictures(images);

    const idx = images?.findIndex((el) => el.src === picture);
    return setNum(idx);
  };

  const increment = () => {
    if (num < currentPictures.length - 1) {
      return setNum(num + 1);
    } else {
      return setNum(0);
    }
  };

  const decrement = () => {
    if (num === 0) {
      return setNum(currentPictures.length - 1);
    } else {
      return setNum(num - 1);
    }
  };

  // GET current url
  function getCurrentUrl() {
    return window.location.pathname;
  }
  const url = getCurrentUrl();
  const albumName = url.split('/')[3];
  const obj = event.find((el) => el.slug === albumName);

  // Close carousel
  // 1. with button
  const closeCarousel = () => {
    setPicture(() => null);
    setCarousel(false);
    setNum(0);
  };
  // 2. with key pres | this make browse slow
  // window.addEventListener('keydown', (e) => {
  //   e.preventDefault();
  //   switch (e.key) {
  //     case 'Escape':
  //       closeCarousel();
  //       break;
  //     case 'ArrowRight':
  //       increment();
  //       break;
  //     case 'ArrowLeft':
  //       decrement();
  //       break;
  //     default:
  //   }
  // });

  useEffect(() => {
    // Show carousel image
    const showImage = () => {
      if (currentPictures !== null) {
        setPicture(currentPictures[num]?.src);
      }
    };
    return showImage();
  }, [currentPictures, num]);

  return (
    <section className='gallery-section'>
      {carousel === false ? (
        <>
          <Navigation />
          <div className='gallery-title'>
            <h1 className='h h--xLarge'>{obj.name} </h1>
          </div>
          <div className='gallery-page'>
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
          <Carousel
            image={picture}
            nextButton={() => increment()}
            prevButton={() => decrement()}
          />
        </>
      )}
    </section>
  );
};

export default GalleryPage;

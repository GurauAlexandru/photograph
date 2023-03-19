import './album.page.scss';
import { useState, useEffect } from 'react';
import Modal from '../../components/modal/modal.component';
import Navigation from '../../components/navigation/navigation.component';
import Button from '../../components/button/button.component';
import closeIcon from '../../assets/icons/close-square.svg';

const AlbumPage = ({ event }) => {
  const [picture, setPicture] = useState(null);
  const [nextPicture, setNextPicture] = useState(null);
  const [modal, setModal] = useState(false);

  function getCurrentUrl() {
    return window.location.pathname;
  }

  const url = getCurrentUrl();
  const albumName = url.split('/')[3];
  const obj = event.find((el) => el.slug === albumName);

  useEffect(() => {
    const myPictures = document.querySelectorAll('.album-page__pictures');
    myPictures.forEach((el) => {
      el.addEventListener('click', (e) => {
        setPicture(e.target.src);
      });
    });
  }, [modal, picture]);

  const openModal = () => {
    setModal(true);
    const pics = document.querySelectorAll('.album-page__pictures');
    const images = Array.from(pics);
    let currentPicture = images.findIndex((el) => el.src === picture);

    if (currentPicture < images.length - 1) {
      setNextPicture(images[currentPicture + 1]);
    } else {
      setNextPicture(images[0]);
    }
    console.log(nextPicture);
  };

  const closeModal = () => {
    setPicture(() => null);
    setModal(false);
  };

  window.addEventListener('keydown', (e) => {
    e.preventDefault();
    if (e.key === 'Escape') {
      closeModal();
    }
  });

  // const nextImg = () => {
  //   setPicture(nextPicture.src);
  // };

  return (
    <section className='album-section'>
      {modal === false ? (
        <>
          <Navigation />
          <div className='album-page'>
            <h1 className='h h--xLarge'>{obj.name} </h1>
          </div>
          <div className='album-page__container'>
            {obj.poze.map((el, i) => {
              return (
                <img
                  src={el}
                  key={i}
                  className='album-page__pictures'
                  alt={obj.name}
                  onClick={openModal}
                />
              );
            })}
          </div>
        </>
      ) : (
        <>
          <Modal />
          {/* <section className='album-page__navigation-modal'>
            <Button
              id='button-close'
              className='button--close'
              onClick={closeModal}
            >
              <img
                src={closeIcon}
                alt='close modal icon'
                className='button--close__icon'
              />
            </Button>
          </section> */}
          {/* <Modal image={picture} nextButton={nextImg} /> */}
        </>
      )}
    </section>
  );
};

export default AlbumPage;

import './album.page.scss';
import { useState, useEffect } from 'react';
import Modal from '../../components/modal/modal.component';
import Navigation from '../../components/navigation/navigation.component';
import Button from '../../components/button/button.component';

const AlbumPage = ({ event }) => {
  const [picture, setPicture] = useState(null);
  const [modal, setModal] = useState(false);
  const [click, setClick] = useState(false);

  function getCurrentUrl() {
    return window.location.pathname;
  }

  const url = getCurrentUrl();
  const albumName = url.split('/')[3];
  const obj = event.find((el) => el.slug === albumName);

  useEffect(() => {
    const myPictures = document.querySelectorAll('.album-page__img');
    myPictures.forEach((el) => {
      el.addEventListener('click', (e) => {
        setPicture(e.target.src);
      });
    });
  }, [modal]);

  useEffect(() => {
    if (click) {
      const smallImages = document.querySelectorAll('.modal__small-images');
      smallImages.forEach((el) => {
        el.addEventListener('click', (e) => {
          setPicture(e.target.src);
        });
      });
    }
  }, [click, picture]);

  const openModal = () => {
    setModal(true);
    setClick(true);
  };

  const closeModal = () => {
    setPicture(() => null);
    setModal(false);
  };

  const changePicture = () => {
    return setClick(() => true);
  };

  window.addEventListener('keydown', (e) => {
    e.preventDefault();
    if (e.key === 'Escape') {
      closeModal();
    }
  });

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
                  className='album-page__img'
                  alt={obj.name}
                  onClick={openModal}
                />
              );
            })}
          </div>
        </>
      ) : (
        <>
          <Modal image={picture} />
          <div className='modal__preview'>
            {obj.poze.map((el, i) => {
              return (
                <img
                  src={el}
                  key={i}
                  alt={obj.name}
                  className='modal__small-images'
                  onClick={changePicture}
                />
              );
            })}
          </div>
          <section className='album-page__navigation-modal'>
            <Button className='button--close' onClick={closeModal}>
              Close
            </Button>
          </section>
        </>
      )}
    </section>
  );
};

export default AlbumPage;

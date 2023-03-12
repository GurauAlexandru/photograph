import './album.page.scss';
import { useState, useEffect } from 'react';
import Navigation from '../../components/navigation/navigation.component';
import Modal from '../../components/modal/modal.component';
import Button from '../../components/button/button.component';

const AlbumPage = ({ event }) => {
  const [picture, setPicture] = useState(null);
  const [pictures, setPictures] = useState([]);
  const [modal, setModal] = useState(false);
  // let curImg = picture;

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
    setPictures(myPictures);
  }, [obj, modal]);

  const openModal = () => {
    setModal(true);
  };

  const nextImg = () => {
    // const myPic = curImg.split('/');
    // const imgName = curImg.split('/')[7];

    // const arr = myPic.filter((el) => el !== imgName);
    // console.log(arr);
    console.log('dont work');
    console.log(pictures);
    // setPicture(
    //   `${arr[0]}//${arr[3]}/${arr[4]}/${arr[5]}/${arr[6]}/poza--${2}.webp`
    // );
  };
  const prevImg = () => {
    console.log('Prev img');
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

  return (
    <section>
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
          <Modal image={picture} rightBtn={nextImg} leftBtn={prevImg} />
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

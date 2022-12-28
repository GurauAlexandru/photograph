import './modal.styles.scss';

import img1 from '../../assets/poze/modal/poza--1.webp';
import img2 from '../../assets/poze/modal/poza--2.webp';
import img3 from '../../assets/poze/modal/poza--3.webp';
import img4 from '../../assets/poze/modal/poza--4.webp';
import img5 from '../../assets/poze/modal/poza--5.webp';
import img6 from '../../assets/poze/modal/poza--6.webp';

const imgs = [
  { img: img1, id: 1 },
  { img: img2, id: 2 },
  { img: img3, id: 3 },
  { img: img4, id: 4 },
  { img: img5, id: 5 },
  { img: img6, id: 6 },
];

const Modal = () => (
  <section className='modal'>
    {imgs.map((el) => (
      <img key={el.id} src={el.img} alt='wallpaper' className='modal__image' />
    ))}
  </section>
);

export default Modal;

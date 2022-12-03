import './modal.styles.scss';

import img1 from '../../assets/images/wallpaper-contact-c.jpg';
import img2 from '../../assets/images/wallpaper-banner.jpg';
import img3 from '../../assets/images/wallpaper-albums-c.jpg';
import img4 from '../../assets/images/wallpaper-despre-c.jpg';
import img5 from '../../assets/images/wallpaper-home-c.jpg';
import img6 from '../../assets/images/wallpaper-welcome-c.jpg';

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

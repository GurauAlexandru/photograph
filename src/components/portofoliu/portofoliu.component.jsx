import './portofoliu.styles.scss';

import img1 from '../../assets/poze/portofoliu/poza--1.webp';
import img2 from '../../assets/poze/portofoliu/poza--2.webp';
import img3 from '../../assets/poze/portofoliu/poza--3.webp';
import img4 from '../../assets/poze/portofoliu/poza--4.webp';
import img5 from '../../assets/poze/portofoliu/poza--5.webp';
import img6 from '../../assets/poze/portofoliu/poza--6.webp';

const imgs = [
  { img: img1, id: 1 },
  { img: img2, id: 2 },
  { img: img3, id: 3 },
  { img: img4, id: 4 },
  { img: img5, id: 5 },
  { img: img6, id: 6 },
];

const Portofoliu = () => (
  <section className='portofoliu'>
    {imgs.map((el) => (
      <img
        key={el.id}
        src={el.img}
        alt='wallpaper'
        className='portofoliu__image'
      />
    ))}
  </section>
);

export default Portofoliu;

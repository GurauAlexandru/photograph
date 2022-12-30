import './photo-colaje.styles.scss';

import colaj1 from '../../assets/poze/colaj/poza--1.webp';
import colaj2 from '../../assets/poze/colaj/poza--2.webp';
import colaj3 from '../../assets/poze/colaj/poza--3.webp';
import colaj4 from '../../assets/poze/colaj/poza--4.webp';
import colaj5 from '../../assets/poze/colaj/poza--5.webp';
import colaj6 from '../../assets/poze/colaj/poza--6.webp';
import colaj7 from '../../assets/poze/colaj/poza--7.webp';
import colaj8 from '../../assets/poze/colaj/poza--8.webp';

const PhotoColaje = () => (
  <section className='photo-colaje'>
    <div
      className='photo-colaje--1 photo-colaje__img'
      style={{ backgroundImage: `url(${colaj1})` }}
    ></div>
    <div className='photo-colaje--text-1'>
      <p className='paragraph'>"O poză face cât o mie de cuvinte."</p>
      <p className='paragraph'>(Proverb Chinezesc)</p>
    </div>
    <div
      className='photo-colaje--2 photo-colaje__img'
      style={{ backgroundImage: `url(${colaj2})` }}
    ></div>
    <div
      className='photo-colaje--3 photo-colaje__img'
      style={{ backgroundImage: `url(${colaj3})` }}
    ></div>
    <div
      className='photo-colaje--4 photo-colaje__img'
      style={{ backgroundImage: `url(${colaj4})` }}
    ></div>
    <div
      className='photo-colaje--5 photo-colaje__img'
      style={{ backgroundImage: `url(${colaj5})` }}
    ></div>
    <div
      className='photo-colaje--6 photo-colaje__img'
      style={{ backgroundImage: `url(${colaj6})` }}
    ></div>
    <div
      className='photo-colaje--7 photo-colaje__img'
      style={{ backgroundImage: `url(${colaj7})` }}
    ></div>
    <div
      className='photo-colaje--8 photo-colaje__img'
      style={{ backgroundImage: `url(${colaj8})` }}
    ></div>
  </section>
);

export default PhotoColaje;

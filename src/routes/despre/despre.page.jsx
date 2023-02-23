import './despre.styles.scss';
import Navigation from '../../components/navigation/navigation.component';
import signagureLogo from '../../assets/icons/logo--black.png';
import fotografFoto from '../../assets/images/wallpaper-photograph.jpg';

const DesprePage = () => {
  return (
    <>
      <Navigation />
      <section className='about-page'>
        <main className='about-page__container'>
          <h1 className='h h--mega'>Florin</h1>
          <h1 className='h h--mega'>Gireadă</h1>
          <article>
            <p className='paragraph'>
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eos
              accusantium dolore ratione mollitia quo. Accusamus nemo excepturi
              fuga aliquam ab pariatur. Maxime, molestias! Fugit iusto sit aut
              nobis quasi eligendi nihil cum consequatur alias!
            </p>
          </article>
          <article>
            <p className='paragraph'>
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eos
              accusantium dolore ratione mollitia quo. Accusamus nemo excepturi
              fuga aliquam ab pariatur. Maxime, molestias! Fugit iusto sit aut
              nobis quasi eligendi nihil cum consequatur alias!
            </p>
          </article>
          <img
            src={signagureLogo}
            alt='semnătura mea'
            className='about-page__logo'
          />
        </main>
        <div className='about-page__box'>
          <img
            src={fotografFoto}
            alt='poza fotografului'
            className='about-page__foto'
          />
        </div>
      </section>
    </>
  );
};

export default DesprePage;

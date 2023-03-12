import './modal.styles.scss';
import Button from '../button/button.component';

const Modal = ({ name, image, leftBtn, rightBtn }) => {
  return (
    <section className='modal'>
      <Button className='button--modal' onClick={leftBtn}>
        left
      </Button>
      <img src={image} alt={name} className='modal__image' />
      <Button className='button--modal' onClick={rightBtn}>
        right
      </Button>
    </section>
  );
};

export default Modal;

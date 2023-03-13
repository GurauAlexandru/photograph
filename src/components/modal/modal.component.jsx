import './modal.styles.scss';

const Modal = ({ name, image }) => {
  return (
    <section className='modal'>
      <img src={image} alt={name} className='modal__image' />
    </section>
  );
};

export default Modal;

import { useEffect } from 'react';
import { ModalStyled, Overlay } from './Modal.styled';
import PropTypes from 'prop-types';

const Modal = ({ largeFormat, onClose }) => {
  useEffect(() => {
    const eventModal = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', eventModal);
    return () => {
      window.removeEventListener('keydown', eventModal);
    };
  });

  const onClickBackdrop = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={onClickBackdrop}>
      <ModalStyled>
        <img src={largeFormat} alt="" />
      </ModalStyled>
    </Overlay>
  );
};

export default Modal;
Modal.propTypes = {
  largeFormat: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

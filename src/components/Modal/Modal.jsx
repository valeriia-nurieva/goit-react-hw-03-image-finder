import Modal from 'react-modal';
import { GrFormClose } from 'react-icons/gr';
import { ButtonClose } from './Modal.styled';
import PropTypes from 'prop-types';
const modalStyles = {
  content: {
    // top: '(50%)',
    // left: '50%',
    // right: 'auto',
    // bottom: 'auto',
    // marginRight: '-50%',
    // transform: 'translate(-50%, -50%)',
    top: '100px',
    left: '15px',
    bottom: '15px',
    right: '15px',
  },
};
Modal.setAppElement('#root');

export const ModalImage = ({ selectImage, resetImage }) => {
  return (
    <Modal
      isOpen={Boolean(selectImage)}
      onRequestClose={resetImage}
      style={modalStyles}
    >
      <ButtonClose onClick={resetImage}>
        <GrFormClose />
      </ButtonClose>
      <img src={selectImage} alt="Large" />
    </Modal>
  );
};

Modal.propTypes = {
  selectImage: PropTypes.string,
  resetImage: PropTypes.func,
};

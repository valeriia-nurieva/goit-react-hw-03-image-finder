import Modal from 'react-modal';
import PropTypes from 'prop-types';
const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
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
            <button onClick={resetImage}>close</button>
            <img src={selectImage} alt="Large" />
        </Modal>
    )
};

Modal.propTypes = {
    selectImage: PropTypes.string,
    resetImage: PropTypes.func,
};
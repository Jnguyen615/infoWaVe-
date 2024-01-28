import './Modal.scss';
import PropTypes from 'prop-types';

const Modal = ({ isOpen, closeModal, title, image, content, date, url }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-display" onClick={e => e.stopPropagation()}>
        <p className="modal-title">{title}</p>
        <button className="close-button" onClick={closeModal}>
          X{' '}
        </button>
        <img src={image} className="modal-image" alt={title} />
        <div className="modal-info">
          <p className="modal-content">{content}</p>
          <p className="modal-date">{new Date(date).toLocaleDateString()}</p>
          <a
            href={url}
            className="modal-url"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here for full article!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string])
    .isRequired,
  url: PropTypes.string.isRequired,
};

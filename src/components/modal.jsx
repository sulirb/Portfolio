import "./modal.scss";
import { Icon } from "@iconify/react";
import PropTypes from "prop-types";

function Modal({ setIsOpen, title, description }) {
  return (
    <>
      <div className="back" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h2 className="heading">{title}</h2>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <Icon icon="material-symbols:close" />
          </button>
          <div className="modalContent">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

Modal.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired,
};

export default Modal;

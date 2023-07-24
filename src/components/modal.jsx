import "./modal.scss";
import { Icon } from "@iconify/react";
import PropTypes from "prop-types";
import Tag from "./tag";

function Modal({ setIsOpen, title, pictures, description, tags, link }) {
  const mapPictures = pictures.map((url, index) => (
    <a key={index} href={url} target="_blank" rel="noreferrer">
      <img src={url} alt={`Image ${index + 1}`} />
    </a>
  ));
  return (
    <>
      <div className="back" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modal__header">
            <button
              className="modal__header-btn"
              onClick={() => setIsOpen(false)}
            >
              <Icon icon="material-symbols:close" />
            </button>
            <h2 className="modal__header-title">{title}</h2>
          </div>
          <div className="modal__content">
            <div className="infos">
              <h4>Description:</h4>
              <div className="infos__descr">
                {description.map((e, index) => (
                  <Tag key={index} tag={e} />
                ))}
              </div>
              <h4>Mots-clés: </h4>
              <div className="infos__tags">
                {tags.map((e, index) => (
                  <Tag key={index} tag={e} />
                ))}
              </div>
              <a href={link}>
                <button>Lien du site</button>
              </a>
            </div>
            <h4>Images du site: </h4>
            <div className="images">{mapPictures}</div>
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
  tags: PropTypes.array.isRequired,
  pictures: PropTypes.array.isRequired,
  link: PropTypes.string.isRequired,
};

export default Modal;

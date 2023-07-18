import "./modal.scss";
import { Icon } from "@iconify/react";
import PropTypes from "prop-types";
import Tag from "./tag";

function Modal({ setIsOpen, title, pictures, description, tags, link }) {
  console.log(pictures);
  const mapPictures = pictures.map((url, index) => (
    <a key={index} href={url}>
      <img src={url} alt={`Image ${index + 1}`} />
    </a>
  ));
  return (
    <>
      <div className="back" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modal__header">
            <h2 className="modal__header-title">{title}</h2>
            <button
              className="modal__header-btn"
              onClick={() => setIsOpen(false)}
            >
              <Icon icon="material-symbols:close" />
            </button>
          </div>
          <div className="modal__content">
            <div className="images">{mapPictures}</div>
            <div className="infos">
              <div className="infos__descr">
                {description.map((e, index) => (
                  <Tag key={index} tag={e} />
                ))}
              </div>
              <div className="infos__tags">
                {tags.map((e, index) => (
                  <Tag key={index} tag={e} />
                ))}
              </div>
              <a href={link}>
                <button>Lien</button>
              </a>
            </div>
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

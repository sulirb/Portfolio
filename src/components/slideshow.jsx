import { useState } from "react";
import { Icon } from "@iconify/react";
import Modal from "./modal";
import "./slideshow.scss";
import PropTypes from "prop-types";

function Slideshow({ logos, data }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? logos.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === logos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousIndex = (currentIndex - 1 + logos.length) % logos.length;
  const nextIndex = (currentIndex + 1) % logos.length;

  const previousImage = logos[previousIndex];
  const nextImage = logos[nextIndex];
  const currentImage = logos[currentIndex];
  const currentTitle = data[currentIndex].title;
  const currentDescription = data[currentIndex].description;
  const currentPictures = data[currentIndex].pictures;
  const currentTags = data[currentIndex].tags;
  const currentLink = data[currentIndex].link;

  return (
    <div className="chevron">
      <div className="chevron_left" onClick={previousSlide}>
        {<Icon icon="mdi:chevron-left" />}
      </div>
      <img
        className="chevron_logo-pn"
        src={previousImage}
        alt={`Picture ${currentIndex - 1}`}
      />
      <img
        className="chevron_logo"
        src={currentImage}
        alt={`Picture ${currentIndex} ${currentTitle}`}
        onClick={() => setIsOpen(true)}
      />
      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          title={currentTitle}
          pictures={currentPictures}
          description={currentDescription}
          link={currentLink}
          tags={currentTags}
        />
      )}
      <img
        className="chevron_logo-pn"
        src={nextImage}
        alt={`Picture ${currentIndex + 1}`}
      />
      <div className="chevron_right" onClick={nextSlide}>
        {<Icon icon="mdi:chevron-right" />}
      </div>
    </div>
  );
}

Slideshow.propTypes = {
  logos: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default Slideshow;

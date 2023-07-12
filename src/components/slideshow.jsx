import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "./slideshow.scss";
import PropTypes from "prop-types";

function Slideshow({ logos }) {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <div className="chevron">
      <div className="chevron_left" onClick={previousSlide}>
        {<BsChevronLeft />}
      </div>
      <img
        className="chevron_logo-pn"
        src={previousImage}
        alt={`Picture ${currentIndex - 1}`}
      />
      <img
        className="chevron_logo"
        src={currentImage}
        alt={`Picture ${currentIndex}`}
      />
      <img
        className="chevron_logo-pn"
        src={nextImage}
        alt={`Picture ${currentIndex + 1}`}
      />
      <div className="chevron_right" onClick={nextSlide}>
        {<BsChevronRight />}
      </div>
    </div>
  );
}

Slideshow.propTypes = {
  logos: PropTypes.array.isRequired,
};

export default Slideshow;

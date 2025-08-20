/* src/components/Carousel/Arrows.tsx */

import React from "react";
import styles from "../../styles/Other/Carousel.module.css";

interface ArrowsProps {
  prevSlide: () => void;
  nextSlide: () => void;
}

const Arrows: React.FC<ArrowsProps> = ({ prevSlide, nextSlide }) => {
  return (
    <>
      <button
        className={styles.arrowLeft}
        onClick={prevSlide}
        aria-label="Previous Slide"
        type="button"
      >
        &#10094;
      </button>

      <button
        className={styles.arrowRight}
        onClick={nextSlide}
        aria-label="Next Slide"
        type="button"
      >
        &#10095;
      </button>
    </>
  );
};

export default Arrows;


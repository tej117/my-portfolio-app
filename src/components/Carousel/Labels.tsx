/* src/components/Carousel/Labels.tsx */

import React from "react";
import styles from "../../styles/Carousel.module.css";
import { CarouselItem } from "./types";

interface LabelsProps {
  activeIndex: number;
  onClick: (index: number) => void;
  cardContent: CarouselItem[];
}

const Labels: React.FC<LabelsProps> = ({ activeIndex, onClick, cardContent }) => {
  return (
    <div className={styles.indicators}>
      {cardContent.map((item, idx) => (
        <span
          key={item.label ?? idx}
          className={`${styles.indicator} ${idx === activeIndex ? styles.active : ""}`}
          onClick={() => onClick(idx)}
          role="button"
          aria-label={`Show ${item.label}`}
        >
          {item.label}
        </span>
      ))}
    </div>
  );
};

export default Labels;


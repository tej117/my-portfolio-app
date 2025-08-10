/* src/components/Carousel/CardContent.tsx */

import React from "react";
import styles from "../../styles/Carousel.module.css";
import { CarouselItem } from "./types";

interface CardContentProps {
  activeIndex: number;
  cardContent: CarouselItem[];
}

const CardContent: React.FC<CardContentProps> = ({ activeIndex, cardContent }) => {
  const activeItem = cardContent[activeIndex];
  return (
    <div className={styles.cardContent}>
      {activeItem.imageSrc}
      <h2>{activeItem.title}</h2>
      <div>{activeItem.textContent}</div>
    </div>
  );
};

export default CardContent;

import React, { useRef, useState, useEffect } from 'react';
import styles from '../styles/Carousel.module.css';

interface CarouselItem {
  label: string;
  content: React.ReactNode;
}

interface CarouselProps {
  items: CarouselItem[];
  cardWidth?: number | string;
  showIndicators?: boolean;
  title?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  cardWidth = "100%",
  showIndicators = true,
  title,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Update activeIndex based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const scrollLeft = scrollRef.current.scrollLeft;
      let closestIdx = 0;
      let minDiff = Infinity;

      // Find the closest card based on scroll position
      scrollRef.current.childNodes.forEach((card: any, idx: number) => {
        const diff = Math.abs(card.offsetLeft - scrollLeft);
        if (diff < minDiff) {
          closestIdx = idx;
          minDiff = diff;
        }
      });

      setActiveIndex(closestIdx);
    };

    const scrollArea = scrollRef.current;
    scrollArea?.addEventListener('scroll', handleScroll);
    return () => scrollArea?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.carouselContainer}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <button className={styles.arrowLeft} onClick={() => scroll('left')}>←</button>

      <div className={styles.scrollArea} ref={scrollRef}>
        {items.map((item, index) => (
          <div
            key={index}
            className={styles.card}
            style={{ width: typeof cardWidth === 'number' ? `${cardWidth}px` : cardWidth }}
          >
            {item.content}
          </div>
        ))}
      </div>

      <button className={styles.arrowRight} onClick={() => scroll('right')}>→</button>

      {showIndicators && (
        <div className={styles.indicators}>
          {items.map((item, idx) => (
            <span
              key={idx}
              className={`${styles.indicator} ${idx === activeIndex ? styles.active : ''}`}
            >
              {item.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;

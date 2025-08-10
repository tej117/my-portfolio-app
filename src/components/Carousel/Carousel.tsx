import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/Carousel.module.css";
import { CarouselItem } from "./types";
import Labels from "./Labels";
import Arrows from "./Arrows";

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
    const itemsWithClones = [
      items[items.length - 1], // clone last at start
      ...items,
      items[0], // clone first at end
    ];

    const [activeIndex, setActiveIndex] = useState(1); // start at real first slide (index 1)
    const [viewportWidth, setViewportWidth] = useState<number>(
        typeof window !== "undefined" ? window.innerWidth : 0
    );
    const viewportRef = useRef<HTMLDivElement>(null);

    // Flag to prevent triggering smooth scroll when jumping clones
    const isJumpingRef = useRef(false);

    // Timeout ref for debounce of scroll event
    const scrollTimeoutRef = useRef<number | undefined>(undefined);

    const jumpToIndex = (index: number, scrollPos: number) => {
        if (!viewportRef.current) return;

        // Mark that we're jumping — suppress smooth scroll in useEffect
        isJumpingRef.current = true;

        // Instantly jump scrollLeft
        viewportRef.current.scrollLeft = scrollPos;

        // Set activeIndex right away (no setTimeout needed)
        setActiveIndex(index);

        // Keep jumping flag true for a short delay so useEffect skips smooth scroll
        setTimeout(() => {
            isJumpingRef.current = false;
        }, 100);
    };

    // Resize handler
    useEffect(() => {
        const handleResize = () => setViewportWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // On mount, scroll instantly to the real first slide (index 1)
    useEffect(() => {
        if (viewportRef.current) {
            viewportRef.current.scrollTo({
                left: viewportWidth,
                behavior: "auto",
            });
        }
    }, [viewportWidth]);

    // Scroll viewport when activeIndex changes, unless we're jumping (clone fix)
    useEffect(() => {
        if (viewportRef.current && !isJumpingRef.current) {
            viewportRef.current.scrollTo({
            left: activeIndex * viewportWidth,
            behavior: "smooth",
            });
        }
    // If isJumpingRef.current is true, do nothing to suppress smooth scroll
    }, [activeIndex, viewportWidth]);

    // Scroll event handler with debounce
    const handleScroll = () => {
        if (!viewportRef.current) return;

        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

        scrollTimeoutRef.current = window.setTimeout(() => {
            const scrollLeft = viewportRef.current!.scrollLeft;
            const currentIndex = Math.round(scrollLeft / viewportWidth);

            if (isJumpingRef.current) return; // Ignore during jump

            if (currentIndex === 0) {
                jumpToIndex(items.length, items.length * viewportWidth);
            } else if (currentIndex === itemsWithClones.length - 1) {
                jumpToIndex(1, viewportWidth);
            } else {
                if (activeIndex !== currentIndex) {
                    setActiveIndex(currentIndex);
                }
            }
        }, 100);
    };



  // Attach scroll event listener once viewportWidth is set
  useEffect(() => {
    const vp = viewportRef.current;
    if (!vp) return;
    vp.addEventListener("scroll", handleScroll);
    return () => {
      vp.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [viewportWidth]);

  // Arrow navigation - just increment or decrement activeIndex (no wrap needed)
  const prevSlide = () => setActiveIndex((prev) => prev - 1);
  const nextSlide = () => setActiveIndex((prev) => prev + 1);

  // Labels expect zero-based index for real slides, so offset by -1
  const labelActiveIndex = activeIndex - 1;

  // Clicking label sets activeIndex with +1 offset for clones
  const onLabelClick = (index: number) => setActiveIndex(index + 1);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselViewport} ref={viewportRef}>
        <div
          className={styles.scrollArea}
          style={{ width: `${itemsWithClones.length * viewportWidth}px` }}
        >
          {itemsWithClones.map((item, index) => (
            <div key={`${item.label}-${index}`} className={styles.card}>
              <h2 className={styles.title}>{item.title}</h2>
              <div className={styles.cardContent}>
                <div className={styles.textSide}>{item.textContent}</div>
                <div className={styles.imageSide}>{item.imageSrc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Arrows prevSlide={prevSlide} nextSlide={nextSlide} />
      <Labels
        activeIndex={labelActiveIndex}
        onClick={onLabelClick}
        cardContent={items}
      />
    </div>
  );
};

export default Carousel;

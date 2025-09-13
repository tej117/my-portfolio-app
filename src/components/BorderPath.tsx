// src/components/BorderPath.tsx

import React, { useRef, useEffect } from 'react';
import styles from '../styles/BorderPath.module.css';

const BorderPath: React.FC = () => {
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!pathRef.current || !svgRef.current) return;

    const path = pathRef.current;
    const svg = svgRef.current;

    const drawPath = () => {
      const height = document.body.scrollHeight; // full page height
      svg.setAttribute("height", height.toString());

      const segmentHeight = 160; // vertical straight segments
      const diagLength = 15; // diagonal length
      let d = `M 10 0`; // start at top, 10px from left
      let currentX = 10;
      let currentY = 0;
      let direction = 1;

      while (currentY < height) {
        // diagonal
        currentX += diagLength * direction;
        currentY += diagLength;
        d += ` L ${currentX} ${currentY}`;

        // vertical
        currentY += segmentHeight;
        d += ` L ${currentX} ${currentY}`;

        direction *= -1;
      }

      path.setAttribute("d", d);
    };

    drawPath();
    window.addEventListener("resize", drawPath);

    return () => window.removeEventListener("resize", drawPath);
  }, []);

  return (
    <svg ref={svgRef} className={styles.pathSvg} xmlns="http://www.w3.org/2000/svg">
      <path ref={pathRef} stroke="#39A247" strokeWidth="4" fill="none" />
    </svg>
  );
};

export default BorderPath;

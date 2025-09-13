// src/components/CircuitPath/CircuitPath.tsx

import React, { useRef, useEffect, useState } from 'react';
import styles from '../../styles/HomePage/CircuitPath.module.css';
import { PathSegment } from './PathData';

interface CircuitPathProps {
  isActive: boolean;
  segment: PathSegment;
}

const CircuitPath: React.FC<CircuitPathProps> = ({ isActive, segment }) => {
  const pathRef = useRef<SVGPathElement>(null);
  const [pathReady, setPathReady] = useState(false);

  const updatePath = () => {
    if (!pathRef.current) return;
    const coords = segment.getCoords();
    if (!coords.length) return;

    const pathD = coords.map((c, i) => `${i === 0 ? 'M' : 'L'} ${c.x} ${c.y}`).join(' ');
    pathRef.current.setAttribute('d', pathD);
  };

  useEffect(() => {
    if (!isActive) return;

    updatePath();

    // Animate stroke
    const path = pathRef.current!;
    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    const animation = path.animate(
      [{ strokeDashoffset: length }, { strokeDashoffset: 0 }],
      {
        duration: segment.duration || 6000,
        fill: 'forwards',
        easing: 'ease-in-out',
      }
    );

    setPathReady(true);

    // Update path on resize
    window.addEventListener('resize', updatePath);
    return () => {
      window.removeEventListener('resize', updatePath);
      animation.cancel();
    };
  }, [isActive, segment]);

  return (
    <svg className={styles.pathSvg} xmlns="http://www.w3.org/2000/svg">
      <path
        id={segment.id}
        ref={pathRef}
        stroke={segment.color || '#39A247'}
        strokeWidth={2}
        fill="none"
      />
      {pathReady && (
        <circle r={6} fill={segment.color || '#39A247'}>
          <animateMotion
            dur={`${(segment.duration || 6000) / 200}s`}
            repeatCount="indefinite"
          >
            <mpath href={`#${segment.id}`} />
          </animateMotion>
        </circle>
      )}
    </svg>
  );
};

export default CircuitPath;

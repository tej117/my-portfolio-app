// src/components/CircuitPath/CircuitPath.tsx

import React, { useRef, useEffect, useState, useMemo } from 'react';
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

    const pathD = coords
      .map((c, i) => `${i === 0 ? 'M' : 'L'} ${c.x} ${c.y}`)
      .join(' ');
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

  // stable spark configs per segment.id
  const sparkConfigs = useMemo(() => {
    return Array.from({ length: 5 }).map(() => ({
      offsetX: (Math.random() - 0.5) * 6,
      offsetY: (Math.random() - 0.5) * 6,
      size: Math.random() * 2 + 1.5,
      opacity: Math.random() * 0.6 + 0.4,
      delay: Math.random() * 0.2
    }));
  }, [segment.id]);

  return (
    <>
      <svg className={styles.pathSvgBehind} xmlns="http://www.w3.org/2000/svg">
        <path
          id={segment.id}
          ref={pathRef}
          stroke={segment.color || '#39A247'}
          strokeWidth={2}
          fill="none"
        />
      </svg>

      <svg className={styles.pathSvgAbove} xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {pathReady && (
          <>
            {/* Main Dot */}
            <circle
              r={6}
              fill={segment.color || '#4bd75eff'}
              filter="url(#glow)"
            >
              <animateMotion
                dur={`${(segment.duration || 6000) / 100}s`}
                repeatCount="indefinite"
              >
                <mpath href={`#${segment.id}`} />
              </animateMotion>
              <animate
                attributeName="r"
                values="5;7;5"
                dur="0.6s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Trailing Dots */}
            {[...Array(6)].map((_, i) => (
              <circle
                key={`trail-${i}`}
                r={4}
                fill={segment.color || '#4bd75eff'}
                opacity={0.6 - i * 0.1}
                filter="url(#glow)"
              >
                <animateMotion
                  dur={`${(segment.duration || 6000) / 100}s`}
                  repeatCount="indefinite"
                  begin={`${i * 0.05}s`}
                >
                  <mpath href={`#${segment.id}`} />
                </animateMotion>
                <animate
                  attributeName="r"
                  values="3;5;3"
                  dur="0.8s"
                  repeatCount="indefinite"
                />
              </circle>
            ))}

            {/* Random Sparks Around Dot */}
            {sparkConfigs.map((s, i) => (
              <g key={`spark-${i}`}>
                {/* Group follows the path */}
                <animateMotion
                  dur={`${(segment.duration || 6000) / 100}s`}
                  repeatCount="indefinite"
                  begin={`${s.delay}s`}
                >
                  <mpath href={`#${segment.id}`} />
                </animateMotion>

                {/* Circle jitters locally */}
                <circle
                  r={s.size}
                  fill={segment.color || '#4bd75eff'}
                  opacity={s.opacity}
                >
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values={`0,0; ${s.offsetX},${s.offsetY}; ${-s.offsetX},${-s.offsetY}; 0,0`}
                    dur="0.6s"
                    repeatCount="indefinite"
                    begin={`${s.delay}s`}
                  />
                </circle>
              </g>
            ))}
          </>
        )}
      </svg>
    </>
  );
};

export default CircuitPath;

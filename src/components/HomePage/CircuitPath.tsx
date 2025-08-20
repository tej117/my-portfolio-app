import React, { useRef, useEffect } from 'react';

import styles from '../../styles/HomePage/CircuitPath.module.css';

interface CircuitPathProps {
    isFirstDone: boolean;
    resumeRef: React.RefObject<HTMLDivElement | null>;
}

const CircuitPath: React.FC<CircuitPathProps> = ({ isFirstDone, resumeRef }) => {

    const pathRef = useRef<SVGPathElement>(null);

    // Position path relative to ResumeBth
    useEffect(() => {
        if (!isFirstDone || !resumeRef.current || !pathRef.current) return;

        const updatePath = () => {
            const rect = resumeRef.current!.getBoundingClientRect();

            // Start just *below* the button, centered
            const x = rect.left + rect.width / 2;
            const y = rect.bottom - 20 + window.scrollY; // Make sure path stays at top.

            const pathD = `
                M ${x} ${y}
                V ${y + 200}
                H ${x - 520}
                V ${y + 400}
            `;

            pathRef.current!.setAttribute("d", pathD);
        };


        // ensure browser has painted the button before measuring
        requestAnimationFrame(() => {
            updatePath();

            // Animate the path drawing
            const path = pathRef.current!;
            const length = path.getTotalLength();
            path.style.strokeDasharray = `${length}`;
            path.style.strokeDashoffset = `${length}`;
            path.animate(
                [
                    { strokeDashoffset: length }, 
                    { strokeDashoffset: 0 }
                ], 
                {
                    duration: 3000,
                    fill: 'forwards',
                    easing: 'ease-in-out',
                }
            );

            // Start the ball motion
            const anim = document.querySelector<SVGAnimateMotionElement>('circle animateMotion');
            if (anim) (anim as any).beginElement();
        });


        window.addEventListener("resize", updatePath);
        return () => {
            window.removeEventListener("resize", updatePath);
        };
    }, [isFirstDone, resumeRef]);

    return (
        <div>
            <svg className={styles.pathSvg} xmlns="http://www.w3.org/2000/svg">
                <path id="resumePath" ref={pathRef} stroke="#39A247" strokeWidth="2" fill="none" />
                <circle r="6" fill="#39A247">
                    <animateMotion dur="6s" repeatCount="indefinite">
                        <mpath href="#resumePath" />
                    </animateMotion>
                </circle>
            </svg>
        </div>
    )
}

export default CircuitPath;
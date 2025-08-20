import React, { useEffect, useRef } from "react";

interface TechnicalBackgroundProps {
  lineCount?: number;
  color?: string;
  opacity?: number;
  circleRadius?: number;
}

const TechnicalBackground: React.FC<TechnicalBackgroundProps> = ({
  lineCount = 10,
  color = "#ffffff",
  opacity = 0.2,
  circleRadius = 2,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const hexToRgba = (hex: string, alpha: number) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r},${g},${b},${alpha})`;
    };

    for (let i = 0; i < lineCount; i++) {
      // Start and end points
      const x1 = Math.random() * canvas.width;
      const y1 = Math.random() * canvas.height;
      const x2 = Math.random() * canvas.width;
      const y2 = Math.random() * canvas.height;

      // Decide if the line should be "jagged" (like a circuit)
      const jagged = Math.random() > 0.5;

      ctx.strokeStyle = hexToRgba(color, opacity);
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x1, y1);

      if (jagged) {
        // Insert a right-angle bend
        if (Math.random() > 0.5) {
          // Horizontal then vertical
          ctx.lineTo(x2, y1);
        } else {
          // Vertical then horizontal
          ctx.lineTo(x1, y2);
        }
      }

      ctx.lineTo(x2, y2);
      ctx.stroke();

      // Draw circles at endpoints
      ctx.fillStyle = hexToRgba(color, opacity);
      ctx.beginPath();
      ctx.arc(x1, y1, circleRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(x2, y2, circleRadius, 0, Math.PI * 2);
      ctx.fill();
    }
  }, [lineCount, color, opacity, circleRadius]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
};

export default TechnicalBackground;

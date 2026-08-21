import { useEffect, useRef } from 'react';

interface Node {
    x: number;
    y: number;
    connections: number[];
}

interface Pulse {
    nodeIndex: number;
    connectionIndex: number;
    progress: number;
    speed: number;
    opacity: number; 
}

const CircuitBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationId: number;
        let nodes: Node[] = [];
        let pulses: Pulse[] = [];

        const GRID_SPACING = 80;
        const PULSE_CHANCE = 0.012;   // chance per frame a new pulse spawns
        const LINE_OPACITY = 0.07;    // static line opacity
        const GREEN = '57, 162, 71';  // your #39a247 as RGB
        const BLUE = '86, 156, 214';  // editor blue as RGB

        const resize = () => {
            const dpr = window.devicePixelRatio || 1;

            const width = window.innerWidth;
            const height = window.innerHeight;

            canvas.width = width * dpr;
            canvas.height = height * dpr;

            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            // Reset transform before applying DPR scale
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            buildGraph();
        };

        const buildGraph = () => {
            nodes = [];
            pulses = [];

            const w = window.innerWidth;
            const h = window.innerHeight;

            // Responsive grid density
            const GRID_SPACING = w <= 500
                ? 55
                : w <= 900
                    ? 65
                    : 80;

            const cols = Math.ceil(w / GRID_SPACING);
            const rows = Math.ceil(h / GRID_SPACING);

            for (let row = 0; row <= rows; row++) {
                for (let col = 0; col <= cols; col++) {
                    nodes.push({
                        x: col * GRID_SPACING,
                        y: row * GRID_SPACING,
                        connections: [],
                    });
                }
            }

            const idx = (col: number, row: number) =>
                row * (cols + 1) + col;

            for (let row = 0; row <= rows; row++) {
                for (let col = 0; col <= cols; col++) {
                    const i = idx(col, row);

                    if (col < cols) {
                        nodes[i].connections.push(idx(col + 1, row));
                        nodes[idx(col + 1, row)].connections.push(i);
                    }

                    if (row < rows) {
                        nodes[i].connections.push(idx(col, row + 1));
                        nodes[idx(col, row + 1)].connections.push(i);
                    }
                }
            }
        };

        const spawnPulse = () => {
            // Pick a random node that has connections
            const eligible = nodes.filter(n => n.connections.length > 0);
            if (eligible.length === 0) return;
            const node = eligible[Math.floor(Math.random() * eligible.length)];
            const nodeIndex = nodes.indexOf(node);
            const connectionIndex = Math.floor(Math.random() * node.connections.length);
            pulses.push({
                nodeIndex,
                connectionIndex,
                progress: 0,
                speed: 0.008 + Math.random() * 0.012,
                opacity: 0,
            });
        };

        const draw = () => {
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

            // Draw static circuit lines
            ctx.lineWidth = 1.5;
            for (let i = 0; i < nodes.length; i++) {
                const node = nodes[i];
                for (const j of node.connections) {
                    if (j <= i) continue; // avoid drawing twice
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(${GREEN}, ${LINE_OPACITY})`;
                    ctx.moveTo(node.x, node.y);
                    ctx.lineTo(nodes[j].x, nodes[j].y);
                    ctx.stroke();
                }
            }

            // Draw nodes (junction dots)
            for (const node of nodes) {
                if (node.connections.length === 0) continue;
                ctx.beginPath();
                ctx.arc(node.x, node.y, 1.5, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${GREEN}, 0.15)`;
                ctx.fill();
            }

            // Draw and advance pulses
            pulses = pulses.filter(pulse => {
                const from = nodes[pulse.nodeIndex];
                const toIndex = from.connections[pulse.connectionIndex];
                const to = nodes[toIndex];

                const x = from.x + (to.x - from.x) * pulse.progress;
                const y = from.y + (to.y - from.y) * pulse.progress;

                // Glowing dot
                // Fade in for first 15%, fade out for last 15%
                if (pulse.progress < 0.15) {
                    pulse.opacity = pulse.progress / 0.15;
                } else if (pulse.progress > 0.85) {
                    pulse.opacity = (1 - pulse.progress) / 0.15;
                } else {
                    pulse.opacity = 1;
                }

                const gradient = ctx.createRadialGradient(x, y, 0, x, y, 10);
                const color = Math.random() > 0.85 ? BLUE : GREEN;
                gradient.addColorStop(0, `rgba(${color}, ${0.9 * pulse.opacity})`);
                gradient.addColorStop(0.4, `rgba(${color}, ${0.5 * pulse.opacity})`);
                gradient.addColorStop(1, `rgba(${color}, 0)`);
                ctx.beginPath();
                ctx.arc(x, y, 10, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();

                // Tail
                ctx.beginPath();
                ctx.strokeStyle = `rgba(${color}, ${0.6 * pulse.opacity})`;
                ctx.lineWidth = 2;
                const tailProgress = Math.max(0, pulse.progress - 0.15);
                ctx.moveTo(
                    from.x + (to.x - from.x) * tailProgress,
                    from.y + (to.y - from.y) * tailProgress
                );
                ctx.lineTo(x, y);
                ctx.stroke();

                pulse.progress += pulse.speed;

                // When pulse reaches destination, maybe continue to next node
                if (pulse.progress >= 1) {
                    const arrivedAt = toIndex;
                    const nextConnections = nodes[arrivedAt].connections;
                    if (nextConnections.length > 0 && Math.random() > 0.4) {
                        pulse.nodeIndex = arrivedAt;
                        pulse.connectionIndex = Math.floor(Math.random() * nextConnections.length);
                        pulse.progress = 0;
                        pulse.opacity = 0;
                        return true;
                    }
                    return false;
                }
                return true;
            });

            // Randomly spawn new pulses
            if (Math.random() < PULSE_CHANCE) spawnPulse();

            animationId = requestAnimationFrame(draw);
        };

        resize();
        draw();

        window.addEventListener('resize', resize);
        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0,
            }}
        />
    );
};

export default CircuitBackground;
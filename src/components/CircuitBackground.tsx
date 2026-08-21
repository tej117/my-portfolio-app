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

        const PULSE_CHANCE = 0.012;
        const LINE_OPACITY = 0.07;

        const GREEN = '57, 162, 71';
        const BLUE = '86, 156, 214';

        const getGridSpacing = () => {
            const width = window.innerWidth;

            if (width <= 500) return 55;
            if (width <= 900) return 65;
            return 80;
        };

        const getNodeRadius = () => {
            return window.innerWidth <= 500 ? 1 : 1.5;
        };

        const getPulseRadius = () => {
            return window.innerWidth <= 500 ? 7 : 10;
        };

        const getPulseSpeed = () => {
            if (window.innerWidth <= 500) {
                return 0.003 + Math.random() * 0.005;
            }

            return 0.004 + Math.random() * 0.006;
        };

        const buildGraph = () => {
            nodes = [];
            pulses = [];

            const w = window.innerWidth;
            const h = window.innerHeight;
            const GRID_SPACING = getGridSpacing();

            const cols = Math.ceil(w / GRID_SPACING);
            const rows = Math.ceil(h / GRID_SPACING);

            // Create nodes at every grid intersection
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

            // Connect nodes horizontally and vertically
            for (let row = 0; row <= rows; row++) {
                for (let col = 0; col <= cols; col++) {
                    const i = idx(col, row);

                    if (col < cols) {
                        const right = idx(col + 1, row);

                        nodes[i].connections.push(right);
                        nodes[right].connections.push(i);
                    }

                    if (row < rows) {
                        const down = idx(col, row + 1);

                        nodes[i].connections.push(down);
                        nodes[down].connections.push(i);
                    }
                }
            }
        };

        const spawnPulse = () => {
            const eligible = nodes.filter(
                node => node.connections.length > 0
            );

            if (eligible.length === 0) return;

            const node =
                eligible[Math.floor(Math.random() * eligible.length)];

            const nodeIndex = nodes.indexOf(node);
            const connectionIndex =
                Math.floor(Math.random() * node.connections.length);

            pulses.push({
                nodeIndex,
                connectionIndex,
                progress: 0,
                speed: getPulseSpeed(),
                opacity: 0,
            });
        };

        const resize = () => {
            const dpr = window.devicePixelRatio || 1;

            const width = window.innerWidth;
            const height = window.innerHeight;

            canvas.width = width * dpr;
            canvas.height = height * dpr;

            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            // Reset transform before applying DPR scaling.
            // Prevents scaling from compounding after repeated resizes.
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            buildGraph();
        };

        const draw = () => {
            const time = performance.now();
            const width = window.innerWidth;
            const height = window.innerHeight;

            ctx.clearRect(0, 0, width, height);

            const NODE_RADIUS = getNodeRadius();
            const PULSE_RADIUS = getPulseRadius();

            // Static circuit lines
            ctx.lineWidth = 1.5;

            for (let i = 0; i < nodes.length; i++) {
                const node = nodes[i];

                for (const j of node.connections) {
                    if (j <= i) continue;

                    ctx.beginPath();
                    ctx.strokeStyle =
                        `rgba(${GREEN}, ${LINE_OPACITY})`;

                    ctx.moveTo(node.x, node.y);
                    ctx.lineTo(nodes[j].x, nodes[j].y);
                    ctx.stroke();
                }
            }

            // Circuit junction dots
            for (const node of nodes) {
                if (node.connections.length === 0) continue;

                const fade = 0.5 + 0.5 * Math.sin(time * 0.0015 + node.x * 0.01 + node.y * 0.01);
                const opacity = 0.05 + fade * 0.12;

                ctx.beginPath();
                ctx.arc(
                    node.x,
                    node.y,
                    NODE_RADIUS,
                    0,
                    Math.PI * 2
                );

                ctx.fillStyle = `rgba(${GREEN}, ${opacity})`;
                ctx.fill();
            }

            // Moving pulses
            pulses = pulses.filter(pulse => {
                const from = nodes[pulse.nodeIndex];
                const toIndex =
                    from.connections[pulse.connectionIndex];
                const to = nodes[toIndex];

                const x =
                    from.x +
                    (to.x - from.x) * pulse.progress;

                const y =
                    from.y +
                    (to.y - from.y) * pulse.progress;

                // Fade pulse in/out
                if (pulse.progress < 0.15) {
                    pulse.opacity =
                        pulse.progress / 0.15;
                } else if (pulse.progress > 0.85) {
                    pulse.opacity =
                        (1 - pulse.progress) / 0.15;
                } else {
                    pulse.opacity = 1;
                }

                // Occasionally use blue instead of green
                const color =
                    Math.random() > 0.85
                        ? BLUE
                        : GREEN;

                // Glow
                const gradient =
                    ctx.createRadialGradient(
                        x,
                        y,
                        0,
                        x,
                        y,
                        PULSE_RADIUS
                    );

                gradient.addColorStop(
                    0,
                    `rgba(${color}, ${0.9 * pulse.opacity})`
                );

                gradient.addColorStop(
                    0.4,
                    `rgba(${color}, ${0.5 * pulse.opacity})`
                );

                gradient.addColorStop(
                    1,
                    `rgba(${color}, 0)`
                );

                ctx.beginPath();
                ctx.arc(
                    x,
                    y,
                    PULSE_RADIUS,
                    0,
                    Math.PI * 2
                );

                ctx.fillStyle = gradient;
                ctx.fill();

                // Pulse tail
                ctx.beginPath();

                ctx.strokeStyle =
                    `rgba(${color}, ${0.6 * pulse.opacity})`;

                ctx.lineWidth = 2;

                const tailProgress =
                    Math.max(
                        0,
                        pulse.progress - 0.15
                    );

                ctx.moveTo(
                    from.x +
                        (to.x - from.x) *
                            tailProgress,

                    from.y +
                        (to.y - from.y) *
                            tailProgress
                );

                ctx.lineTo(x, y);
                ctx.stroke();

                pulse.progress += pulse.speed;

                // Continue pulse from the next node
                if (pulse.progress >= 1) {
                    const arrivedAt = toIndex;
                    const nextConnections =
                        nodes[arrivedAt].connections;

                    if (
                        nextConnections.length > 0 &&
                        Math.random() > 0.4
                    ) {
                        pulse.nodeIndex = arrivedAt;

                        pulse.connectionIndex =
                            Math.floor(
                                Math.random() *
                                    nextConnections.length
                            );

                        pulse.progress = 0;
                        pulse.opacity = 0;

                        return true;
                    }

                    return false;
                }

                return true;
            });

            // Randomly spawn new pulses
            if (Math.random() < PULSE_CHANCE) {
                spawnPulse();
            }

            animationId =
                requestAnimationFrame(draw);
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
                width: '100vw',
                height: '100vh',
                pointerEvents: 'none',
                zIndex: 0,
            }}
        />
    );
};

export default CircuitBackground;
// src/components/SubwaySimulation.js
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
// Import the image directly - approach #2
import logoImage from "../assets/gw_logo_small.png"; // Adjust path as needed

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
`;

const Canvas = styled.canvas`
  max-width: 100%;
  max-height: 100%;
  display: block;
`;

const SubwaySimulation = () => {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const [logoLoaded, setLogoLoaded] = useState(false);
    const logoRef = useRef(null);

    // Approach #1: Load the image outside the animation loop
    useEffect(() => {
        // Create and load the image once when component mounts
        const logo = new Image();
        logo.onload = () => {
            logoRef.current = logo;
            setLogoLoaded(true);
        };
        logo.onerror = (e) => {
            console.error("Failed to load logo image", e);
        };
        
        // Approach #2: Using the imported image
        logo.src = logoImage;

        
        return () => {
            // Clean up
            logoRef.current = null;
        };
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // Resize handler
        const resizeCanvas = () => {
            const container = canvas.parentElement;
            const containerWidth = container.clientWidth;
            const containerHeight = container.clientHeight;

            // Set canvas resolution to match container
            canvas.width = containerWidth;
            canvas.height = containerHeight;

            // Optional: Redraw the entire simulation if needed
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };

        // Initial resize
        resizeCanvas();

        // Add resize listener
        window.addEventListener("resize", resizeCanvas);

        const width = canvas.width;
        const height = canvas.height;

        let lastTime = performance.now();

        // Configuration (mostly kept the same as before)
        const colors = ['#FF6319', '#6CBE45', '#808183', '#A626AA', '#EE0034', '#6E3219', '#00A1DE', '#0039A6', '#FCCC0A'];
        const numLines = 10;
        const radius = 25;
        const straightLength = 100;
        const turnProbability = 0.2;
        const angleStep = Math.PI / 36;
        const pixelsPerSecond = 30;
        const fadeSpeed = 0.01;
        const lines = [];

        // Generate subway lines (same as before)
        for (let i = 0; i < numLines; i++) {
            const color = colors[i % colors.length];
            const path = generatePath();
            const { segmentLengths, totalLength } = calculatePathLengths(path);
            lines.push({ color, path, currentIndex: 0, distanceDrawn: 0, opacity: 1, segmentLengths, totalLength });
        }

        // All previous helper functions remain the same (calculatePathLengths, generatePath)
        function calculatePathLengths(path) {
            const segmentLengths = [];
            let totalLength = 0;
            for (let i = 0; i < path.length - 1; i++) {
                const dx = path[i + 1].x - path[i].x;
                const dy = path[i + 1].y - path[i].y;
                const length = Math.sqrt(dx * dx + dy * dy);
                segmentLengths.push(length);
                totalLength += length;
            }
            return { segmentLengths, totalLength };
        }

        function generatePath() {
            // Same implementation as before
            const edge = Math.floor(Math.random() * 4);
            let x, y, direction;

            if (edge === 0) {
                x = 0;
                y = Math.random() * height;
                direction = 0;
            } else if (edge === 1) {
                x = Math.random() * width;
                y = 0;
                direction = Math.PI / 2;
            } else if (edge === 2) {
                x = width;
                y = Math.random() * height;
                direction = Math.PI;
            } else {
                x = Math.random() * width;
                y = height;
                direction = 3 * Math.PI / 2;
            }

            const path = [{ x, y }];
            let currentX = x;
            let currentY = y;
            let currentDirection = direction;

            while (currentX >= 0 && currentX <= width && currentY >= 0 && currentY <= height) {
                // Rest of the generation logic remains the same as in previous version
                if (Math.random() < turnProbability) {
                    // Turn logic
                    const turnAngle = Math.random() < 0.5 ? Math.PI / 4 : Math.PI / 2;
                    const turnDirection = Math.random() < 0.5 ? 1 : -1;
                    const sign = turnDirection;

                    const centerX = currentX + radius * (sign > 0 ? -Math.sin(currentDirection) : Math.sin(currentDirection));
                    const centerY = currentY + radius * (sign > 0 ? Math.cos(currentDirection) : -Math.cos(currentDirection));

                    const startAngle = currentDirection + (sign > 0 ? -Math.PI / 2 : Math.PI / 2);
                    const endAngle = startAngle + sign * turnAngle;

                    const numSteps = Math.ceil(turnAngle / angleStep);
                    for (let i = 1; i <= numSteps; i++) {
                        const t = i / numSteps;
                        const angle = startAngle + t * sign * turnAngle;
                        const px = centerX + radius * Math.cos(angle);
                        const py = centerY + radius * Math.sin(angle);
                        path.push({ x: px, y: py });
                    }

                    currentX = path[path.length - 1].x;
                    currentY = path[path.length - 1].y;
                    currentDirection += sign * turnAngle;
                    currentDirection = (currentDirection + 2 * Math.PI) % (2 * Math.PI);
                } else {
                    const dx = straightLength * Math.cos(currentDirection);
                    const dy = straightLength * Math.sin(currentDirection);
                    currentX += dx;
                    currentY += dy;
                    path.push({ x: currentX, y: currentY });
                }
            }

            return path;
        }

        // Animation loop
        function animate() {
            const currentTime = performance.now();
            const deltaTime = (currentTime - lastTime) / 1000;
            lastTime = currentTime;

            ctx.clearRect(0, 0, width, height);

            ctx.font = 'bold 2rem Helvetica';
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText("Welcome to my portfolio!", width / 2, height / 2);

            ctx.font = '1rem Helvetica';
            ctx.fillText("by Garrett Whitehead, 2025", width / 2, height / 2 + 25);

            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';

            // Draw the logo if it's loaded
            if (logoLoaded && logoRef.current) {
                const logo = logoRef.current;
                const scale = 0.6; // Adjust if needed for quality
                const width = logo.width * scale;
                const height = logo.height * scale;
                const x = canvas.width / 2 - width / 2;
                const y = canvas.height / 2 + 40;
                ctx.drawImage(logo, x, y, width, height);
            }

            lines.forEach((line, index) => {
                line.distanceDrawn += pixelsPerSecond * deltaTime;

                let accumulatedDistance = 0;
                let currentSegment = 0;
                let fraction = 0;
                let endDrawing = false;

                for (let i = 0; i < line.segmentLengths.length; i++) {
                    accumulatedDistance += line.segmentLengths[i];
                    if (line.distanceDrawn <= accumulatedDistance) {
                        currentSegment = i;
                        const segmentDistance = line.distanceDrawn - (accumulatedDistance - line.segmentLengths[i]);
                        fraction = segmentDistance / line.segmentLengths[i];
                        break;
                    }
                    if (i === line.segmentLengths.length - 1) {
                        endDrawing = true;
                    }
                }

                line.currentIndex = Math.min(currentSegment + 1, line.path.length - 1);

                ctx.beginPath();
                ctx.moveTo(line.path[0].x, line.path[0].y);

                if (line.distanceDrawn < line.totalLength) {
                    for (let j = 1; j <= currentSegment; j++) {
                        ctx.lineTo(line.path[j].x, line.path[j].y);
                    }

                    if (!endDrawing && currentSegment < line.path.length - 1) {
                        const x = line.path[currentSegment].x + fraction * (line.path[currentSegment + 1].x - line.path[currentSegment].x);
                        const y = line.path[currentSegment].y + fraction * (line.path[currentSegment + 1].y - line.path[currentSegment].y);
                        ctx.lineTo(x, y);
                    }
                } else {
                    for (let j = 1; j < line.path.length; j++) {
                        ctx.lineTo(line.path[j].x, line.path[j].y);
                    }
                }

                ctx.strokeStyle = line.color;
                ctx.lineWidth = 14;
                ctx.lineCap = 'round';
                ctx.globalAlpha = line.opacity * 0.65;
                ctx.stroke();
                ctx.globalAlpha = 1;

                if (line.distanceDrawn >= line.totalLength) {
                    line.opacity -= fadeSpeed;
                    if (line.opacity <= 0) {
                        const newColor = colors[Math.floor(Math.random() * colors.length)];
                        const newPath = generatePath();
                        const { segmentLengths, totalLength } = calculatePathLengths(newPath);
                        lines[index] = { color: newColor, path: newPath, currentIndex: 0, distanceDrawn: 0, opacity: 1, segmentLengths, totalLength };
                    }
                }
            });

            animationRef.current = requestAnimationFrame(animate);
        }

        // Start the animation
        animate();

        // Cleanup on unmount
        return () => {
            window.removeEventListener("resize", resizeCanvas);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [logoLoaded]); // Re-run effect when logoLoaded changes

    return (
        <CanvasContainer>
            <Canvas ref={canvasRef} />
        </CanvasContainer>
    );
};

export default SubwaySimulation;
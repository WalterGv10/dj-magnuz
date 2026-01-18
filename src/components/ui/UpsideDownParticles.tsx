"use client";

import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
}

export default function UpsideDownParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        let frameCount = 0;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createParticles = () => {
            // Aggressive reduction for mobile performance
            const isMobile = window.innerWidth < 768;
            const particleCount = isMobile
                ? Math.min(25, Math.floor(window.innerWidth * 0.06)) // Max 25 particles on mobile
                : Math.floor(window.innerWidth * 0.10);
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 1.5 + 0.5, // Smaller particles
                    speedX: (Math.random() - 0.5) * 0.2,
                    speedY: Math.random() * 0.3 + 0.1,
                    opacity: Math.random() * 0.3 + 0.1,
                });
            }
        };

        const drawParticles = () => {
            // Skip frames on mobile for better performance (30fps instead of 60fps)
            const isMobile = window.innerWidth < 768;
            if (isMobile && frameCount % 2 !== 0) {
                frameCount++;
                animationFrameId = requestAnimationFrame(drawParticles);
                return;
            }
            frameCount++;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p) => {
                ctx.fillStyle = `rgba(220, 180, 255, ${p.opacity})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();

                // Skip glow on mobile for performance
                if (!isMobile) {
                    ctx.shadowBlur = 3;
                    ctx.shadowColor = `rgba(255, 0, 204, ${p.opacity * 0.3})`;
                }

                // Update position
                p.x += p.speedX;
                p.y += p.speedY;

                // Wrap around
                if (p.y > canvas.height) p.y = 0;
                if (p.x > canvas.width) p.x = 0;
                if (p.x < 0) p.x = canvas.width;
            });

            animationFrameId = requestAnimationFrame(drawParticles);
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();
        createParticles();
        drawParticles();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[5] pointer-events-none opacity-40"
            style={{ willChange: 'auto' }}
        />
    );
}

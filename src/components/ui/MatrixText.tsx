'use client';

import { useEffect, useRef } from 'react';

interface MatrixTextProps {
    text: string;
    className?: string;
    glitchIntensity?: number;
}

export default function MatrixText({
    text,
    className = '',
    glitchIntensity = 0.1
}: MatrixTextProps) {
    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const element = textRef.current;
        if (!element) return;

        const chars = '!<>-_\\/[]{}—=+*^?#________ABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890';
        const originalText = text;
        let frame = 0;
        let animationId: number;

        const glitch = () => {
            if (Math.random() < glitchIntensity) {
                const glitchedText = originalText
                    .split('')
                    .map((char, index) => {
                        // Randomly glitch some characters
                        if (Math.random() < 0.1) {
                            return chars[Math.floor(Math.random() * chars.length)];
                        }
                        return char;
                    })
                    .join('');

                element.textContent = glitchedText;

                // Reset back to original after a short delay
                setTimeout(() => {
                    if (element) element.textContent = originalText;
                }, 50 + Math.random() * 100);
            }

            frame++;
            animationId = requestAnimationFrame(glitch);
        };

        animationId = requestAnimationFrame(glitch);

        return () => {
            cancelAnimationFrame(animationId);
        };
    }, [text, glitchIntensity]);

    return (
        <span ref={textRef} className={className}>
            {text}
        </span>
    );
}

'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface StorySectionProps {
    children: ReactNode;
    animation?: 'fade-up' | 'slide-left' | 'slide-right' | 'scale-in';
    delay?: number;
    className?: string;
}

export default function StorySection({
    children,
    animation = 'fade-up',
    delay = 0,
    className = ''
}: StorySectionProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('story-visible');
                        }, delay);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [delay]);

    return (
        <div
            ref={ref}
            className={`story-section story-${animation} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}

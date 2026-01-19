'use client';

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface GalleryImageProps {
    src: string;
    alt: string;
    className?: string;
    aspectRatio?: string;
    children?: React.ReactNode;
}

export default function GalleryImage({
    src,
    alt,
    className = "",
    aspectRatio = "aspect-[4/3]",
    children
}: GalleryImageProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={cn(
                "relative group overflow-hidden border border-purple-500/30 transition-all duration-500",
                "shadow-[0_0_15px_rgba(255,0,204,0.1)] hover:shadow-[0_0_35px_rgba(255,0,204,0.4)]",
                aspectRatio,
                className
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Decorative Corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent z-20 opacity-40 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-accent z-20 opacity-40 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-accent z-20 opacity-40 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent z-20 opacity-40 group-hover:opacity-100 transition-opacity" />

            {/* Main Image */}
            <div className="relative w-full h-full">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className={cn(
                        "object-cover transition-all duration-700 ease-out",
                        isHovered ? "scale-110 rotate-1 brightness-110 grayscale-0" : "scale-100 rotate-0 brightness-90 grayscale-[0.3]"
                    )}
                />

                {/* RGB Split Overlay (Only on hover) */}
                <div className={cn(
                    "absolute inset-0 z-10 pointer-events-none mix-blend-screen opacity-0 group-hover:opacity-40 transition-opacity duration-300",
                    "bg-[linear-gradient(90deg,rgba(255,0,0,0.5),rgba(0,255,0,0.5),rgba(0,0,255,0.5))]"
                )} style={{ backgroundSize: '300% 100%', animation: isHovered ? 'rgb-shift 2s linear infinite' : 'none' }} />
            </div>

            {/* Scanline Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] z-20 bg-[length:100%_3px,3px_100%] pointer-events-none opacity-50" />

            {/* Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 z-10 pointer-events-none" />

            {/* Hover Glint */}
            <div className={cn(
                "absolute inset-0 z-30 pointer-events-none bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full transition-transform duration-1000 ease-in-out",
                isHovered && "translate-x-full"
            )} />

            {children}

            <style jsx>{`
        @keyframes rgb-shift {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
        </div>
    );
}

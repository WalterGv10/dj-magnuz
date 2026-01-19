'use client';

import { cn } from "@/lib/utils";

interface VideoEmbedProps {
    url: string;
    title?: string;
    className?: string;
    aspectRatio?: string;
}

export default function VideoEmbed({
    url,
    title = "Video Embed",
    className = "",
    aspectRatio = "aspect-[9/16]" // Instagram Reels are vertical
}: VideoEmbedProps) {
    // Convert Instagram URL to embed URL if needed
    let embedUrl = url;
    if (url.includes('instagram.com/reel/') || url.includes('instagram.com/p/')) {
        const baseUrl = url.split('?')[0];
        embedUrl = `${baseUrl}${baseUrl.endsWith('/') ? '' : '/'}embed`;
    }

    return (
        <div className={cn(
            "relative w-full max-w-[400px] mx-auto overflow-hidden border border-purple-500/30 bg-black/40 backdrop-blur-md",
            "shadow-[0_0_30px_rgba(255,0,204,0.2)] hover:shadow-[0_0_50px_rgba(255,0,204,0.4)] transition-all duration-500",
            aspectRatio,
            className
        )}>
            {/* Decorative Corners */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-accent z-20" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-accent z-20" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-accent z-20" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-accent z-20" />

            <iframe
                src={embedUrl}
                title={title}
                allowTransparency={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
            />

            {/* Scanline Overlay (on top of iframe might be tricky, but let's try) */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] z-10 bg-[length:100%_4px] pointer-events-none opacity-20" />
        </div>
    );
}

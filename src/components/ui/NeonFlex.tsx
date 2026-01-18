
'use client';

export default function NeonFlex() {
    return (
        <div className="absolute inset-0 pointer-events-none z-0 flex flex-col justify-between py-10 opacity-60">
            {/* Top Neon Flex Line */}
            <div className="w-full h-1 md:h-2 bg-purple-600 rounded-full shadow-[0_0_15px_#a855f7,0_0_30px_#a855f7] animate-pulse"
                style={{ animationDuration: '3s' }} />

            {/* Vertical Side Accents (Hidden on mobile, visible on desktop) */}
            <div className="hidden md:block absolute top-0 left-0 w-1 h-full bg-cyan-500 rounded-full shadow-[0_0_15px_#06b6d4] opacity-40" />
            <div className="hidden md:block absolute top-0 right-0 w-1 h-full bg-red-600 rounded-full shadow-[0_0_15px_#dc2626] opacity-40" />

            {/* Bottom Neon Flex Line (Optional, maybe just top is enough for 'series'?) */}
            {/* Let's strictly do what user asked: 'Series of lights' -> multiple lines? */}
            {/* Let's add a few random horizontal lines in the background like laser beams */}

            <div className="absolute top-1/4 left-[-10%] w-[120%] h-[1px] bg-red-500 shadow-[0_0_10px_red] opacity-20 rotate-[-2deg]" />
            <div className="absolute top-3/4 left-[-10%] w-[120%] h-[1px] bg-purple-500 shadow-[0_0_10px_purple] opacity-20 rotate-[2deg]" />

        </div>
    );
}

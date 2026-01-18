
'use client';

export default function NeonFlex() {
    return (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Top Neon Flex Line */}
            <div className="w-full h-[2px] md:h-[3px] bg-gradient-to-r from-transparent via-purple-600 to-transparent shadow-[0_0_20px_#a855f7,0_0_40px_#a855f7] animate-pulse absolute top-0"
                style={{ animationDuration: '3s' }} />

            {/* Middle accent line */}
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-pink-500/30 to-transparent absolute top-1/2 -translate-y-1/2" />

            {/* Bottom Neon Flex Line */}
            <div className="w-full h-[2px] md:h-[3px] bg-gradient-to-r from-transparent via-red-600/60 to-transparent shadow-[0_0_15px_#dc2626] absolute bottom-0 animate-pulse"
                style={{ animationDuration: '4s' }} />

            {/* Vertical Side Accents (Optimized for mobile) */}
            <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent shadow-[0_0_10px_#06b6d4] absolute left-0 top-0" />
            <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-purple-500/40 to-transparent shadow-[0_0_10px_#a855f7] absolute right-0 top-0" />
        </div>
    );
}

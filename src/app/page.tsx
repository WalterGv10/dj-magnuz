import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

import UpsideDownParticles from "@/components/ui/UpsideDownParticles";

const ARTIST_DATA = {
  profile: {
    name: "DJ Magnuz",
    tagline: "El Emperador del Techno",
    bio: "Llevo 5 años como DJ en la escena electrónica y he tocado en varios clubes muy reconocidos de Guatemala. No me destaco con un género en especial porque me gusta conectar y complacer a mi público combinando diferentes estilos de mezcla con diferentes géneros al mismo tiempo, transformando un entorno único e inolvidable para mi gente.",
    evolution: "Iniciando en 2020 con las bases de la mezcla y evolucionando hasta un estilo pulido y profesional en la actualidad."
  },
  venues: [
    "The Box", "S1", "The Secret Garden", "La Pecera",
    "Tropicanas", "Dimensiones", "Nativos Xela"
  ],
  genres: [
    "Melodic Techno", "Minimal Techno", "Peak Techno",
    "Hard Techno", "Acid Techno"
  ],
  subGenres: [
    "Deep House", "Groove", "Afro House",
    "Funk House", "Zenonesque", "Psytech"
  ],
  techRider: {
    summary: "Versátil en equipamiento analógico y digital moderno.",
    gear: [
      "CDJ 200 (Análogo)", "CDJ 350", "CDJ 850",
      "CDJ 2000 Nexus", "CDJ 3000 Nexus"
    ]
  }
};

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center p-4 md:p-8 gap-8 md:gap-12 lg:gap-16 overflow-x-hidden relative">
      <UpsideDownParticles />

      {/* Turbulence Filter for Rift Effect */}
      <svg className="hidden">
        <filter id="turbulence">
          <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="15" />
        </filter>
      </svg>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center gap-4 text-center max-w-5xl z-10 mt-8 md:mt-12 lg:mt-0">

        {/* Kids on Bikes Silhouette - Nanobanana Transparent (Hero Top Center) */}
        <div className="absolute -top-16 md:-top-24 left-1/2 -translate-x-1/2 opacity-0 animate-in fade-in duration-1000 delay-500 fill-mode-forwards w-[180px] h-[50px] md:w-[300px] md:h-[90px] pointer-events-none z-0">
          <Image
            src="/stranger-things-nanobanana-transparent.png"
            alt="Stranger Things Kids with Nanobanana Transparent"
            fill
            className="object-contain"
          />
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-display font-bold tracking-tighter uppercase leading-[0.85] text-stranger-things relative z-10">
          DJ<br />Magnuz
        </h1>
        <h2 className="text-xl md:text-3xl font-display font-medium text-neon-subtitle uppercase tracking-widest mt-2 z-10 animate-pulse">
          El Emperador del Techno
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 mt-4">
          <span className="text-xs md:text-sm font-mono text-white/60 uppercase tracking-wider border border-white/20 px-3 py-1 rounded-full">
            Guatemala
          </span>
        </div>
      </section>

      {/* Image & Bio Grid */}
      <section className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center z-10">

        {/* Image Column (5/12 on desktop) */}
        <div className="md:col-span-5 relative group w-full max-w-[300px] md:max-w-none mx-auto">
          {/* Rift/Gate Visual Element */}
          <div className="absolute -inset-10 bg-rift opacity-60 z-0 animate-pulse" />

          {/* Cyberpunk Decorative Elements */}
          <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-accent/50 z-20 transition-all group-hover:w-16 group-hover:h-16" />
          <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-accent/50 z-20 transition-all group-hover:w-16 group-hover:h-16" />

          <div className="absolute inset-0 bg-accent translate-x-2 translate-y-2 border border-white/20 -z-10 transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3" />

          <div className="relative border border-white/10 bg-black overflow-hidden aspect-[3/4] md:aspect-square shadow-[0_0_30px_rgba(255,0,51,0.1)] group-hover:shadow-[0_0_50px_rgba(255,0,51,0.3)] transition-all duration-500 z-10">
            <Image
              src="/magnuz-perfil.jpeg"
              alt="DJ Magnuz Profile"
              fill
              className="object-cover grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 ease-out"
              priority
            />
            {/* Scanline Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none" />

            {/* Glitch/Noise Overlay Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 mix-blend-multiply" />
          </div>
        </div>

        {/* Bio/Info Column (7/12 on desktop) */}
        <div className="md:col-span-7 flex flex-col gap-6 bg-black/60 backdrop-blur-md border border-white/5 p-5 md:p-8 shadow-2xl relative overflow-hidden">
          {/* Decorative faint glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-3 relative z-10">
            <p className="font-mono text-sm leading-relaxed text-stone-100 border-l-2 border-accent pl-4 drop-shadow-md">
              {ARTIST_DATA.profile.bio}
            </p>
            <p className="font-mono text-[10px] md:text-xs text-stone-400 italic pl-4">
              "{ARTIST_DATA.profile.evolution}"
            </p>
          </div>

          <div className="space-y-4 relative z-10">
            <div className="border-t border-white/10 pt-4">
              <h3 className="text-[10px] font-mono uppercase text-accent mb-2 tracking-widest drop-shadow-md">Dominios (Venues)</h3>
              <div className="flex flex-wrap gap-1.5">
                {ARTIST_DATA.venues.map((venue) => (
                  <span key={venue} className="px-2 py-0.5 border border-white/20 text-[10px] md:text-xs font-mono uppercase bg-white/10 hover:bg-accent/20 hover:border-accent hover:text-white transition-all duration-300 shadow-sm cursor-default">
                    {venue}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-4">
              <h3 className="text-[10px] font-mono uppercase text-accent mb-2 tracking-widest drop-shadow-md">Frecuencias (Genres)</h3>
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap gap-x-2 gap-y-0.5 text-sm md:text-lg font-display font-bold uppercase leading-none text-white">
                  {ARTIST_DATA.genres.map((genre, i) => (
                    <span key={genre} className="hover:text-accent transition-colors cursor-default drop-shadow-md">
                      {genre}{i < ARTIST_DATA.genres.length - 1 && <span className="text-accent/50"> / </span>}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {ARTIST_DATA.subGenres.map((sub) => (
                    <span key={sub} className="text-[9px] md:text-[10px] font-mono text-stone-300 border border-white/10 px-1.5 py-0.5 rounded-full bg-white/5 cursor-default">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-4">
              <h3 className="text-[10px] font-mono uppercase text-accent mb-2 tracking-widest drop-shadow-md">Tech Rider Ready</h3>
              <p className="text-[9px] md:text-[10px] font-mono text-stone-400 mb-1.5 italic">{ARTIST_DATA.techRider.summary}</p>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-1.5 text-[9px] md:text-[10px] font-mono text-stone-300">
                {ARTIST_DATA.techRider.gear.map((gear) => (
                  <div key={gear} className="flex items-center gap-1.5">
                    <div className="w-1 h-1 bg-accent rounded-sm shadow-[0_0_5px_var(--color-accent)]" />
                    {gear}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <nav className="flex flex-wrap gap-4 justify-center py-6 md:py-8 z-10 w-full">
        {[
          { name: "Music", href: "/music" },
          { name: "Contact", href: "/contact" },
        ].map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="px-6 py-3 border border-white/20 hover:bg-accent hover:text-black hover:border-accent transition-all duration-300 font-mono text-xs uppercase tracking-widest bg-black/50 backdrop-blur-md"
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Footer Badge - Upside Down Circle */}
      <div className="fixed bottom-20 right-4 md:right-8 w-24 h-24 md:w-32 md:h-32 z-40 rounded-full overflow-hidden border border-white/20 shadow-[0_0_20px_rgba(255,0,51,0.3)] hover:shadow-[0_0_30px_rgba(255,0,51,0.6)] hover:scale-105 transition-all duration-300 bg-black">
        <Image
          src="/stranger-things-footer-badge.png"
          alt="Stranger Things Upside Down Badge"
          fill
          className="object-cover"
        />
      </div>

      {/* Sticky Player Placeholder */}
      <div className="fixed bottom-0 left-0 right-0 p-2 border-t border-accent/20 bg-black/90 backdrop-blur-xl z-50 flex justify-between items-center px-4 md:px-6">
        <div className="flex items-center gap-3">
          <div className="h-1.5 w-1.5 bg-accent animate-pulse rounded-full" />
          <span className="font-mono text-[9px] md:text-[10px] text-accent uppercase tracking-widest">Live System Active</span>
        </div>
        <span className="font-mono text-[10px] md:text-xs text-stone-500 hidden md:block">
          [STICKY AUDIO PLAYER LOADING...]
        </span>
      </div>
    </main>
  );
}

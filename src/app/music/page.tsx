
export default function MusicPage() {
    return (
        <div className="min-h-screen pt-24 px-8 max-w-7xl mx-auto">
            <h1 className="text-8xl font-display font-bold uppercase mb-12 text-outline-dim">Discography</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="border border-white/10 p-8 h-96 flex items-center justify-center bg-white/5">
                    <span className="font-mono text-xs text-white/50">DATA FETCHING FROM SUPABASE...</span>
                </div>
            </div>
        </div>
    );
}

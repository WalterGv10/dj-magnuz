
export default function ContactPage() {
    return (
        <div className="min-h-screen pt-24 px-8 max-w-7xl mx-auto">
            <h1 className="text-8xl font-display font-bold uppercase mb-12 text-outline-dim">Booking</h1>
            <form className="max-w-2xl space-y-8 mt-12 font-mono">
                <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-accent">Email</label>
                    <input type="email" className="bg-transparent border-b border-white/20 p-4 focus:border-accent outline-none text-xl" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-accent">Message</label>
                    <textarea className="bg-transparent border-b border-white/20 p-4 focus:border-accent outline-none text-xl min-h-[100px]" />
                </div>
                <button className="bg-accent text-black px-8 py-4 uppercase font-bold tracking-widest hover:invert transition-all">
                    Send Request
                </button>
            </form>
        </div>
    );
}

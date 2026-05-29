export default function Focal() {
    return (
        <div className="relative w-full max-w-xl px-6 md:px-0 md:m-50 z-10 text-left">
            <h1 className="text-2xl md:text-7xl font-black text-white tracking-tight leading-[0.95] uppercase font-display">
                Creating<br />
                Designs With<br />
                Passion & Intent
            </h1>
            <p className="mt-4 md:mt-6 text-xs md:text-lg text-white/70 font-medium tracking-wide max-w-md">
                Crafting meaningful digital experiences through thoughtful design and purposeful development.
            </p>
            <div className="flex flex-wrap items-start pt-5 gap-3 md:gap-6">
                <button className="bg-white text-black font-bold py-2 px-3 md:px-4 text-sm md:text-base rounded-full">
                    Ver projetos
                </button>
                <button className="bg-white text-black font-bold py-2 px-3 md:px-4 text-sm md:text-base rounded-full">
                    Contato
                </button>
            </div>
        </div>
    );
}
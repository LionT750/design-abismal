import Link from "next/link";

function EarthIcon() {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="3"
                y="3"
                width="94"
                height="94"
                fill="#EBC43F"
                stroke="#111111"
                strokeWidth="4"
            />
            <path
                d="M50 17 V78 M27 43 H73 M19 80 H81"
                stroke="#111111"
                strokeWidth="7.5"
                strokeLinecap="square"
                strokeLinejoin="miter"
            />
        </svg>
    );
}

export default function Navbar( {onUniteClick} ) {
    return (
        <nav className="w-full h-16 flex items-center justify-end px-8 self-end z-10">
            <button className="absolute top-0 left-0
                            flex items-center justify-center
                            cursor-pointer 
                            font-mono text-white tracking-light text-justify 
                            rounded-xl border-1 border-blue-100
                            w-1/8 
                            h-10 md:mt-2 md:ml-2
                            backdrop-blur-sm
                            bg-white/10
                            hover:scale-110 hover:border-2 hover:border-blue-200
                            transition-all duration-100"
                            onClick={() => onUniteClick()}> Revamp </button>
            <div className="flex items-center gap-6">
                <button className="inline-flex items-center justify-center
                border border-transparent
                p-2 rounded-md
                text-black
                hover:bg-yellow-500 hover:border-gray-500
                transition-colors"
                aria-label="Earth">
                <EarthIcon />
                </button>
            </div>
        </nav>
    );
}

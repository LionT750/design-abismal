import Link from "next/link";

type NavbarProps = {
    onUniteClick: () => void;
};


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

export default function Navbar( {onUniteClick}: NavbarProps ) {
    return (
        <nav className="w-full h-16 flex items-center justify-end px-8 self-end z-10">
            
            <button className="absolute top-0 left-0 ml-[2vw] mt-[2vw] cursor-pointer inline-block px-4 py-2 font-mono hover:scale-105 group" onClick={onUniteClick}>
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-red-500"></span>
                <span className="relative text-black group-hover:text-white"> 火 Revamp 火 </span>
            </button>
        </nav>
    );
}

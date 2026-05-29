import Link from "next/link";

function HomeIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
    );
}

function AboutIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
        </svg>
    );
}

function ProjectsIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
        </svg>
    );
}

function ContactIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
        </svg>
    );
}

export default function Navbar() {
    return (
        <nav className="w-full h-16 flex items-center justify-end px-8 self-end z-10">
            <div className="text-sm md:text-xl font-bold text-black p-4">My Portfolio</div>
            <div className="flex items-center gap-6">
                <Link href="/" className="text-black hover:text-neutral-600 transition-colors" aria-label="Home">
                    <HomeIcon />
                </Link>
                <Link href="/about" className="text-black hover:text-neutral-600 transition-colors" aria-label="About">
                    <AboutIcon />
                </Link>
                <Link href="/projects" className="text-black hover:text-neutral-600 transition-colors" aria-label="Projects">
                    <ProjectsIcon />
                </Link>
                <Link href="/contact" className="text-black hover:text-neutral-600 transition-colors" aria-label="Contact">
                    <ContactIcon />
                </Link>
            </div>
        </nav>
    );
}

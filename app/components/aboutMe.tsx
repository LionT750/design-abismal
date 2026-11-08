import Link from "next/link";
import Image from "next/image";
import { AnimatedBackground } from 'animated-backgrounds';
import { FaRegArrowAltCircleUp, FaAws } from "react-icons/fa";
import {
  SiOpenjdk,
  SiSpringboot,
  SiPostgresql,
  SiApachekafka,
  SiRedis,
  SiDocker,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiMui,
  SiTailwindcss,
  SiNx,
  SiClaude,
} from "react-icons/si";
import bg from "../../public/about_me_bg_light.webp";
import mePhoto from "../../public/me-photo.webp";

const techStack = [
  { name: "Java", icon: SiOpenjdk },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Kafka", icon: SiApachekafka },
  { name: "Redis", icon: SiRedis },
  { name: "AWS", icon: FaAws },
  { name: "Docker", icon: SiDocker },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Material UI", icon: SiMui },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Nx", icon: SiNx },
  { name: "Claude", icon: SiClaude },
];

export default function AboutMe() {

    return (
    <div id="about" className="relative w-full h-[100vh] md:h-screen flex flex-col justify-center items-center bg-black/80 text-white">
       <AnimatedBackground animationName="starryNight" theme="portfolio" 
             style={{position: "absolute", inset:0, zIndex: 1, mixBlendMode: "screen", filter: "contrast(1.6) brightness(0.8)", speed: 1.5 }}/>
       <Image
        src={bg}
        alt="background"
        fill
        className="absolute inset-0 z-0 object-cover pointer-events-none saturate-100"
         />
       <div className="absolute inset-0 z-1 bg-linear-to-l from-black/70 via-black/30 to-transparent pointer-events-none" />
        <Link href="#home" className="absolute top-[4vh] left-1/2 transform -translate-x-1/2 mb-4 text-white text-4xl animate-bounce cursor-pointer hover:text-gray-400 transition-colors duration-500 z-10">
        <FaRegArrowAltCircleUp className="text-white text-5xl animate-bounce hover:scale-120" />
        </Link>
        <div className="absolute top-[15vh] right-[2vw] z-1 flex flex-col items-center text-center max-w-3xl
                        rounded-3xl border border-white/15 bg-black/55 backdrop-blur-md shadow-2xl
                        px-5 py-5 md:px-8 md:py-5 text-white max-h-[80vh] overflow-y-auto">
        <h1 className="font-display text-3xl md:text-5xl font-black uppercase tracking-tight leading-[0.95] mb-4 text-white">
          About <span className="font-zen text-red-500">Me</span>
        </h1>
        <p className="font-mono text-sm md:text-base font-medium tracking-tight leading-snug text-center text-white">
          I am a passionate developer with a keen interest in creating innovative solutions. My expertise lies in web development, and I enjoy working on projects that challenge me to learn and grow. I am always eager to collaborate with like-minded individuals and contribute to exciting ventures.
        </p>

        <h2 className="font-display text-xl md:text-3xl font-black uppercase tracking-tight leading-[0.95] mt-4 mb-2 text-white">
          Tech <span className="font-zen text-red-500">Stack</span>
        </h2>
        <p className="font-mono text-sm md:text-base font-medium tracking-tight leading-snug text-center text-white/75">
          Some of the tools I&apos;ve worked with or dabbled in.
        </p>
        <ul className="flex flex-wrap justify-center gap-2 mt-3">
          {techStack.map(({ name, icon: Icon }) => (
            <li
              key={name}
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 font-mono text-xs md:text-sm font-medium tracking-tight text-white"
            >
              <Icon className="text-base text-red-500" aria-hidden="true" />
              {name}
            </li>
          ))}
        </ul>

        <div className="relative mt-3 shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-red-500/80 overflow-hidden shadow-lg">
          <Image
            src={mePhoto}
            alt="Photo of Lucas"
            fill
            sizes="(min-width: 768px) 112px, 96px"
            placeholder="blur"
            className="object-cover"
          />
        </div>
        <p className="mt-2 font-display text-lg md:text-xl font-black uppercase tracking-tight leading-[0.95] text-white">
          Lucas das Neves Matheus
        </p>
        <p className="mt-1 font-mono text-xs md:text-sm font-medium tracking-tight text-white">
          Software <span className="text-red-500">Engineer</span>
        </p>
        </div>
      </div>
  );
}

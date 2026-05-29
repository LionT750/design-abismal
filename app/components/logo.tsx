import Image from "next/image";

export default function Logo() {
  return (
    <div className="absolute top-4 left-4 md:top-8 md:left-8 z-20">
      <Image
        src="/git_logo.png.png"
        alt="Logo"
        width={50}
        height={50}
        className="

          rounded-full
          object-cover

          border
          border-white/20

          shadow-[0_0_25px_rgba(255,255,255,0.08)]

          transition-all
          duration-500
          ease-out

          hover:scale-110
          hover:border-white/40
          hover:shadow-[0_0_40px_rgba(255,220,180,0.25)]
        "
      />
      <div className="text-white/60 text-xs tracking-[0.3em] uppercase">
         禅無悟心
      </div>
    </div>
  );
}
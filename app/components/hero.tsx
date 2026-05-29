import Image from "next/image";
import Navbar from "./navbar";
import bg from "../../public/bg_light.png";
import Focal from "./focal";
import Logo from "./logo";

export default function Hero() {
  return (
    
    <div className="relative w-full h-[30vh] md:h-screen flex flex-col justify-start">
      <Image
        src={bg}
        alt="background"
        fill
        className="absolute inset-0 z-0 object-cover pointer-events-none"
      />
      <div className="absolute inset-0 pointer-events-none  translate-x-3 md:translate-x-9 overflow-hidden">
        <div className="slash" />
      </div>
      {/* Gradient overlay — darkens left side for text readability */}
      <div className="absolute inset-0 z-1 bg-linear-to-r from-black/70 via-black/30 to-transparent" />
      <div className="flex items-start justify-between z-10">
        <Logo />
        <Navbar/>
      </div>
      

      <Focal />
      
    </div>
  );
}
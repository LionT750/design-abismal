"use client";

import Image from "next/image";
import Navbar from "./navbar";
import Earthbg from "../../public/bg.png";
import AIbg from "../../public/ai-bg.jpg";
import Focal from "./focal";
import FocalAI from "./focalAI";
import {useState} from "react";
import {arrayIterator} from "../sharedUtils/util";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import { AnimatedBackground } from 'animated-backgrounds';


export default function Hero() {

  const [selectedFocal, setSelectedFocal] = useState("AI");
  const focalIterator = arrayIterator(["Earth", "AI"]);
  const handleFocalBackandForth = () => {
    const nextFocal: string | void = focalIterator.next().value;
            if (typeof(nextFocal) === "undefined")
                setSelectedFocal("AI");
            else
                setSelectedFocal(nextFocal);
  }


  return (
    
    <div className="relative w-full h-[100vh] md:h-screen flex flex-col justify-start">
      <AnimatedBackground animationName="starryNight" theme="portfolio" 
      style={{position: "absolute", inset:0, zIndex: 1, mixBlendMode: "screen", filter: "contrast(1.6) brightness(0.8)", speed: 1.5 }}/>
      <Image
        src={selectedFocal === "Earth" ? Earthbg : AIbg}
        alt="background"
        fill
        className="absolute inset-0 z-0 object-cover pointer-events-none saturate-100"
      />
      <div className="absolute inset-0 pointer-events-none  translate-x-3 md:translate-x-9 overflow-hidden">
        <div className="slash" />
      </div>
      {/* Gradient overlay — darkens left side for text readability */}
      <div className="absolute inset-0 z-1 bg-linear-to-r from-black/70 via-black/30 to-transparent" />
      <Navbar onUniteClick={handleFocalBackandForth} />

      {selectedFocal === "Earth" ? <Focal /> : null}
      {selectedFocal === "AI" ? <FocalAI /> : null}

      <div key={selectedFocal} className="absolute bottom-[5vh] left-1/2 -translate-x-1/2 gap-8 
                      flex w-auto h-[10vh] z-10
                      b-g-black/50 rounded-full px-6 py-2 items-center justify-center
                      bg-black/40 backdrop-blur-sm
                      animate-in fade-in slide-in-from-left-8 duration-750 hover:scale-105 hover:shadow-lg">
        <FaGithubSquare
          className="text-white text-3xl cursor-pointer hover:text-gray-400 hover:scale-120 transition-colors duration-300"
          onClick={() => window.open("https://github.com/LionT750", "_blank")}
        />
        <FaLinkedin
          className="text-white text-3xl cursor-pointer hover:text-gray-400 hover:scale-120 transition-colors duration-300"
          onClick={() => window.open("https://www.linkedin.com/in/yourusername", "_blank")}
        />
        <CgSmartHomeWashMachine
          className="text-white text-3xl cursor-pointer hover:text-gray-400 hover:scale-120 transition-colors duration-300"
          onClick={() => window.open("https://www.yourwebsite.com", "_blank")}
        />
      </div>
    </div>
  );
}
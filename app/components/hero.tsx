"use client";

import Image from "next/image";
import Navbar from "./navbar";
import Earthbg from "../../public/bg.png";
import AIbg from "../../public/ai-bg.jpg";
import Focal from "./focal";
import FocalAI from "./focalAI";
import {useState} from "react";
import {arrayIterator} from "../sharedUtils/util";


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
      <Image
        src={selectedFocal === "Earth" ? Earthbg : AIbg}
        alt="background"
        fill
        className="absolute inset-0 z-0 object-cover pointer-events-none"
      />
      <div className="absolute inset-0 pointer-events-none  translate-x-3 md:translate-x-9 overflow-hidden">
        <div className="slash" />
      </div>
      {/* Gradient overlay — darkens left side for text readability */}
      <div className="absolute inset-0 z-1 bg-linear-to-r from-black/70 via-black/30 to-transparent" />
      <Navbar onUniteClick={handleFocalBackandForth} />

      {selectedFocal === "Earth" ? <Focal /> : null}
      {selectedFocal === "AI" ? <FocalAI /> : null}
    </div>
  );
}
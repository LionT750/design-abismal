"use client";

import { useState, useEffect } from "react";
import { arrayIterator } from "../sharedUtils/util";

export default function FocalAI() {
  const displayTextIterator = arrayIterator([
    "Intent",
    "Style",
    "Meaning",
    "Innovation",
  ]);

  const [displayText, setDisplayText] = useState("Intent");

  useEffect(() => {
    const interval = setInterval(() => {
      const nextText: string | void = displayTextIterator.next().value;
      if (typeof nextText === "undefined") setDisplayText("Intent");
      else setDisplayText(nextText);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute top-0 left-0 z-20 text-left
                  md:mt-50 md:ml-35 md:mr-50
                  animate-in fade-in slide-in-from-left-8 duration-550
                  rounded-2xl border border-white/15 bg-white/5 p-5 md:p-7
                  shadow-[0_0_60px_-15px_rgba(168,85,247,0.55)]
                  backdrop-blur-2xl"
    >
      <h1 className="bg-linear-to-r from-white via-fuchsia-200 to-cyan-200 bg-clip-text font-display text-2xl font-black uppercase leading-[0.95] tracking-tight text-transparent md:text-7xl">
        Creating Designs With
        <span className="bg-linear-to-r from-fuchsia-400 to-violet-400 bg-clip-text font-zen text-transparent drop-shadow-[0_0_12px_rgba(232,121,249,0.45)]">
          {" "}
          Passion &{" "}
        </span>
        <span
          key={displayText}
          className="inline-block animate-in fade-in slide-in-from-bottom-8 bg-linear-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent"
        >
          {" "}
          {displayText}
        </span>
      </h1>
      <div className="mt-4 font-mono text-lg font-medium leading-[1.2] tracking-tight text-white/75 md:mr-70 md:text-2xl">
        Crafting meaningful digital experiences through thoughtful design and
        purposeful development.
      </div>
    </div>
  );
}

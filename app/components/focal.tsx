"use client";

import {useState, useEffect} from "react";


export default function Hero() {
    
    const objectiveTexts: string[] = ["Intent", "Style", "Meaning", "Innovation"];
    const [currentObjectiveIndex, setCurrentObjectiveIndex] = useState(0);

    const displayText = objectiveTexts[currentObjectiveIndex];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentObjectiveIndex((prevIndex) => (prevIndex + 1) % objectiveTexts.length);
        }, 3500);
    }, []);


    return (
        <div className="relative m-8 md:m-70 z-10 text-left animate-in fade-in slide-in-from-left-8 duration-550 ">
            <h1 className="font-display text-2xl md:text-7xl font-black text-white tracking-tight leading-[0.95] uppercase font-display">
                Creating Designs With
                <span className="font-zen text-red-400"> Passion & </span>
                <span key={displayText} className="inline-block font-zen text-red-400 
                animate-in fade-in slide-in-from-bottom-8 slide- duration-700"> {displayText}</span>
            </h1>
            <div className="font-mono mt-4 shadow-md hover:shadow-lg transition-shadow duration-300 text-lg md:text-2xl font-medium text-white tracking-tight leading-[1.2]">
                Crafting meaningful digital experiences through thoughtful design and purposeful development.
            </div>
        </div>
    );
}
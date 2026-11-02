"use client";

import {useState, useEffect} from "react";
import {arrayIterator} from "../sharedUtils/util";


export default function Hero() {
    

    const displayTextIterator = arrayIterator(["Intent", "Style", "Meaning", "Innovation"]);
    
    const [displayText, setDisplayText] = useState("Intent");
;

    useEffect(() => {
        const interval = setInterval(() => {
            const nextText: string | void = displayTextIterator.next().value;
            if (typeof(nextText) === "undefined")
                setDisplayText("Intent");
            else
                setDisplayText(nextText);
        }, 3500);
    }, []);


    return (
        <div className="absolute top-0 left-0 z-20 text-left
                        md:mt-50 md:ml-35 md:mr-50
                        animate-in fade-in slide-in-from-left-8 duration-550 
                        bg-black/10 rounded-lg 
                        backdrop-saturate-115
                        ">
            <h1 className="font-display text-2xl md:text-7xl font-black text-white tracking-tight leading-[0.95] uppercase">
                Creating Designs With
                <span className="font-zen text-red-400"> Passion & </span>
                <span key={displayText} className="inline-block font-display text-red-400 
                animate-in fade-in slide-in-from-bottom-8"> {displayText}</span>
            </h1>
            <div className="font-mono mt-4 md:mr-70 shadow-md hover:shadow-lg transition-shadow duration-300 text-lg md:text-2xl font-medium text-white tracking-tight leading-[1.2]">
                Crafting meaningful digital experiences through thoughtful design and purposeful development.
            </div>
        </div>
    );
}
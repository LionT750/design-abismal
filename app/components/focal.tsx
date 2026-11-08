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
        return () => clearInterval(interval)
    }, []);


    return (
        <div className="absolute top-0 left-0 z-30 text-left
                        mt-[30vh] ml-[5vw] mr-[22vw]
                        animate-in fade-in slide-in-from-left-8 duration-300 
                        bg-black/10 rounded-lg 
                        backdrop-saturate-115
                        ">
            <h1 className="font-display text-2xl md:text-7xl font-black text-white text-left tracking-tight leading-[0.95] uppercase">
                Creating Designs With
                <span className="font-zen text-red-500"> Passion & </span>
                <span key={displayText} className="inline-block font-display text-red-500 
                animate-in fade-in slide-in-from-bottom-8 duration-350"> {displayText}</span>
            </h1>
            <div className="font-mono mt-[4vh] mr-[30vw] shadow-md hover:shadow-lg transition-shadow duration-300 text-lg text-left md:text-2xl font-medium text-white tracking-tight leading-[1.2]">
                Crafting meaningful digital experiences through thoughtful design and purposeful development.
            </div>
            <div className="absolute -bottom-2 left-0
            h-[7px] w-5/6 rounded-bl-2xl
            border-b border-black-150
            origin-left scale-x-0
            animate-[borderGrow_600ms_ease-out_forwards]"></div>
        </div>
    );
}
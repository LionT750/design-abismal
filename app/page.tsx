"use client";

import {useState, useEffect} from "react";
import LoadingTemplate from "./components/loadingTemplate";
import Hero from "./components/hero";
import AboutMe from "./components/aboutMe";
import Link from "next/link";
import { FaRegArrowAltCircleUp } from "react-icons/fa";


export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1700); 
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingTemplate />;
  else
  {
  return (

    <div className="relative grid grid-cols-1 gap-4">
      <Hero />
      <AboutMe />
    </div>
  );
  }
} 


"use client";

import {useState, useEffect} from "react";
import LoadingTemplate from "./components/loadingTemplate";
import Hero from "./components/hero";
import AboutMe from "./components/aboutMe";

const SHOW_MS = 900;
const FADE_MS = 250;

export default function Home() {

  const [phase, setPhase] = useState<"show" | "leaving" | "done">("show");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const leave = setTimeout(() => setPhase("leaving"), SHOW_MS);
    const done = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
    }, SHOW_MS + FADE_MS);

    return () => {
      clearTimeout(leave);
      clearTimeout(done);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const sections = ["home", "about"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const url = entry.target.id === "home" ? "/" : `/#${entry.target.id}`;
          if (location.pathname + location.hash !== url) {
            window.history.replaceState(null, "", url);
          }
        }
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="relative grid grid-cols-1 gap-4">
        <Hero />
        <AboutMe />
      </div>
      {phase !== "done" && (
        <div
          className={`fixed inset-0 z-50 transition-opacity ease-out ${phase === "leaving" ? "opacity-0" : "opacity-100"}`}
          style={{ transitionDuration: `${FADE_MS}ms` }}
        >
          <LoadingTemplate />
        </div>
      )}
    </>
  );
}

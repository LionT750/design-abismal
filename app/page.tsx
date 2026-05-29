import Image from "next/image";
import Hero from "./components/hero";

export default function Home() {
  return (

    <div className="grid grid-cols-1 gap-4">
      <Hero />
      <Hero />
      <Hero />
      <Hero />
      <Hero />
    </div>
  );
}

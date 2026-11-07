import Link from "next/link";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

export default function AboutMe() {
  
    return (
    <div id="about" className="relative w-full h-[100vh] md:h-screen flex flex-col justify-center items-center bg-black/80 text-white">
        <Link href="/" className="absolute top-[4vh] left-1/2 transform -translate-x-1/2 mb-4 text-white text-4xl animate-bounce cursor-pointer hover:text-gray-400 transition-colors duration-500 z-10">
        <FaRegArrowAltCircleUp className="text-white text-5xl animate-bounce hover:scale-120" />
        </Link>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">About Me</h1>
        <p className="text-lg md:text-xl max-w-3xl text-center">
          I am a passionate developer with a keen interest in creating innovative solutions. My expertise lies in web development, and I enjoy working on projects that challenge me to learn and grow. I am always eager to collaborate with like-minded individuals and contribute to exciting ventures.
        </p>
      </div>
  );
}
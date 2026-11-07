import Image from "next/image";
import {ViewTransition} from "react";


export default function LoadingTemplate() {
  return (
    <div className="relative h-screen w-screen">
        <div className="absolute inset-0 panel-red sheen stripes [clip-path:polygon(0_0,60%_0,40%_100%,0_100%)] enter-from-left">
        </div>
        <Image 
          src="/tokyo_seal_v2.png"
          alt="Seal"
          loading="eager"
          width={300}
          height={300}   
          className="absolute top-1/2 left-1/2 w-[15vw] h-auto  rounded-full border-5 border-black/50 z-10 enter-from-top"
        />
        <div className="absolute inset-0 panel-blue sheen stripes [clip-path:polygon(60%_0,100%_0,100%_100%,40%_100%)] enter-from-right">
        </div>
    </div>

  );
}
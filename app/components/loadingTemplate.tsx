import Image from "next/image";
import redSide from "../../public/loading_red.webp";
import blueSide from "../../public/loading_blue.webp";

export default function LoadingTemplate() {
  return (
    <div className="loading-scene relative h-screen w-screen overflow-hidden bg-black">
        <div className="absolute inset-0 loading-clip-red enter-from-left">
          <Image
            src={redSide}
            alt=""
            fill
            sizes="100vw"
            loading="eager"
            fetchPriority="high"
            className="object-cover pointer-events-none"
          />
        </div>
        <div className="absolute inset-0 loading-clip-blue enter-from-right">
          <Image
            src={blueSide}
            alt=""
            fill
            sizes="100vw"
            loading="eager"
            fetchPriority="high"
            className="object-cover pointer-events-none"
          />
        </div>
        <Image
          src="/tokyo_seal_v2.webp"
          alt="Seal"
          loading="eager"
          width={600}
          height={600}
          className="loading-seal absolute top-1/2 left-1/2 h-auto rounded-full border-5 border-black/50 z-10 enter-from-top"
        />
    </div>

  );
}

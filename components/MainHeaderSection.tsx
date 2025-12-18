import Image from "next/image";

export default function MainHeaderSection() {
  return (
    <header className="w-full flex items-center justify-center bg-transparent py-6">
      <div className="flex items-center gap-6">
        
        {/* Emblem */}
        <div className="shrink-0">
          <Image
            src="/police-emblem.png"   // place image in /public
            alt="Police Emblem"
            width={100}
            height={120}
            className="object-contain"
            priority
          />
        </div>

        {/* Text */}
        <div className="flex flex-col">
          <h1 className="font-medium text-[#25066d] text-5xl tracking-tight leading-tight">
            All India Police Sahyog
          </h1>

          <p className="font-medium text-[#ef4444] text-2xl tracking-tight text-center mt-1">
            एकता और अनुशासन
          </p>
        </div>
      </div>
    </header>
  );
}

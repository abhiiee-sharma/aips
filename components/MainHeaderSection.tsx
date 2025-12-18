import Image from "next/image";

export default function MainHeaderSection() {
  return (
    // Set a defined height: h-28 on mobile, h-40 on desktop
    <header className="w-full flex items-center justify-center bg-transparent h-28 md:h-40 px-4">
      <div className="flex items-center gap-3 md:gap-6">
        
        {/* Emblem - Smaller on mobile (width 60), larger on desktop (width 100) */}
        <div className="relative w-[60px] h-[72px] md:w-[100px] md:h-[120px] shrink-0">
          <Image
            src="/police-emblem.png"
            alt="Police Emblem"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Text Container */}
        <div className="flex flex-col justify-center">
          <h1 className="font-bold text-[#25066d] text-2xl sm:text-3xl md:text-5xl tracking-tight leading-tight">
            All India Police Sahyog
          </h1>

          {/* Centered sub-text with responsive sizing */}
          <p className="font-semibold text-[#ef4444] text-sm sm:text-lg md:text-2xl tracking-wide text-center mt-0.5 md:mt-1">
            एकता और अनुशासन
          </p>
        </div>
      </div>
    </header>
  );
}
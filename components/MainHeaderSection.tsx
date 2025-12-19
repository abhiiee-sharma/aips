import Image from "next/image";

export default function MainHeaderSection() {
  return (
    // Reduced height from h-28/40 to h-24/32 (96px/128px)
    <header className="w-full flex items-center justify-center bg-transparent h-24 md:h-32 px-4">
      <div className="flex items-center gap-4 md:gap-8">
        
        {/* Emblem - Balanced sizing for better vertical fit */}
        <div className="relative w-[50px] h-[60px] md:w-[85px] md:h-[105px] shrink-0">
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
          <h1 className="font-bold text-[#25066d] text-xl sm:text-2xl md:text-4xl tracking-tight leading-none">
            All India Police Sahyog
          </h1>

          {/* Tagline - Tighter margin to save vertical space */}
          <p className="font-bold text-[#ef4444] text-xs sm:text-base md:text-xl tracking-wider text-center mt-1">
            एकता और अनुशासन
          </p>
        </div>
      </div>
    </header>
  );
}
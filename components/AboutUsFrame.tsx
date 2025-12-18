import { Button } from "@/components/ui/button";
import Image from "next/image";
import aipsHelperImage1 from "@/public/aips-helper.jpg";


export default function Frame() {
  const leftColumnItems = [
    "वरगनओ और बच क लए कलणकर यजनए",
    "मनसक तनव मक करकम",
  ];

  const rightColumnItems = ["24x7 सहयत हललइन", "जन-जगरकत अभयन"];

  return (
    <div className="relative w-full min-h-[704px] bg-app-background px-[81px] py-[41px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section className="flex flex-col">
          <header className="mb-[43px]">
            <h2 className="text-xl tracking-[0.16px] leading-[32.0px] [font-family:'Inter-SemiBold',Helvetica] font-semibold mb-[11px]">
              <span className="text-black">हमर बर म </span>
              <span className="text-[#d32d1f]">-------</span>
            </h2>

            <h1 className="text-app-primary text-[40px] tracking-[1.60px] leading-[64.0px] [font-family:'Inter-SemiBold',Helvetica] font-semibold">
              पलस कलण: हमर सकल, हमर दयत
            </h1>
          </header>

          <p className="text-black text-2xl tracking-[0.96px] leading-[38.4px] [font-family:'Inter-SemiBold',Helvetica] font-semibold mb-[26px]">
            रष क सरक करन वल क जवन क बहतर और सरकत बनन क एक पहल।
          </p>

          <p className="[font-family:'Inter-Bold',Helvetica] font-bold text-black text-xl tracking-[0.80px] leading-[32.0px] mb-[77px]">
            सवधओ क रक करत हए हमर जवन अकर अपन नज खशय और परवर क
            जररत क पछ छड दत ह। वपरत परसतय और तनवपर महल म कम करन
            वल इन वर क भ सहर क जररत हत ह। यह NGO पलसकरय क चहर पर
            मसन लन और उनक परवर क वह समन और सवध दलन क लए पतबद ह,
            जसक व हकदर ह।
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-[49px]">
            <div className="flex flex-col gap-4">
              {leftColumnItems.map((item, index) => (
                <p
                  key={index}
                  className="text-black text-xl tracking-[0] leading-[26.0px] [font-family:'Inter-SemiBold',Helvetica] font-semibold"
                >
                  {item}
                </p>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              {rightColumnItems.map((item, index) => (
                <p
                  key={index}
                  className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-xl tracking-[0] leading-[26.0px]"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          <Button className="bg-app-primary hover:bg-app-primary/90 text-[#fafaf5] text-[32px] tracking-[0] leading-[41.6px] [font-family:'Inter-SemiBold',Helvetica] font-semibold rounded-lg w-[190px] h-[53px]">
            हमस जडए
          </Button>
        </section>

        <aside className="flex items-start justify-center lg:justify-end pt-[62px]">

          <Image 
                      src="/aips-helper.jpg"   // place image in /public
                      alt="Police Emblem"
                      width={720}
                      height={1080}
                      className="object-contain"
                      priority
                    />
        </aside>
      </div>
    </div>
  );
}

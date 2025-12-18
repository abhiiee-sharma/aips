"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AboutSection() {
  const router = useRouter();

  const features = [
    "वीरांगनाओं और बच्चों के लिए कल्याणकारी योजनाएं",
    "मानसिक तनाव मुक्ति कार्यक्रम",
    "24×7 सहायता हेल्पलाइन",
    "जन-जागरूकता अभियान",
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content Column */}
        <div className="flex flex-col space-y-6">
          <div className="space-y-2">
            <h4 className="text-red-600 font-bold flex items-center gap-2">
              हमारे बारे में <span className="h-[1px] w-12 bg-red-600 inline-block"></span>
            </h4>
            <h2 className="text-[#003366] text-3xl md:text-4xl font-bold leading-tight">
              पुलिस कल्याण: हमारा संकल्प, हमारा दायित्व
            </h2>
          </div>

          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p className="font-bold text-lg">
              राष्ट्र की सुरक्षा करने वालों के जीवन को बेहतर और सुरक्षित बनाने की एक पहल
            </p>
            <p className="text-sm md:text-base">
              संविधान की रक्षा करते हुए हमारे जवान अक्सर अपनी निजी खुशियों और परिवार की 
              जरूरतों को पीछे छोड़ देते हैं। विपरीत परिस्थितियों और तनावपूर्ण माहौल में काम करने 
              वाले इन वीरों को भी सहारे की जरूरत होती है। यह NGO पुलिसकर्मियों के चेहरे पर 
              मुस्कान लाने और उनके परिवारों को वह सम्मान और सुविधा दिलाने के लिए प्रतिबद्ध है, 
              जिसके वे हकदार हैं।
            </p>
          </div>

          {/* Features Grid */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm md:text-base font-medium">
                <span className="text-black text-lg">•</span>
                {feature}
              </li>
            ))}
          </ul>

          {/* Action Button */}
          <div className="pt-6">
            <button
              onClick={() => router.push("/registration")}
              className="bg-[#003366] hover:bg-[#002244] text-white font-bold py-3 px-10 rounded-lg transition-all shadow-md"
            >
              हमसे जुड़िए
            </button>
          </div>
        </div>

        {/* Right Image Column */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gray-200 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-xl border-4 border-white">
            <Image
              src="/images/about-main.jpg" // Use your actual image name here
              alt="Police Welfare Support"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
import React, { useState } from 'react';
import {
  GiMountaintop,
  GiCompass,
  GiShieldEchoes,
  GiForest,
  GiSandsOfTime,
  GiLaurels,
  GiBackpack,
  GiCampfire,
  GiPineTree
} from 'react-icons/gi';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <GiMountaintop className="w-16 h-16" />,
      title: "Expert Guides",
      description: "Led by certified mountaineers with decades of high-altitude experience.",
      stats: "15k+ Expeditions",
      color: "text-blue-600",
      bgGradient: "from-blue-50 to-indigo-50",
      accent: "bg-blue-600",
      delay: "0"
    },
    {
      icon: <GiCompass className="w-16 h-16" />,
      title: "Smart Navigation",
      description: "State-of-the-art GPS tracking ensures you're on the right path, always.",
      stats: "99.9% Accuracy",
      color: "text-emerald-600",
      bgGradient: "from-emerald-50 to-teal-50",
      accent: "bg-emerald-600",
      delay: "100"
    },
    {
      icon: <GiShieldEchoes className="w-16 h-16" />,
      title: "Safety Assured",
      description: "Comprehensive medical kits and emergency evacuation protocols included.",
      stats: "Zero Incidents",
      color: "text-amber-600",
      bgGradient: "from-amber-50 to-orange-50",
      accent: "bg-amber-600",
      delay: "200"
    },
    {
      icon: <GiForest className="w-16 h-16" />,
      title: "Eco-Conscious",
      description: "We practice Leave No Trace principles to preserve nature's pristine beauty.",
      stats: "100% Sustainable",
      color: "text-green-700",
      bgGradient: "from-green-50 to-lime-50",
      accent: "bg-green-700",
      delay: "300"
    },
    {
      icon: <GiSandsOfTime className="w-16 h-16" />,
      title: "Flexible Dates",
      description: "Choose dates that work for you with our hassle-free rescheduling policy.",
      stats: "24/7 Support",
      color: "text-purple-600",
      bgGradient: "from-purple-50 to-fuchsia-50",
      accent: "bg-purple-600",
      delay: "400"
    },
    {
      icon: <GiLaurels className="w-16 h-16" />,
      title: "Award Winning",
      description: "Recognized globally for excellence in adventure tourism and hospitality.",
      stats: "#1 Rated Agency",
      color: "text-rose-600",
      bgGradient: "from-rose-50 to-pink-50",
      accent: "bg-rose-600",
      delay: "500"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <GiPineTree className="absolute -left-10 bottom-20 text-green-900 w-96 h-96 transform -rotate-12" />
        <GiMountaintop className="absolute -right-20 top-20 text-gray-900 w-[500px] h-[500px] transform rotate-12" />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-sm font-bold tracking-wide uppercase">
            Why Choose TrekkVede
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Redefining Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              Mountain Experience
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            We combine traditional sherpa wisdom with modern technology to deliver
            unforgettable and safe expeditions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex justify-center items-center">
          {features.map((feature, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveFeature(index)}
              className={`
                group relative bg-white rounded-lg p-4 flex flex-col justify-center items-center
                transition-all duration-500 ease-out
                hover:-translate-y-2
                ${activeFeature === index ? 'shadow-2xl shadow-amber-900/10 scale-[1.02]' : 'shadow-lg shadow-gray-200/50'}
              `}
            >
              {/* Card Corner Accent */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${feature.bgGradient} opacity-50 rounded-bl-[4rem] rounded-tr-[2rem] transition-all duration-500 group-hover:scale-150 group-hover:opacity-100`} />

              {/* Icon Container */}
              <div className="relative flex justify-center mb-8 inline-block">
                <div className={`
                  relative z-10 w-20 h-20 flex items-center justify-center 
                  rounded-2xl text-white shadow-lg transform rotate-3
                  transition-transform duration-500 group-hover:rotate-6
                  ${feature.accent}
                `}>
                  {feature.icon}
                </div>
                {/* Decorative blob behind icon */}
                <div className={`
                    absolute inset-0 bg-gray-900 opacity-10 rounded-2xl 
                    transform -rotate-6 translate-y-2 scale-90 z-0
                    transition-transform duration-500 group-hover:-rotate-3
                `} />
              </div>

              {/* Text Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors">
                  {feature.title}
                </h3>
                {/* <p className="text-gray-500 mb-6 leading-relaxed">
                  {feature.description}
                </p> */}

                {/* Stats Badge */}
                {/* <div className={`
                  inline-flex items-center gap-2 px-3 py-1 rounded-lg text-sm font-semibold
                  bg-gray-50 text-gray-600 group-hover:bg-amber-50 group-hover:text-amber-700
                  transition-colors duration-300
                `}>
                  <div className={`w-1.5 h-1.5 rounded-full ${feature.accent}`} />
                  {feature.stats}
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

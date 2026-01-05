// const WhyChooseUs = () => (
//   <section className="py-16">
//     <h2 className="text-center text-3xl mb-10">Why Choose Us</h2>
//     <ul className="max-w-3xl mx-auto space-y-4">
//       <li>✔ Local expert guides</li>
//       <li>✔ Small trekking groups</li>
//       <li>✔ Eco-friendly practices</li>
//       <li>✔ Transparent pricing</li>
//     </ul>
//   </section>
// );

// export default WhyChooseUs;


import { Shield, Users, Gem, Leaf, Award, Zap } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Royal Safety Standards",
      description: "Military-grade safety protocols with satellite communication and emergency evacuation systems",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Exclusive Group Sizes",
      description: "Intimate groups of maximum 12 trekkers for personalized attention and premium experience",
      gradient: "from-emerald-500 to-green-500"
    },
    {
      icon: <Gem className="w-8 h-8" />,
      title: "Luxury Mountain Camps",
      description: "Premium dome tents with heated beds, gourmet meals, and panoramic mountain views",
      gradient: "from-amber-500 to-yellow-500"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainable Excellence",
      description: "Carbon-neutral expeditions with eco-friendly practices and local community support",
      gradient: "from-cyan-500 to-emerald-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certified Mountain Royalty",
      description: "Internationally certified guides with 10+ years of Himalayan expertise",
      gradient: "from-orange-500 to-amber-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Seamless Experience",
      description: "Doorstep service, premium gear rental, and 24/7 concierge support throughout",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-transparent to-emerald-950/30"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/white-brick-wall.png')] opacity-5"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
            <span className="text-sm font-semibold tracking-wider text-amber-400 uppercase">
              The Royal Difference
            </span>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Why We're Unrivaled
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Experience trekking redefined with our commitment to excellence, safety, and unmatched luxury in the Himalayas
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-2">
                {/* Icon Container */}
                <div className={`relative mb-6 p-4 bg-gradient-to-r ${feature.gradient}/20 rounded-2xl w-16 h-16 flex items-center justify-center`}>
                  <div className={`bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                    {feature.icon}
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient}/10 rounded-2xl blur-md`}></div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>

              {/* Connecting Dots */}
              {index < features.length - 3 && (
                <div className="hidden lg:block absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center justify-center w-64 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent">
            <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
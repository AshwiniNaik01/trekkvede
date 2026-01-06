
// // components/Features.jsx
// import React, { useState, useEffect } from 'react';
// import { Mountain, Compass, Shield, Heart, Clock, Award, ChevronRight, Users, Star, MapPin, Thermometer, Trees, Globe, Cloud, Wind } from 'lucide-react';

// const Features = () => {
//   const [activeFeature, setActiveFeature] = useState(0);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const features = [
//     {
//       icon: <Mountain className="w-10 h-10" />,
//       title: "Expert Guides",
//       description: "Certified mountain guides with 10+ years of experience leading expeditions",
//       stats: "15,000+ Tours Guided",
//       color: "text-amber-700",
//       bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
//       borderColor: "border-amber-200",
//       image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
//       animation: "animate-float",
//       particles: 3
//     },
//     {
//       icon: <Compass className="w-10 h-10" />,
//       title: "GPS Navigation",
//       description: "Real-time tracking with satellite communication & offline maps",
//       stats: "99.8% Accuracy Rate",
//       color: "text-amber-800",
//       bgColor: "bg-gradient-to-br from-amber-50 to-yellow-50",
//       borderColor: "border-amber-200",
//       image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w-400&h=300&fit=crop",
//       animation: "animate-spin-slow",
//       particles: 4
//     },
//     {
//       icon: <Shield className="w-10 h-10" />,
//       title: "Safety First",
//       description: "Medical kits, emergency protocols, insurance & 24/7 support",
//       stats: "Zero Major Incidents",
//       color: "text-amber-900",
//       bgColor: "bg-gradient-to-br from-amber-50 to-red-50",
//       borderColor: "border-amber-200",
//       image: "https://images.unsplash.com/photo-1580654843061-8c90a86b9466?w=400&h=300&fit=crop",
//       animation: "animate-pulse",
//       particles: 2
//     },
//     {
//       icon: <Heart className="w-10 h-10" />,
//       title: "Eco-Friendly",
//       description: "Sustainable tourism with zero waste policy & carbon offsetting",
//       stats: "200+ Tons Waste Removed",
//       color: "text-amber-700",
//       bgColor: "bg-gradient-to-br from-emerald-50 to-amber-50",
//       borderColor: "border-emerald-200",
//       image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
//       animation: "animate-bounce-slow",
//       particles: 5
//     },
//     {
//       icon: <Clock className="w-10 h-10" />,
//       title: "Flexible Scheduling",
//       description: "Trips available year-round with fully customizable dates & routes",
//       stats: "24/7 Booking Support",
//       color: "text-amber-800",
//       bgColor: "bg-gradient-to-br from-amber-50 to-blue-50",
//       borderColor: "border-blue-200",
//       image: "https://images.unsplash.com/photo-1536152471326-642d7bb3d0f3?w=400&h=300&fit=crop",
//       animation: "animate-spin-slow",
//       particles: 3
//     },
//     {
//       icon: <Award className="w-10 h-10" />,
//       title: "Certified Excellence",
//       description: "Award-winning trekking company with industry-leading standards",
//       stats: "50+ Industry Awards",
//       color: "text-amber-900",
//       bgColor: "bg-gradient-to-br from-amber-50 to-purple-50",
//       borderColor: "border-purple-200",
//       image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
//       animation: "animate-tilt",
//       particles: 4
//     }
//   ];

//   const FloatingIcons = () => {
//   const icons = [Mountain, Compass, Shield, Heart, Clock, Award, Star, Cloud, Trees, MapPin];
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {[...Array(15)].map((_, i) => {
//         const Icon = icons[i % icons.length];
//         const size = 8 + Math.random() * 24; // varying sizes
//         const delay = Math.random() * 5;
//         const duration = 6 + Math.random() * 8;
//         const left = Math.random() * 100;
//         const top = Math.random() * 100;

//         return (
//           <div
//             key={i}
//             className="absolute text-amber-300/20"
//             style={{
//               left: `${left}%`,
//               top: `${top}%`,
//               animation: `float ${duration}s ease-in-out ${delay}s infinite alternate`,
//               fontSize: `${size}px`,
//               transform: `rotate(${Math.random() * 360}deg)`
//             }}
//           >
//             <Icon className="w-full h-full" />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// const FeatureParticles = ({ color, count = 5 }) => (
//   <div className="absolute inset-0 pointer-events-none">
//     {[...Array(count)].map((_, i) => (
//       <div
//         key={i}
//         className={`absolute rounded-full`}
//         style={{
//           width: `${4 + Math.random() * 6}px`,
//           height: `${4 + Math.random() * 6}px`,
//           backgroundColor: color,
//           left: `${Math.random() * 90 + 5}%`,
//           top: `${Math.random() * 90 + 5}%`,
//           animation: `particle-float ${3 + Math.random() * 3}s ease-in-out ${i * 0.3}s infinite`
//         }}
//       />
//     ))}
//   </div>
// );



// //   const FloatingIcons = () => (
// //     <div className="absolute inset-0 overflow-hidden pointer-events-none">
// //       {[...Array(12)].map((_, i) => (
// //         <div
// //           key={i}
// //           className="absolute"
// //           style={{
// //             left: `${Math.random() * 100}%`,
// //             top: `${Math.random() * 100}%`,
// //             animationDelay: `${i * 0.5}s`
// //           }}
// //         >
// //           <div className="text-amber-300/20 animate-float-slow">
// //             {i % 4 === 0 && <Mountain className="w-8 h-8" />}
// //             {i % 4 === 1 && <Cloud className="w-8 h-8" />}
// //             {i % 4 === 2 && <Trees className="w-8 h-8" />}
// //             {i % 4 === 3 && <MapPin className="w-8 h-8" />}
// //           </div>

// //           {/* <div className="absolute bottom-4 right-4 opacity-10">
// //   {index === 0 && <Mountain className="w-20 h-20" />}
// //   {index === 1 && <Compass className="w-20 h-20" />}
// //   {index === 2 && <Shield className="w-20 h-20" />}
// //   {index === 3 && <Heart className="w-20 h-20" />}
// //   {index === 4 && <Clock className="w-20 h-20" />}
// //   {index === 5 && <Award className="w-20 h-20" />}
// // </div> */}

// //         </div>
// //       ))}
// //     </div>
// //   );

// //   const FeatureParticles = ({ count }) => (
// //     <div className="absolute inset-0 overflow-hidden pointer-events-none">
// //       {[...Array(count)].map((_, i) => (
// //         <div
// //           key={i}
// //           className="absolute w-2 h-2 bg-amber-400/30 rounded-full"
// //           style={{
// //             left: `${20 + Math.random() * 60}%`,
// //             top: `${20 + Math.random() * 60}%`,
// //             animation: `particle-float ${3 + Math.random() * 2}s infinite ease-in-out`,
// //             animationDelay: `${i * 0.5}s`
// //           }}
// //         />
// //       ))}
// //     </div>
// //   );

//   return (
//     <section 
//       className="relative py-24 overflow-hidden bg-gradient-to-b from-emerald-100 via-white to-emerald-100"
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => setIsHovering(false)}
//     >
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-1/4 w-64 h-64 bg-amber-200/10 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-200/10 rounded-full blur-3xl"></div>
//       </div>

//       <FloatingIcons />

//       {/* Mouse Follow Effect */}
//       <div 
//         className="fixed w-64 h-64 bg-gradient-to-r from-amber-200/5 to-orange-200/5 rounded-full pointer-events-none transition-all duration-300"
//         style={{
//           left: `${mousePosition.x - 128}px`,
//           top: `${mousePosition.y - 128}px`,
//           opacity: isHovering ? 0.3 : 0,
//           scale: isHovering ? 1 : 0
//         }}
//       />

//       <div className="container relative mx-auto px-4">
//         {/* Animated Header */}
//         <div className="text-center mb-20">
//           <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl mb-8 border-2 border-amber-200 shadow-lg hover:shadow-amber-200/50 transition-all duration-500 hover:scale-105">
//             <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
//             <span className="text-amber-800 font-bold tracking-widest text-sm">
//               WHY ADVENTURERS CHOOSE US
//             </span>
//             <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse delay-300"></div>
//           </div>
          
//           <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 max-w-full">
//             <span className="relative inline-block">
//               <span className="relative z-10">Adventure</span>
//               <span className="absolute bottom-2 left-0 w-full h-6 bg-gradient-to-r from-amber-400/40 to-orange-400/40 -z-10 transform -skew-x-12"></span>
//             </span>
//             <span className="block mt-4">
//               with <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 animate-gradient">Confidence</span>
//             </span>
//           </h2>
          
//           <p className="text-gray-600 max-w-2xl mx-auto text-xl md:text-2xl leading-relaxed">
//             We provide everything you need for a safe, memorable, and 
//             <span className="text-amber-700 font-semibold"> transformative mountain experience</span>
//           </p>
//         </div>

//         {/* Interactive Feature Selector with Images */}
//         {/* <div className="mb-16 overflow-x-auto pb-4">
//           <div className="flex gap-4 min-w-max px-4">
//             {features.map((feature, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveFeature(index)}
//                 className={`relative group flex-shrink-0 transition-all duration-500 ${
//                   activeFeature === index ? 'scale-110' : 'hover:scale-105'
//                 }`}
//               >
//                 <div className="relative overflow-hidden rounded-2xl w-48 h-32">
//                   <img
//                     src={feature.image}
//                     alt={feature.title}
//                     className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
//                   />
//                   <div className={`absolute inset-0 transition-all duration-500 ${
//                     activeFeature === index 
//                       ? 'bg-gradient-to-t from-amber-600/80 to-transparent' 
//                       : 'bg-gradient-to-t from-black/50 to-transparent'
//                   }`} />
//                   <div className={`absolute bottom-3 left-3 right-3 transition-all duration-500 ${
//                     activeFeature === index ? 'text-white' : 'text-amber-100'
//                   }`}>
//                     <div className="flex items-center gap-2">
//                       <div className={feature.animation}>
//                         {feature.icon}
//                       </div>
//                       <span className="font-bold text-sm drop-shadow-lg">{feature.title}</span>
//                     </div>
//                   </div>
//                 </div>
//                 {activeFeature === index && (
//                   <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
//                 )}
//               </button>
//             ))}
//           </div>
//         </div> */}

//         {/* Main Feature Display */}
//         <div className="relative mb-10 mx-20">
//           <div>
//             {/* Left: Feature Details */}
           

//             {/* Right: Feature Cards Grid */}
// <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
//   {features.map((feature, index) => {
//     const isActive = activeFeature === index;
//     const Icon = feature.icon.type;

//     return (
//       <div
//         key={index}
//         onMouseEnter={() => setActiveFeature(index)}
//         className={`relative group cursor-pointer transition-all duration-500
//           ${isActive ? "scale-110 z-10" : "opacity-80 hover:opacity-100"}
//         `}
//       >
//         {/* Glow halo */}
//         <div className={`absolute -inset-3 rounded-2xl blur-3xl transition-all duration-500
//           ${isActive ? "bg-amber-400/40 scale-105" : "bg-amber-200/20"}
//         `} />

//         {/* Floating background icon */}
//         <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500
//           ${isActive ? "opacity-10 scale-110 rotate-6" : "opacity-5 scale-100 rotate-0"}
//         `}>
//           <Icon className="w-32 h-32 text-amber-300" />
//         </div>

//         {/* Card content */}
//         <div className={`relative p-6 rounded-2xl bg-white/80 backdrop-blur-xl border transition-shadow duration-500
//           ${isActive ? "shadow-[0_25px_70px_-15px_rgba(251,191,36,0.7)] border-amber-300" : "shadow-md border-amber-200"}
//         `}>
//           <div className={`p-4 rounded-xl mb-4 ${feature.bgColor} transition-transform duration-500
//             ${isActive ? "scale-110 rotate-3" : "group-hover:scale-105"}
//           `}>
//             {feature.icon}
//           </div>
//           <h4 className={`text-lg font-extrabold mb-2 transition-colors
//             ${isActive ? "text-amber-700" : "text-gray-800"}
//           `}>
//             {feature.title}
//           </h4>
//           {/* {isActive && <p className="text-sm text-gray-600 animate-fadeIn">{feature.description}</p>} */}
//           {/* {isActive && <span className="mt-4 px-4 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800">{feature.stats}</span>} */}

//           {/* Particles overlay */}
//           {isActive && <FeatureParticles color="rgba(251,191,36,0.5)" count={feature.particles} />}
//         </div>
//       </div>
//     );
//   })}
// </div>


//           </div>
//         </div>

//         {/* Animated Call-to-Action */}
//         {/* <div className="relative group mb-20">
//           <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
//           <div className="relative bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl overflow-hidden border-2 border-amber-200">
//             <div className="grid lg:grid-cols-2 items-center gap-8 p-12">
//               <div>
//                 <h3 className="text-4xl font-black text-gray-900 mb-4">
//                   Ready for Your
//                   <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
//                     Next Adventure?
//                   </span>
//                 </h3>
//                 <p className="text-gray-600 text-lg mb-8">
//                   Join thousands of adventurers who've experienced the mountains with us.
//                   Book your trek today and receive a special welcome kit!
//                 </p>
//                 <button className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-full hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-amber-300/50">
//                   <Compass className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
//                   Start Planning Adventure
//                   <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
//                 </button>
//               </div>
//               <div className="relative">
//                 <img
//                   src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&h=600&fit=crop"
//                   alt="Adventure group celebrating"
//                   className="rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-700"
//                 />
//                 <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-400 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-xl animate-bounce-slow">
//                   -20%
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div> */}

//         {/* Live Weather/Status */}
//         {/* <div className="bg-white rounded-3xl p-8 border-2 border-amber-100 shadow-xl">
//           <div className="flex items-center justify-between mb-6">
//             <h4 className="text-2xl font-bold text-gray-900">Current Adventure Status</h4>
//             <div className="flex items-center gap-2 text-amber-600">
//               <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
//               <span className="font-bold">LIVE</span>
//             </div>
//           </div>
//           <div className="grid md:grid-cols-4 gap-4">
//             <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
//               <div className="flex items-center gap-3">
//                 <Thermometer className="w-6 h-6 text-amber-600" />
//                 <div>
//                   <div className="text-sm text-gray-500">Temperature</div>
//                   <div className="text-xl font-bold text-gray-900">18°C</div>
//                 </div>
//               </div>
//             </div>
//             <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
//               <div className="flex items-center gap-3">
//                 <Wind className="w-6 h-6 text-amber-600" />
//                 <div>
//                   <div className="text-sm text-gray-500">Wind Speed</div>
//                   <div className="text-xl font-bold text-gray-900">12 km/h</div>
//                 </div>
//               </div>
//             </div>
//             <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
//               <div className="flex items-center gap-3">
//                 <Globe className="w-6 h-6 text-amber-600" />
//                 <div>
//                   <div className="text-sm text-gray-500">Expeditions</div>
//                   <div className="text-xl font-bold text-gray-900">14 Active</div>
//                 </div>
//               </div>
//             </div>
//             <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
//               <div className="flex items-center gap-3">
//                 <Users className="w-6 h-6 text-amber-600" />
//                 <div>
//                   <div className="text-sm text-gray-500">Today's Trekkers</div>
//                   <div className="text-xl font-bold text-gray-900">237 People</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div> */}
//       </div>

//       {/* Add custom animations to tailwind.config.js */}
//       <style>{`
//       @keyframes fadeIn {
//   from {
//     opacity: 0;
//     transform: translateY(6px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// }
// .animate-fadeIn {
//   animation: fadeIn 0.4s ease-out;
// }

//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(10deg); }
//         }
//         @keyframes float-slow {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-40px); }
//         }
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         @keyframes ping-slow {
//           0% { transform: scale(1); opacity: 1; }
//           75%, 100% { transform: scale(2); opacity: 0; }
//         }
//         @keyframes bounce-slow {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-20px); }
//         }
//         @keyframes tilt {
//           0%, 100% { transform: rotate(-3deg); }
//           50% { transform: rotate(3deg); }
//         }
//         @keyframes particle-float {
//           0%, 100% { transform: translate(0, 0); }
//           25% { transform: translate(10px, -10px); }
//           50% { transform: translate(0, -20px); }
//           75% { transform: translate(-10px, -10px); }
//         }
//         @keyframes gradient {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//         .animate-float { animation: float 6s ease-in-out infinite; }
//         .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
//         .animate-spin-slow { animation: spin-slow 20s linear infinite; }
//         .animate-ping-slow { animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite; }
//         .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
//         .animate-tilt { animation: tilt 5s ease-in-out infinite; }
//         .animate-gradient {
//           background-size: 200% auto;
//           animation: gradient 3s ease infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Features;


// components/Features.jsx
import React, { useState, useEffect } from 'react';
import { Mountain, Compass, Shield, Heart, Clock, Award, Sparkles } from 'lucide-react';

const FeaturedTreks = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: <Mountain className="w-10 h-10 text-green-800" />,
      title: "Expert Guides",
      description: "Certified guides with years of experience leading treks safely.",
      stats: "15,000+ Tours Guided",
      bgColor: "bg-green-50",
      particles: 3
    },
    {
      icon: <Compass className="w-10 h-10 text-amber-700" />,
      title: "GPS Navigation",
      description: "Real-time tracking & offline maps for a smooth journey.",
      stats: "99.8% Accuracy",
      bgColor: "bg-yellow-50",
      particles: 4
    },
    {
      icon: <Shield className="w-10 h-10 text-red-700" />,
      title: "Safety First",
      description: "Medical kits, emergency protocols, and 24/7 support.",
      stats: "Zero Major Incidents",
      bgColor: "bg-red-50",
      particles: 2
    },
    {
      icon: <Heart className="w-10 h-10 text-emerald-700" />,
      title: "Eco-Friendly",
      description: "Sustainable trekking practices & waste management.",
      stats: "200+ Tons Waste Removed",
      bgColor: "bg-emerald-50",
      particles: 3
    },
    {
      icon: <Clock className="w-10 h-10 text-blue-700" />,
      title: "Flexible Schedule",
      description: "Trips available year-round with custom dates.",
      stats: "24/7 Booking",
      bgColor: "bg-blue-50",
      particles: 3
    },
    {
      icon: <Award className="w-10 h-10 text-purple-700" />,
      title: "Certified Guides",
      description: "Award-winning trekking company with top standards.",
      stats: "50+ Industry Awards",
      bgColor: "bg-purple-50",
      particles: 4
    }
  ];

  const FeatureParticles = ({ color, count = 5 }) => (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${4 + Math.random() * 6}px`,
            height: `${4 + Math.random() * 6}px`,
            backgroundColor: color,
            left: `${Math.random() * 90 + 5}%`,
            top: `${Math.random() * 90 + 5}%`,
            animation: `particle-float ${3 + Math.random() * 3}s ease-in-out ${i * 0.3}s infinite`
          }}
        />
      ))}
    </div>
  );

  return (
    <section 
      className="relative py-10 overflow-hidden bg-gradient-to-b from-gray-100 via-white to-gray-100"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Mountain Silhouette Background */}
     <div className="absolute inset-0 w-full h-full overflow-hidden">
  {/* Farthest mountain layer */}
  <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
    <path fill="#e2e8f0" d="M0,128L60,144C120,160,240,192,360,176C480,160,600,96,720,74.7C840,53,960,75,1080,101.3C1200,128,1320,160,1380,176L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
  </svg>

  {/* Middle mountain layer */}
  <svg className="absolute bottom-0 w-full h-full opacity-70" viewBox="0 0 1440 320" preserveAspectRatio="none">
    <path fill="#cbd5e1" d="M0,224L60,213.3C120,203,240,181,360,154.7C480,128,600,96,720,112C840,128,960,192,1080,192C1200,192,1320,128,1380,96L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
  </svg>
</div>

   {/* <div className="container relative mx-auto px-4"> */}
         {/* Animated Header */}
         <div className="text-center mb-1">
           <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-amber-500 text-white px-6 py-2 rounded-full mb-6 shadow-lg">
            <Sparkles className="w-6 h-6" />
            <span className="font-bold tracking-wide text-sm">
              WHY ADVENTURERS CHOOSE US
            </span>
            {/* <Mountain className="w-6 h-6" /> */}
          </div>
        
         </div>
      {/* Mouse Glow */}
      <div 
        className="fixed w-64 h-64 bg-gradient-to-r from-gray-300/10 to-gray-400/10 rounded-full pointer-events-none transition-all duration-300"
        style={{
          left: `${mousePosition.x - 128}px`,
          top: `${mousePosition.y - 128}px`,
          opacity: isHovering ? 0.3 : 0,
          scale: isHovering ? 1 : 0
        }}
      />

      <div className="container relative mx-auto px-4">
        {/* Header */}
    <div className="w-full text-center mb-20 px-6 md:px-20">
  <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
    Explore Mountains
    <br/>
    <span className="text-amber-600">With Confidence</span>
  </h2>
  <p className="text-gray-700 text-lg md:text-xl max-w-full">
    We provide safe, unforgettable trekking experiences with expert guides and eco-friendly practices.
  </p>
</div>


        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 relative mx-20">
          {features.map((feature, index) => {
            const isActive = activeFeature === index;
            const Icon = feature.icon.type;

            return (
              <div
                key={index}
                onMouseEnter={() => setActiveFeature(index)}
                className={`relative group cursor-pointer transition-all duration-500
                  ${isActive ? "scale-105 z-10" : "opacity-80 hover:opacity-100"}
                `}
              >
                {/* Glow */}
                <div className={`absolute -inset-3 rounded-2xl blur-3xl transition-all duration-500
                  ${isActive ? "bg-amber-400/20 scale-105" : "bg-gray-200/20"}
                `} />

                {/* Card Content */}
                <div className={`relative p-6 rounded-2xl bg-white/90 backdrop-blur-md border transition-shadow duration-500
                  ${isActive ? "shadow-lg border-amber-300" : "shadow-md border-gray-200"}
                `}> 
                  <div className={`p-4 rounded-xl mb-4 ${feature.bgColor} transition-transform duration-500 flex justify-center
                    ${isActive ? "scale-105" : "group-hover:scale-105"}
                  `}>
                    {feature.icon}
                  </div>
                  <h4 className={`text-lg font-bold mb-1 transition-colors flex justify-center
                    ${isActive ? "text-amber-700" : "text-gray-800"}
                  `}>
                    {feature.title}
                  </h4>
                  {/* {isActive && <p className="text-sm text-gray-600 mt-1 animate-fadeIn">{feature.description}</p>} */}
                  {isActive && <FeatureParticles color="rgba(251,191,36,0.4)" count={feature.particles} />}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.4s ease-out; }

        @keyframes particle-float {
          0%, 100% { transform: translate(0,0); }
          25% { transform: translate(6px,-6px); }
          50% { transform: translate(0,-12px); }
          75% { transform: translate(-6px,-6px); }
        }
      `}</style>
    </section>
  );
};

export default FeaturedTreks;

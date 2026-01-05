// // // components/Features.jsx
// // import React from 'react';
// // import { Mountain, Compass, Shield, Heart, Clock, Award } from 'lucide-react';

// // const Features = () => {
// //   const features = [
// //     {
// //       icon: <Mountain className="w-8 h-8" />,
// //       title: "Expert Guides",
// //       description: "Certified mountain guides with 10+ years of experience",
// //       color: "text-emerald-600"
// //     },
// //     {
// //       icon: <Compass className="w-8 h-8" />,
// //       title: "GPS Navigation",
// //       description: "Real-time tracking with satellite communication",
// //       color: "text-amber-600"
// //     },
// //     {
// //       icon: <Shield className="w-8 h-8" />,
// //       title: "Safety First",
// //       description: "Medical kits, emergency protocols, and insurance",
// //       color: "text-blue-600"
// //     },
// //     {
// //       icon: <Heart className="w-8 h-8" />,
// //       title: "Eco-Friendly",
// //       description: "Sustainable tourism with zero waste policy",
// //       color: "text-green-600"
// //     },
// //     {
// //       icon: <Clock className="w-8 h-8" />,
// //       title: "Flexible Scheduling",
// //       description: "Trips available year-round with custom dates",
// //       color: "text-purple-600"
// //     },
// //     {
// //       icon: <Award className="w-8 h-8" />,
// //       title: "Certified Excellence",
// //       description: "Award-winning trekking company since 2010",
// //       color: "text-red-600"
// //     }
// //   ];

// //   return (
// //     <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
// //       <div className="container mx-auto px-4">
// //         <div className="text-center mb-16">
// //           <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full font-semibold mb-4">
// //             WHY CHOOSE US
// //           </span>
// //           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
// //             Adventure with
// //             <span className="text-emerald-700"> Confidence</span>
// //           </h2>
// //           <p className="text-gray-600 max-w-2xl mx-auto text-lg">
// //             We provide everything you need for a safe, memorable, and 
// //             transformative mountain experience
// //           </p>
// //         </div>

// //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {features.map((feature, index) => (
// //             <div
// //               key={index}
// //               className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
// //             >
// //               <div className={`${feature.color} mb-6 p-4 rounded-xl bg-opacity-10 w-fit group-hover:scale-110 transition-transform duration-300`}>
// //                 {feature.icon}
// //               </div>
// //               <h3 className="text-xl font-bold text-gray-900 mb-3">
// //                 {feature.title}
// //               </h3>
// //               <p className="text-gray-600">
// //                 {feature.description}
// //               </p>
// //               <div className="mt-6 pt-6 border-t border-gray-100">
// //                 <span className="text-sm text-gray-500 group-hover:text-emerald-600 transition-colors duration-300">
// //                   Learn more →
// //                 </span>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Feature Image */}
// //         <div className="mt-20 relative">
// //           <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-amber-500 rounded-3xl opacity-10"></div>
// //           <div className="relative rounded-3xl overflow-hidden">
// //             <img
// //               src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070"
// //               alt="Trekking group on mountain"
// //               className="w-full h-[400px] object-cover"
// //             />
// //             <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent flex items-end">
// //               <div className="p-8 text-white">
// //                 <h3 className="text-3xl font-bold mb-2">Join Our Community</h3>
// //                 <p className="text-lg">Over 50,000 adventurers have trusted us with their journey</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Features;


// // components/Features.jsx
// import React, { useState } from 'react';
// import { Mountain, Compass, Shield, Heart, Clock, Award, ChevronRight, Users, Star } from 'lucide-react';

// const Features = () => {
//   const [activeFeature, setActiveFeature] = useState(0);

//   const features = [
//     {
//       icon: <Mountain className="w-8 h-8" />,
//       title: "Expert Guides",
//       description: "Certified mountain guides with 10+ years of experience",
//       stats: "15,000+ Tours Guided",
//       color: "text-amber-700",
//       bgColor: "bg-amber-50",
//       borderColor: "border-amber-200",
//       hoverColor: "hover:bg-amber-50"
//     },
//     {
//       icon: <Compass className="w-8 h-8" />,
//       title: "GPS Navigation",
//       description: "Real-time tracking with satellite communication",
//       stats: "99.8% Accuracy Rate",
//       color: "text-amber-800",
//       bgColor: "bg-amber-50",
//       borderColor: "border-amber-200",
//       hoverColor: "hover:bg-amber-50"
//     },
//     {
//       icon: <Shield className="w-8 h-8" />,
//       title: "Safety First",
//       description: "Medical kits, emergency protocols, and insurance",
//       stats: "Zero Major Incidents",
//       color: "text-amber-900",
//       bgColor: "bg-amber-50",
//       borderColor: "border-amber-200",
//       hoverColor: "hover:bg-amber-50"
//     },
//     {
//       icon: <Heart className="w-8 h-8" />,
//       title: "Eco-Friendly",
//       description: "Sustainable tourism with zero waste policy",
//       stats: "200+ Tons Waste Removed",
//       color: "text-amber-700",
//       bgColor: "bg-amber-50",
//       borderColor: "border-amber-200",
//       hoverColor: "hover:bg-amber-50"
//     },
//     {
//       icon: <Clock className="w-8 h-8" />,
//       title: "Flexible Scheduling",
//       description: "Trips available year-round with custom dates",
//       stats: "24/7 Booking Support",
//       color: "text-amber-800",
//       bgColor: "bg-amber-50",
//       borderColor: "border-amber-200",
//       hoverColor: "hover:bg-amber-50"
//     },
//     {
//       icon: <Award className="w-8 h-8" />,
//       title: "Certified Excellence",
//       description: "Award-winning trekking company since 2010",
//       stats: "50+ Industry Awards",
//       color: "text-amber-900",
//       bgColor: "bg-amber-50",
//       borderColor: "border-amber-200",
//       hoverColor: "hover:bg-amber-50"
//     }
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-b from-amber-25 to-white">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-100 to-amber-50 rounded-full mb-6 border border-amber-200 shadow-sm">
//             <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
//             <span className="text-amber-800 font-semibold tracking-wider">
//               WHY CHOOSE US
//             </span>
//             <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse delay-300"></div>
//           </div>
          
//           <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
//             Adventure with
//             <span className="relative ml-4">
//               <span className="text-amber-700 relative z-10">Confidence</span>
//               <span className="absolute bottom-2 left-0 w-full h-4 bg-amber-200/40 -z-10"></span>
//             </span>
//           </h2>
          
//           <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
//             We provide everything you need for a safe, memorable, and 
//             transformative mountain experience
//           </p>
//         </div>

//         {/* Interactive Feature Selector */}
//         <div className="mb-12 overflow-x-auto">
//           <div className="flex flex-wrap justify-center gap-3 min-w-max">
//             {features.map((feature, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveFeature(index)}
//                 className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
//                   activeFeature === index
//                     ? 'bg-amber-600 text-white shadow-lg shadow-amber-200'
//                     : 'bg-amber-100 text-amber-800 hover:bg-amber-200 hover:shadow-md'
//                 }`}
//               >
//                 {feature.icon}
//                 {feature.title}
//                 {activeFeature === index && (
//                   <ChevronRight className="w-4 h-4 animate-pulse" />
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Features Grid with Enhanced Cards */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               onMouseEnter={() => setActiveFeature(index)}
//               className={`relative group bg-white rounded-2xl p-8 shadow-lg transition-all duration-500 border-2 ${
//                 activeFeature === index 
//                   ? 'border-amber-500 shadow-xl shadow-amber-100 scale-[1.02]' 
//                   : 'border-amber-100 hover:border-amber-300'
//               } ${feature.hoverColor}`}
//             >
//               {/* Glow Effect */}
//               <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500/5 to-amber-300/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
//               {/* Top Section */}
//               <div className="relative">
//                 <div className={`mb-6 p-4 rounded-xl ${feature.bgColor} ${feature.borderColor} border-2 w-fit transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3`}>
//                   {feature.icon}
//                 </div>
                
//                 <div className="flex items-center justify-between mb-2">
//                   <h3 className={`text-2xl font-bold ${feature.color} transition-colors duration-300`}>
//                     {feature.title}
//                   </h3>
//                   {index === 2 && <Shield className="w-6 h-6 text-amber-500" />}
//                   {index === 5 && <Award className="w-6 h-6 text-amber-500" />}
//                 </div>
                
//                 <p className="text-gray-600 mb-4">
//                   {feature.description}
//                 </p>
//               </div>

//               {/* Stats Badge */}
//               <div className={`mt-4 px-4 py-2 rounded-lg ${feature.bgColor} inline-block`}>
//                 <span className={`text-sm font-semibold ${feature.color} flex items-center gap-1`}>
//                   <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
//                   {feature.stats}
//                 </span>
//               </div>

//               {/* Interactive Footer */}
//               <div className="mt-8 pt-6 border-t border-amber-100 flex items-center justify-between">
//                 <span className={`text-sm font-medium ${feature.color} group-hover:text-amber-700 transition-colors duration-300 flex items-center gap-1`}>
//                   <span>Learn more</span>
//                   <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
//                 </span>
//                 <div className="flex items-center text-amber-600">
//                   <Star className="w-4 h-4 fill-current" />
//                   <Star className="w-4 h-4 fill-current" />
//                   <Star className="w-4 h-4 fill-current" />
//                   <Star className="w-4 h-4 fill-current" />
//                   <Star className="w-4 h-4 fill-current" />
//                 </div>
//               </div>

//               {/* Progress Indicator */}
//               {activeFeature === index && (
//                 <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-b-2xl"></div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Community Stats Banner */}
//         <div className="mt-16 bg-gradient-to-r from-amber-50 to-amber-100 rounded-3xl p-8 border border-amber-200 shadow-lg">
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <div className="flex items-center justify-center gap-2 mb-2">
//                 <Users className="w-6 h-6 text-amber-700" />
//                 <span className="text-4xl font-bold text-amber-900">50K+</span>
//               </div>
//               <p className="text-amber-800 font-medium">Adventurers Trusted Us</p>
//             </div>
//             <div className="text-center">
//               <div className="flex items-center justify-center gap-2 mb-2">
//                 <Mountain className="w-6 h-6 text-amber-700" />
//                 <span className="text-4xl font-bold text-amber-900">200+</span>
//               </div>
//               <p className="text-amber-800 font-medium">Mountain Routes</p>
//             </div>
//             <div className="text-center">
//               <div className="flex items-center justify-center gap-2 mb-2">
//                 <Award className="w-6 h-6 text-amber-700" />
//                 <span className="text-4xl font-bold text-amber-900">98%</span>
//               </div>
//               <p className="text-amber-800 font-medium">Satisfaction Rate</p>
//             </div>
//           </div>
//         </div>

//         {/* Feature Image with Overlay */}
//         <div className="mt-20 relative group">
//           <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-amber-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
//           <div className="relative rounded-3xl overflow-hidden border-2 border-amber-200 shadow-2xl">
//             <img
//               src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070"
//               alt="Trekking group on mountain"
//               className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 via-amber-900/20 to-transparent flex items-end p-8">
//               <div className="text-white">
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="flex">
//                     {[...Array(5)].map((_, i) => (
//                       <Star key={i} className="w-5 h-5 fill-amber-300 text-amber-300" />
//                     ))}
//                   </div>
//                   <span className="text-amber-200 font-semibold">4.9/5 Rating</span>
//                 </div>
//                 <h3 className="text-4xl font-bold mb-3">Join Our Adventure Community</h3>
//                 <p className="text-lg text-amber-100 max-w-xl">
//                   Over 50,000 adventurers have embarked on unforgettable journeys with us. 
//                   Be part of our growing family of mountain explorers.
//                 </p>
//                 <button className="mt-6 px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-full hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-200/50">
//                   Start Your Adventure
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;


// components/Features.jsx
import React, { useState, useEffect } from 'react';
import { Mountain, Compass, Shield, Heart, Clock, Award, ChevronRight, Users, Star, MapPin, Thermometer, Trees, Globe, Cloud, Wind } from 'lucide-react';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: <Mountain className="w-10 h-10" />,
      title: "Expert Guides",
      description: "Certified mountain guides with 10+ years of experience leading expeditions",
      stats: "15,000+ Tours Guided",
      color: "text-amber-700",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
      borderColor: "border-amber-200",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
      animation: "animate-float",
      particles: 3
    },
    {
      icon: <Compass className="w-10 h-10" />,
      title: "GPS Navigation",
      description: "Real-time tracking with satellite communication & offline maps",
      stats: "99.8% Accuracy Rate",
      color: "text-amber-800",
      bgColor: "bg-gradient-to-br from-amber-50 to-yellow-50",
      borderColor: "border-amber-200",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w-400&h=300&fit=crop",
      animation: "animate-spin-slow",
      particles: 4
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Safety First",
      description: "Medical kits, emergency protocols, insurance & 24/7 support",
      stats: "Zero Major Incidents",
      color: "text-amber-900",
      bgColor: "bg-gradient-to-br from-amber-50 to-red-50",
      borderColor: "border-amber-200",
      image: "https://images.unsplash.com/photo-1580654843061-8c90a86b9466?w=400&h=300&fit=crop",
      animation: "animate-pulse",
      particles: 2
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Eco-Friendly",
      description: "Sustainable tourism with zero waste policy & carbon offsetting",
      stats: "200+ Tons Waste Removed",
      color: "text-amber-700",
      bgColor: "bg-gradient-to-br from-emerald-50 to-amber-50",
      borderColor: "border-emerald-200",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      animation: "animate-bounce-slow",
      particles: 5
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Flexible Scheduling",
      description: "Trips available year-round with fully customizable dates & routes",
      stats: "24/7 Booking Support",
      color: "text-amber-800",
      bgColor: "bg-gradient-to-br from-amber-50 to-blue-50",
      borderColor: "border-blue-200",
      image: "https://images.unsplash.com/photo-1536152471326-642d7bb3d0f3?w=400&h=300&fit=crop",
      animation: "animate-spin-slow",
      particles: 3
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Certified Excellence",
      description: "Award-winning trekking company with industry-leading standards",
      stats: "50+ Industry Awards",
      color: "text-amber-900",
      bgColor: "bg-gradient-to-br from-amber-50 to-purple-50",
      borderColor: "border-purple-200",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      animation: "animate-tilt",
      particles: 4
    }
  ];

  const FloatingIcons = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`
          }}
        >
          <div className="text-amber-300/20 animate-float-slow">
            {i % 4 === 0 && <Mountain className="w-8 h-8" />}
            {i % 4 === 1 && <Cloud className="w-8 h-8" />}
            {i % 4 === 2 && <Trees className="w-8 h-8" />}
            {i % 4 === 3 && <MapPin className="w-8 h-8" />}
          </div>
        </div>
      ))}
    </div>
  );

  const FeatureParticles = ({ count }) => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-amber-400/30 rounded-full"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
            animation: `particle-float ${3 + Math.random() * 2}s infinite ease-in-out`,
            animationDelay: `${i * 0.5}s`
          }}
        />
      ))}
    </div>
  );

  return (
    <section 
      className="relative py-24 overflow-hidden bg-gradient-to-b from-emerald-100 via-white to-emerald-100"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-amber-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-200/10 rounded-full blur-3xl"></div>
      </div>

      <FloatingIcons />

      {/* Mouse Follow Effect */}
      <div 
        className="fixed w-64 h-64 bg-gradient-to-r from-amber-200/5 to-orange-200/5 rounded-full pointer-events-none transition-all duration-300"
        style={{
          left: `${mousePosition.x - 128}px`,
          top: `${mousePosition.y - 128}px`,
          opacity: isHovering ? 0.3 : 0,
          scale: isHovering ? 1 : 0
        }}
      />

      <div className="container relative mx-auto px-4">
        {/* Animated Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl mb-8 border-2 border-amber-200 shadow-lg hover:shadow-amber-200/50 transition-all duration-500 hover:scale-105">
            <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
            <span className="text-amber-800 font-bold tracking-widest text-sm">
              WHY ADVENTURERS CHOOSE US
            </span>
            <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse delay-300"></div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 max-w-full">
            <span className="relative inline-block">
              <span className="relative z-10 font-serif">Adventure</span>
              <span className="absolute bottom-2 left-0 w-full h-6 bg-gradient-to-r from-amber-400/40 to-orange-400/40 -z-10 transform -skew-x-12"></span>
            </span>
            <span className="block mt-4">
              with <span className="text-transparent font-serif bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 animate-gradient">Confidence</span>
            </span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-xl md:text-2xl leading-relaxed">
            We provide everything you need for a safe, memorable, and 
            <span className="text-amber-700 font-semibold"> transformative mountain experience</span>
          </p>
        </div>

        {/* Interactive Feature Selector with Images */}
        {/* <div className="mb-16 overflow-x-auto pb-4">
          <div className="flex gap-4 min-w-max px-4">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`relative group flex-shrink-0 transition-all duration-500 ${
                  activeFeature === index ? 'scale-110' : 'hover:scale-105'
                }`}
              >
                <div className="relative overflow-hidden rounded-2xl w-48 h-32">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 transition-all duration-500 ${
                    activeFeature === index 
                      ? 'bg-gradient-to-t from-amber-600/80 to-transparent' 
                      : 'bg-gradient-to-t from-black/50 to-transparent'
                  }`} />
                  <div className={`absolute bottom-3 left-3 right-3 transition-all duration-500 ${
                    activeFeature === index ? 'text-white' : 'text-amber-100'
                  }`}>
                    <div className="flex items-center gap-2">
                      <div className={feature.animation}>
                        {feature.icon}
                      </div>
                      <span className="font-bold text-sm drop-shadow-lg">{feature.title}</span>
                    </div>
                  </div>
                </div>
                {activeFeature === index && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div> */}

        {/* Main Feature Display */}
        <div className="relative mb-10 mx-20">
          <div>
            {/* Left: Feature Details */}
           

            {/* Right: Feature Cards Grid */}
         <div className="grid md:grid-cols-4 gap-6">
  {features.map((feature, index) => (
    <div
      key={index}
      onClick={() => setActiveFeature(index)}
      onMouseEnter={() => setActiveFeature(index)}
      className={`relative group cursor-pointer transition-all duration-500 ${
        activeFeature === index ? 'scale-[1.03]' : ''
      }`}
    >
      <div
        className={`
          relative h-full overflow-hidden rounded-lg bg-white border-3 border-amber-600
          transition-all duration-500
        shadow-sm
          hover:shadow-[0_22px_40px_-16px_rgba(251,191,36,0.65)]
        `}
      >
        {/* Soft Amber Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 
                          bg-amber-400/30 blur-3xl rounded-full" />
        </div>

        {/* Decorative Gradient Orb */}
        <div className="absolute top-0 right-0 w-32 h-32 
                        bg-gradient-to-br from-amber-300 to-orange-400 
                        opacity-10 blur-2xl rounded-full" />

        <div className="relative p-2 flex flex-col items-center">
          {/* Header */}
          <div className="flex items-start justify-between mb-5">
            <div
              className={`
                p-1 rounded-xl ${feature.bgColor}
                shadow-md shadow-amber-200/50
                group-hover:scale-110 transition-transform duration-300
              `}
            >
              {feature.icon}
            </div>

          
          </div>

          {/* Title */}
          <h4
            className={`
              text-lg font-bold mb-2 ${feature.color}
              group-hover:text-amber-700 transition-colors
            `}
          >
            {feature.title}
          </h4>

          {/* Description */}
          {/* <p className="text-gray-600 text-sm mb-5 leading-relaxed">
            {feature.description.split(' ').slice(0, 12).join(' ')}...
          </p> */}

          {/* Footer */}
       
        </div>

        {/* Border Highlight */}
        <div
          className="absolute inset-0 rounded-2xl border border-transparent 
                     group-hover:border-amber-300/60 transition-all duration-500"
        />
      </div>
    </div>
  ))}
</div>

          </div>
        </div>

        {/* Animated Call-to-Action */}
        {/* <div className="relative group mb-20">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl overflow-hidden border-2 border-amber-200">
            <div className="grid lg:grid-cols-2 items-center gap-8 p-12">
              <div>
                <h3 className="text-4xl font-black text-gray-900 mb-4">
                  Ready for Your
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                    Next Adventure?
                  </span>
                </h3>
                <p className="text-gray-600 text-lg mb-8">
                  Join thousands of adventurers who've experienced the mountains with us.
                  Book your trek today and receive a special welcome kit!
                </p>
                <button className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-full hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-amber-300/50">
                  <Compass className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
                  Start Planning Adventure
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&h=600&fit=crop"
                  alt="Adventure group celebrating"
                  className="rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-400 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-xl animate-bounce-slow">
                  -20%
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Live Weather/Status */}
        {/* <div className="bg-white rounded-3xl p-8 border-2 border-amber-100 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-2xl font-bold text-gray-900">Current Adventure Status</h4>
            <div className="flex items-center gap-2 text-amber-600">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-bold">LIVE</span>
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
              <div className="flex items-center gap-3">
                <Thermometer className="w-6 h-6 text-amber-600" />
                <div>
                  <div className="text-sm text-gray-500">Temperature</div>
                  <div className="text-xl font-bold text-gray-900">18°C</div>
                </div>
              </div>
            </div>
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
              <div className="flex items-center gap-3">
                <Wind className="w-6 h-6 text-amber-600" />
                <div>
                  <div className="text-sm text-gray-500">Wind Speed</div>
                  <div className="text-xl font-bold text-gray-900">12 km/h</div>
                </div>
              </div>
            </div>
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
              <div className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-amber-600" />
                <div>
                  <div className="text-sm text-gray-500">Expeditions</div>
                  <div className="text-xl font-bold text-gray-900">14 Active</div>
                </div>
              </div>
            </div>
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-amber-600" />
                <div>
                  <div className="text-sm text-gray-500">Today's Trekkers</div>
                  <div className="text-xl font-bold text-gray-900">237 People</div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* Add custom animations to tailwind.config.js */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-40px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes tilt {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        @keyframes particle-float {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(10px, -10px); }
          50% { transform: translate(0, -20px); }
          75% { transform: translate(-10px, -10px); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-ping-slow { animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
        .animate-tilt { animation: tilt 5s ease-in-out infinite; }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Features;
// components/Hero.jsx
import React from 'react';
import { Play, ArrowRight, Shield, Users, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-8"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute backdrop-blur-sm inset-0 bg-gradient-to-r from-black/20 to-black/60 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://www.w3schools.com/howto/rain.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container mx-auto px-4 z-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-amber-500/20 backdrop-blur-sm border border-amber-300/30 rounded-full px-4 py-2 my-4">
            <Shield className="w-4 h-4 text-amber-300 mr-2" />
            <span className="text-amber-100 text-sm font-medium">
              Trusted by 10,000+ Adventurers
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Discover the
            <span className="block text-amber-300">Mountain Trails</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
            Experience breathtaking landscapes, challenge your limits, and create 
            unforgettable memories with our expert-guided treks across the world's 
            most spectacular mountains.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-amber-300 text-amber-300 hover:bg-amber-300/10 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              Watch Adventure
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-amber-300">150+</div>
              <div className="text-sm text-emerald-100">Treks Available</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-amber-300">98%</div>
              <div className="text-sm text-emerald-100">Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <Users className="w-8 h-8 text-amber-300 mx-auto mb-2" />
              <div className="text-sm text-emerald-100">Expert Guides</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <Star className="w-8 h-8 text-amber-300 mx-auto mb-2" />
              <div className="text-sm text-emerald-100">5-Star Reviews</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-300 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


// import React, { useState, useEffect } from 'react';
// import { 
//   Play, 
//   ArrowRight, 
//   Shield, 
//   Users, 
//   Star, 
//   Mountain,
//   MapPin,
//   Compass,
//   Sparkles,
//   ChevronDown
// } from 'lucide-react';

// const Hero = () => {
//   const [typedText, setTypedText] = useState('');
//   const [textIndex, setTextIndex] = useState(0);
//   const textArray = ['Himalayas', 'Andes', 'Alps', 'Rockies', 'Patagonia'];

//   useEffect(() => {
//     if (textIndex < textArray.length) {
//       const currentText = textArray[textIndex];
//       let charIndex = 0;
      
//       const typeWriter = () => {
//         if (charIndex <= currentText.length) {
//           setTypedText(currentText.substring(0, charIndex));
//           charIndex++;
//           setTimeout(typeWriter, 100);
//         } else {
//           setTimeout(() => {
//             setTextIndex((prev) => (prev + 1) % textArray.length);
//             setTypedText('');
//           }, 1500);
//         }
//       };
      
//       typeWriter();
//     }
//   }, [textIndex]);

//   return (
//     <section 
//       id="home" 
//       className="relative min-h-screen flex items-center overflow-hidden"
//     >
//       {/* Animated Background Layers */}
//       <div className="absolute inset-0 z-0">
//         {/* Main Background Gradient */}
//         <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-black to-emerald-900"></div>
        
//         {/* Animated Mountain Silhouettes */}
//         <div className="absolute bottom-0 left-0 right-0 h-1/3">
//           {/* Far Mountains */}
//           <div className="absolute bottom-0 left-0 w-full h-32">
//             <div className="w-full h-full bg-gradient-to-t from-emerald-900/80 to-transparent clip-path-mountains-1"></div>
//           </div>
          
//           {/* Mid Mountains */}
//           <div className="absolute bottom-0 left-0 w-full h-48">
//             <div className="w-full h-full bg-gradient-to-t from-emerald-800/70 to-transparent clip-path-mountains-2"></div>
//           </div>
          
//           {/* Front Mountains */}
//           <div className="absolute bottom-0 left-0 w-full h-64">
//             <div className="w-full h-full bg-gradient-to-t from-emerald-700/60 to-transparent clip-path-mountains-3"></div>
//           </div>
//         </div>
        
//         {/* Floating Particles */}
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-1 h-1 bg-amber-300/30 rounded-full animate-float"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${i * 0.5}s`,
//               animationDuration: `${3 + Math.random() * 2}s`
//             }}
//           />
//         ))}
        
//         {/* Star Effect */}
//         <div className="absolute inset-0">
//           {[...Array(30)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute w-1 h-1 bg-amber-100/50 rounded-full animate-pulse"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 2}s`,
//                 animationDuration: `${1 + Math.random() * 2}s`
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="container mx-auto px-4 z-20 relative mt-16">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left Column - Hero Content */}
//             <div className="text-left">
//               {/* Badge */}
//               <div className="inline-flex items-center bg-gradient-to-r from-black/20 to-black/60 backdrop-blur-sm border border-amber-300/30 rounded-full px-5 py-2.5 mb-8">
//                 <div className="flex items-center gap-2">
//                   <Sparkles className="w-4 h-4 text-amber-300" />
//                   <span className="text-amber-300 text-sm font-medium tracking-wider">
//                     WELCOME TO TREKQUEST
//                   </span>
//                 </div>
//               </div>

//               {/* Main Heading */}
//               <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
//                 <span className="text-emerald-100">Discover</span>
//                 <span className="block text-amber-300 mt-2">The World's</span>
//                 <div className="h-20 mt-2">
//                   <span className="text-amber-300 border-b-2 border-amber-300/30">
//                     {typedText}
//                     <span className="animate-pulse">|</span>
//                   </span>
//                 </div>
//               </h1>

//               {/* Subheading */}
//               <p className="text-lg text-emerald-100 mb-10 leading-relaxed max-w-xl">
//                 Embark on extraordinary adventures across the globe's most majestic 
//                 mountain ranges. Experience breathtaking landscapes, challenge your limits, 
//                 and create unforgettable memories with our expert-guided expeditions.
//               </p>

//               {/* CTA Buttons */}
//               <div className="flex flex-col sm:flex-row gap-4 mb-16">
//                 <button className="group relative overflow-hidden bg-amber-500 hover:bg-amber-600 text-amber-100 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] border border-amber-300/30">
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-300/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
//                   <span className="relative flex items-center justify-center gap-3">
//                     Start Your Journey
//                     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
//                   </span>
//                 </button>
//                 <button className="group relative overflow-hidden bg-gradient-to-r from-black/20 to-black/60 backdrop-blur-sm border-2 border-amber-300/30 text-amber-300 hover:text-amber-100 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:border-amber-300">
//                   <span className="relative flex items-center justify-center gap-3">
//                     <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
//                     Watch Adventure
//                   </span>
//                 </button>
//               </div>

//               {/* Quick Stats */}
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                 <div className="text-center p-4 bg-gradient-to-br from-black/20 to-black/60 backdrop-blur-sm rounded-xl border border-amber-300/20">
//                   <div className="text-2xl md:text-3xl font-bold text-amber-300">150+</div>
//                   <div className="text-xs text-emerald-100 mt-1">Treks Available</div>
//                 </div>
//                 <div className="text-center p-4 bg-gradient-to-br from-black/20 to-black/60 backdrop-blur-sm rounded-xl border border-amber-300/20">
//                   <div className="text-2xl md:text-3xl font-bold text-amber-300">98%</div>
//                   <div className="text-xs text-emerald-100 mt-1">Success Rate</div>
//                 </div>
//                 <div className="text-center p-4 bg-gradient-to-br from-black/20 to-black/60 backdrop-blur-sm rounded-xl border border-amber-300/20">
//                   <div className="text-2xl md:text-3xl font-bold text-amber-300">24/7</div>
//                   <div className="text-xs text-emerald-100 mt-1">Guide Support</div>
//                 </div>
//                 <div className="text-center p-4 bg-gradient-to-br from-black/20 to-black/60 backdrop-blur-sm rounded-xl border border-amber-300/20">
//                   <div className="text-2xl md:text-3xl font-bold text-amber-300">10K+</div>
//                   <div className="text-xs text-emerald-100 mt-1">Happy Trekkers</div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column - Interactive Cards */}
//             <div className="relative">
//               {/* Main Feature Card */}
//               <div className="relative bg-gradient-to-br from-black/30 to-black/60 backdrop-blur-xl rounded-2xl overflow-hidden border border-amber-300/30 p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
//                 <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-500/20 to-emerald-500/20 rounded-full blur-xl"></div>
//                 <div className="relative z-10">
//                   <div className="flex items-center gap-3 mb-6">
//                     <div className="p-3 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-xl">
//                       <Mountain className="w-8 h-8 text-amber-300" />
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold text-amber-300">Featured Expedition</h3>
//                       <p className="text-sm text-emerald-100">Everest Base Camp Trek</p>
//                     </div>
//                   </div>
                  
//                   <div className="space-y-4 mb-6">
//                     <div className="flex items-center gap-2">
//                       <MapPin className="w-5 h-5 text-amber-300" />
//                       <span className="text-emerald-100">Nepal Himalayas</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Compass className="w-5 h-5 text-amber-300" />
//                       <span className="text-emerald-100">14 Days • Challenging</span>
//                     </div>
//                   </div>
                  
//                   <div className="relative h-48 rounded-xl overflow-hidden mb-6">
//                     <img
//                       src="https://images.unsplash.com/photo-1580137189272-c9379f8864fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800"
//                       alt="Everest Base Camp"
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
//                     <div className="absolute bottom-4 left-4">
//                       <div className="text-2xl font-bold text-amber-300">$1899</div>
//                       <div className="text-sm text-emerald-100">starting per person</div>
//                     </div>
//                   </div>
                  
//                   <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-amber-100 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-[1.02] border border-amber-300/30">
//                     Book Now
//                   </button>
//                 </div>
//               </div>

//               {/* Floating Testimonial Card */}
//               <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-emerald-900/60 to-emerald-800/40 backdrop-blur-sm rounded-xl p-6 border border-emerald-300/20 transform -rotate-3 hover:rotate-0 transition-transform duration-500 w-64">
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-300/30">
//                     <img
//                       src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100"
//                       alt="Sarah Johnson"
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-amber-100">Sarah Johnson</h4>
//                     <div className="flex items-center">
//                       {[...Array(5)].map((_, i) => (
//                         <Star key={i} className="w-3 h-3 text-amber-300 fill-amber-300" />
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//                 <p className="text-sm text-emerald-100 italic">
//                   "The most incredible experience of my life. Professional guides and breathtaking views!"
//                 </p>
//               </div>

//               {/* Floating Location Card */}
//               <div className="absolute -top-6 -right-6 bg-gradient-to-br from-black/40 to-black/70 backdrop-blur-sm rounded-xl p-4 border border-amber-300/30 transform rotate-6 hover:rotate-0 transition-transform duration-500 w-56">
//                 <div className="flex items-center gap-2 mb-2">
//                   <MapPin className="w-5 h-5 text-amber-300" />
//                   <span className="text-sm font-bold text-amber-100">Currently Trending</span>
//                 </div>
//                 <div className="text-xs text-emerald-100 space-y-1">
//                   <div className="flex justify-between">
//                     <span>Annapurna Circuit</span>
//                     <span className="text-amber-300">✦ 124 bookings</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Inca Trail</span>
//                     <span className="text-amber-300">✦ 98 bookings</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Kilimanjaro</span>
//                     <span className="text-amber-300">✦ 76 bookings</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
//         <button className="flex flex-col items-center gap-2 group">
//           <span className="text-xs text-amber-300/70 tracking-wider group-hover:text-amber-300 transition-colors duration-300">
//             EXPLORE MORE
//           </span>
//           <div className="w-6 h-10 border-2 border-amber-300/50 rounded-full flex justify-center group-hover:border-amber-300 transition-colors duration-300">
//             <div className="w-1 h-3 bg-amber-300/50 rounded-full mt-2 group-hover:bg-amber-300 transition-colors duration-300 animate-pulse"></div>
//           </div>
//         </button>
//       </div>

//       {/* Custom CSS */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0) translateX(0); }
//           33% { transform: translateY(-10px) translateX(10px); }
//           66% { transform: translateY(10px) translateX(-10px); }
//         }
//         @keyframes bounce-slow {
//           0%, 100% { transform: translateX(-50%) translateY(0); }
//           50% { transform: translateX(-50%) translateY(-10px); }
//         }
//         .animate-float {
//           animation: float infinite ease-in-out;
//         }
//         .animate-bounce-slow {
//           animation: bounce-slow 2s infinite;
//         }
//         .clip-path-mountains-1 {
//           clip-path: polygon(0% 100%, 10% 70%, 20% 80%, 30% 60%, 40% 85%, 50% 50%, 60% 75%, 70% 55%, 80% 90%, 90% 65%, 100% 100%);
//         }
//         .clip-path-mountains-2 {
//           clip-path: polygon(0% 100%, 15% 40%, 25% 60%, 35% 30%, 45% 70%, 55% 25%, 65% 55%, 75% 35%, 85% 75%, 95% 45%, 100% 100%);
//         }
//         .clip-path-mountains-3 {
//           clip-path: polygon(0% 100%, 5% 20%, 15% 40%, 25% 10%, 35% 45%, 45% 5%, 55% 35%, 65% 15%, 75% 50%, 85% 25%, 95% 55%, 100% 100%);
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero; 
import {
  Heart,
  LogOut,
  MapPin,
  Menu,
  Phone,
  Star,
  User,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const userMenuRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Close dropdown if clicked outside
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Treks", href: "/treks" },
    // { name: "Destinations", href: "/destinations" },
    { name: "Gallery", href: "/trek-gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const alwaysScrolledPages = ["/trek-gallery", "/wishlist"];

  const isPageScrolledStyle = alwaysScrolledPages.includes(location.pathname);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isPageScrolledStyle
          ? "bg-emerald-900/95 backdrop-blur-md py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-amber-500 p-2 rounded-lg">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">TrekkVede</h1>
              <p className="text-xs text-amber-300">Adventure Awaits</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-amber-50 hover:text-amber-300 font-medium transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-amber-300" />
              <span className="text-white">+91 XXXXX XXXXX</span>
            </div>

            <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Book Now
            </button>

            {/* User Dropdown */}
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="border border-amber-300 text-amber-300 px-4 py-2 rounded-full hover:bg-amber-300/10 transition-colors duration-300 flex items-center"
              >
                <User className="w-5 h-5" />
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-emerald-800/95 backdrop-blur-md rounded-lg shadow-lg py-2 flex flex-col z-50 animate-fadeIn">
                  <button
                    onClick={() => navigate("/wishlist")}
                    className="flex items-center gap-2 px-4 py-2 text-white hover:bg-emerald-700 transition-colors duration-200"
                  >
                    <Heart className="w-4 h-4 text-pink-400" /> Wishlist
                  </button>

                  <button className="flex items-center gap-2 px-4 py-2 text-white hover:bg-emerald-700 transition-colors duration-200">
                    <Star className="w-4 h-4 text-yellow-400" /> Likes
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 text-white hover:bg-emerald-700 transition-colors duration-200">
                    <LogOut className="w-4 h-4 text-red-400" /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-emerald-800/95 backdrop-blur-md rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-amber-300 py-2 px-4 rounded-lg hover:bg-emerald-700/50 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-emerald-700">
                <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                  Book Your Adventure
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Tailwind animation for dropdown */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(-5px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-in-out forwards;
        }
      `}</style>
    </header>
  );
};

export default Header;

// import React, { useState, useEffect } from 'react';
// import { Menu, X, MapPin, Phone, User } from 'lucide-react';
// import { useLocation } from 'react-router-dom'; // <-- for detecting current page

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation(); // get current path

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { name: 'Home', href: '/' },
//     { name: 'Treks', href: '/treks' },
//     { name: 'Destinations', href: '/destinations' },
//     { name: 'Gallery', href: '/gallery' },
//     { name: 'About', href: '/about' },
//     { name: 'Contact', href: '/contact' },
//   ];

//   // Pages where the "scrolled style" should always apply
//   const alwaysScrolledPages = ['/trek-gallery', '/treks'];

//   const isPageScrolledStyle = alwaysScrolledPages.includes(location.pathname);

//   return (
//     <header
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         isScrolled || isPageScrolledStyle
//           ? 'bg-emerald-900/95 backdrop-blur-md py-3 shadow-lg'
//           : 'bg-transparent py-5'
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center space-x-2">
//             <div className="bg-amber-500 p-2 rounded-lg">
//               <MapPin className="w-6 h-6 text-white" />
//             </div>
//             <div>
//               <h1 className="text-2xl font-bold text-white">TrekkVede</h1>
//               <p className="text-xs text-amber-300">Adventure Awaits</p>
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 className="text-amber-50 hover:text-amber-300 font-medium transition-colors duration-300"
//               >
//                 {item.name}
//               </a>
//             ))}
//           </nav>

//           {/* Contact Info & CTA */}
//           <div className="hidden lg:flex items-center space-x-6">
//             <div className="flex items-center space-x-2">
//               <Phone className="w-4 h-4 text-amber-300" />
//               <span className="text-white">+91 XXXXX XXXXX</span>
//             </div>
//             <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
//               Book Now
//             </button>
//             <button className="border border-amber-300 text-amber-300 px-4 py-2 rounded-full hover:bg-amber-300/10 transition-colors duration-300">
//               <User className="w-5 h-5" />
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-white"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden mt-4 bg-emerald-800/95 backdrop-blur-md rounded-lg p-4">
//             <div className="flex flex-col space-y-4">
//               {navItems.map((item) => (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   className="text-white hover:text-amber-300 py-2 px-4 rounded-lg hover:bg-emerald-700/50 transition-colors duration-300"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item.name}
//                 </a>
//               ))}
//               <div className="pt-4 border-t border-emerald-700">
//                 <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
//                   Book Your Adventure
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;

// components/Header.jsx
// import React, { useState, useEffect } from 'react';
// import { Menu, X, MapPin, Phone, User } from 'lucide-react';

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { name: 'Home', href: '#home' },
//     { name: 'Treks', href: '#treks' },
//     { name: 'Destinations', href: '#destinations' },
//     { name: 'Gallery', href: '#gallery' },
//     { name: 'About', href: '#about' },
//     { name: 'Contact', href: '#contact' },
//   ];

//   return (
//     <header
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         isScrolled
//           ? 'bg-emerald-900/95 backdrop-blur-md py-3 shadow-lg'
//           : 'bg-transparent py-5'
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center space-x-2">
//             <div className="bg-amber-500 p-2 rounded-lg">
//               <MapPin className="w-6 h-6 text-white" />
//             </div>
//             <div>
//               <h1 className="text-2xl font-bold text-white">TrekkVede</h1>
//               <p className="text-xs text-amber-300">Adventure Awaits</p>
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 className="text-amber-50 hover:text-amber-300 font-medium transition-colors duration-300"
//               >
//                 {item.name}
//               </a>
//             ))}
//           </nav>

//           {/* Contact Info & CTA */}
//           <div className="hidden lg:flex items-center space-x-6">
//             <div className="flex items-center space-x-2">
//               <Phone className="w-4 h-4 text-amber-300" />
//               <span className="text-white">+91 XXXXX XXXXX</span>
//             </div>
//             <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
//               Book Now
//             </button>
//             <button className="border border-amber-300 text-amber-300 px-4 py-2 rounded-full hover:bg-amber-300/10 transition-colors duration-300">
//               <User className="w-5 h-5" />
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-white"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden mt-4 bg-emerald-800/95 backdrop-blur-md rounded-lg p-4">
//             <div className="flex flex-col space-y-4">
//               {navItems.map((item) => (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   className="text-white hover:text-amber-300 py-2 px-4 rounded-lg hover:bg-emerald-700/50 transition-colors duration-300"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item.name}
//                 </a>
//               ))}
//               <div className="pt-4 border-t border-emerald-700">
//                 <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
//                   Book Your Adventure
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;

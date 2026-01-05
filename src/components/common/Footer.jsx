// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-10">
//       <div className="container mx-auto grid md:grid-cols-3 gap-8">
//         <div>
//           <h3 className="font-bold text-xl mb-2">TrekMaster</h3>
//           <p>Explore treks across India with professional guides and curated itineraries.</p>
//         </div>
//         <div>
//           <h3 className="font-bold mb-2">Follow Us</h3>
//           <div className="flex gap-4">
//             <a href="#">Facebook</a>
//             <a href="#">Instagram</a>
//             <a href="#">Twitter</a>
//           </div>
//         </div>
//         <div>
//           <h3 className="font-bold mb-2">Newsletter</h3>
//           <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded text-black w-full"/>
//           <button className="mt-2 bg-green-600 px-4 py-2 rounded hover:bg-green-700 w-full">Subscribe</button>
//         </div>
//       </div>
//       <div className="text-center mt-10 text-gray-400">
//         © 2026 TrekMaster. Terms & Conditions | Privacy Policy
//       </div>
//     </footer>
//   );
// };

// export default Footer;



// components/Footer.jsx
import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="bg-emerald-900 text-white pt-16 pb-8">
//       <div className="container mx-auto px-4">
//         <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
//           {/* Company Info */}
//           <div className="lg:col-span-2">
//             <div className="flex items-center space-x-3 mb-6">
//               <div className="bg-amber-500 p-2 rounded-lg">
//                 <MapPin className="w-6 h-6 text-white" />
//               </div>
//               <h2 className="text-2xl font-bold">TrekQuest</h2>
//             </div>
//             <p className="text-emerald-100 mb-6 max-w-md">
//               Leading adventure trekking company since 2010. We specialize in creating 
//               unforgettable mountain experiences with safety, sustainability, and 
//               authentic cultural immersion.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="bg-emerald-800 hover:bg-emerald-700 p-3 rounded-full transition-colors duration-300">
//                 <Facebook className="w-5 h-5" />
//               </a>
//               <a href="#" className="bg-emerald-800 hover:bg-emerald-700 p-3 rounded-full transition-colors duration-300">
//                 <Instagram className="w-5 h-5" />
//               </a>
//               <a href="#" className="bg-emerald-800 hover:bg-emerald-700 p-3 rounded-full transition-colors duration-300">
//                 <Twitter className="w-5 h-5" />
//               </a>
//               <a href="#" className="bg-emerald-800 hover:bg-emerald-700 p-3 rounded-full transition-colors duration-300">
//                 <Youtube className="w-5 h-5" />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-bold mb-6">Quick Links</h3>
//             <ul className="space-y-3">
//               <li><a href="#" className="text-emerald-100 hover:text-amber-300 transition-colors duration-300">Home</a></li>
//               <li><a href="#" className="text-emerald-100 hover:text-amber-300 transition-colors duration-300">All Treks</a></li>
//               <li><a href="#" className="text-emerald-100 hover:text-amber-300 transition-colors duration-300">Destinations</a></li>
//               <li><a href="#" className="text-emerald-100 hover:text-amber-300 transition-colors duration-300">About Us</a></li>
//               <li><a href="#" className="text-emerald-100 hover:text-amber-300 transition-colors duration-300">Blog</a></li>
//             </ul>
//           </div>

//           {/* Resources */}
//           <div>
//             <h3 className="text-lg font-bold mb-6">Resources</h3>
//             <ul className="space-y-3">
//               <li><a href="#" className="text-emerald-100 hover:text-amber-300 transition-colors duration-300">Trekking Guides</a></li>
//               <li><a href="#" className="text-emerald-100 hover:text-amber-300 transition-colors duration-300">Gear Checklist</a></li>
//               <li><a href="#" className="text-emerald-100 hover:text-amber-300 transition-colors duration-300">Safety Protocols</a></li>
//               <li><a href="#" className="text-emerald-100 hover:text-amber-300 transition-colors duration-300">FAQs</a></li>
//               <li><a href="#" className="text-emerald-100 hover:text-amber-300 transition-colors duration-300">Sustainability</a></li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="text-lg font-bold mb-6">Contact Us</h3>
//             <ul className="space-y-4">
//               <li className="flex items-center space-x-3">
//                 <Phone className="w-5 h-5 text-amber-300" />
//                 <span className="text-emerald-100">+1 (234) 567-8900</span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <Mail className="w-5 h-5 text-amber-300" />
//                 <span className="text-emerald-100">contact@trekquest.com</span>
//               </li>
//               <li className="flex items-start space-x-3">
//                 <MapPin className="w-5 h-5 text-amber-300 mt-1" />
//                 <span className="text-emerald-100">
//                   123 Mountain View Ave<br />
//                   Boulder, CO 80301<br />
//                   United States
//                 </span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Newsletter */}
//         {/* <div className="bg-emerald-800/50 rounded-2xl p-8 mb-12">
//           <div className="max-w-2xl mx-auto text-center">
//             <h3 className="text-2xl font-bold mb-4">Stay Updated with Adventure</h3>
//             <p className="text-emerald-100 mb-6">
//               Subscribe to get exclusive trekking tips, early access to new routes, and special offers
//             </p>
//             <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
//               <input
//                 type="email"
//                 placeholder="Your email address"
//                 className="flex-grow px-6 py-3 rounded-full bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
//               />
//               <button
//                 type="submit"
//                 className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div> */}

//         {/* Bottom Bar */}
//         <div className="pt-8 border-t border-emerald-800">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <p className="text-emerald-100 mb-4 md:mb-0">
//               © 2024 TrekQuest. All rights reserved.
//             </p>
//             <div className="flex flex-wrap gap-6 text-sm">
//               <a href="#" className="text-emerald-100 hover:text-amber-300 transition-colors duration-300">
//                 Privacy Policy
//               </a>
//               <a href="#" className="text-emerald-100 hover:text-amber-300 transition-colors duration-300">
//                 Terms of Service
//               </a>
//               <a href="#" className="text-emerald-100 hover:text-amber-300 transition-colors duration-300">
//                 Cookie Policy
//               </a>
//               <a href="#" className="text-emerald-100 hover:text-amber-300 transition-colors duration-300">
//                 Sitemap
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

const Footer = () => {
  return (
    <footer
      className="relative text-white pt-20 pb-8 bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/three-people-hiking-forest-with-backpacks-their-backs_853645-17976.jpg?w=2000')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/75 via-emerald-900/70 to-emerald-800/60"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Top Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-amber-500 p-2.5 rounded-xl shadow-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold tracking-wide">TrekQuest</h2>
            </div>

            <p className="text-emerald-100/90 mb-6 max-w-md leading-relaxed">
              Leading adventure trekking company since 2010. We create unforgettable
              mountain experiences with safety, sustainability, and authentic exploration.
            </p>

            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="bg-white/10 hover:bg-amber-500 p-3 rounded-full backdrop-blur transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Home", "All Treks", "Destinations", "About Us", "Blog"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-emerald-100/80 hover:text-amber-300 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wide">
              Resources
            </h3>
            <ul className="space-y-3">
              {[
                "Trekking Guides",
                "Gear Checklist",
                "Safety Protocols",
                "FAQs",
                "Sustainability",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-emerald-100/80 hover:text-amber-300 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wide">
              Contact
            </h3>
            <ul className="space-y-4 text-emerald-100/80">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-300" />
                +1 (234) 567-8900
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-300" />
                contact@trekquest.com
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-300 mt-1" />
                <span>
                  123 Mountain View Ave <br />
                  Boulder, CO 80301 <br />
                  United States
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        {/* <div className="mb-16">
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-10 text-center shadow-xl border border-white/10">
            <h3 className="text-2xl font-bold mb-4">
              Stay Updated with Adventure
            </h3>
            <p className="text-emerald-100/80 mb-8">
              Exclusive trekking tips, early access to new routes, and special offers.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-6 py-3 rounded-full bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-emerald-100/70 text-sm">
              © 2024 TrekQuest. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-6 text-sm">
              {["Privacy Policy", "Terms", "Cookies", "Sitemap"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-emerald-100/70 hover:text-amber-300 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
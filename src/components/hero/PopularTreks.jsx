// import {
//   Calendar,
//   ChevronRight,
//   Compass,
//   Heart,
//   MapPin,
//   Search,
//   ShoppingCart,
//   Sparkles,
//   Star,
//   Users,
//   X
// } from "lucide-react";
// import { useEffect, useState } from "react";

// const PopularTreks = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedDifficulty, setSelectedDifficulty] = useState("all");
//   const [selectedDuration, setSelectedDuration] = useState("all");
//   const [selectedPrice, setSelectedPrice] = useState("all");
//   const [showFilters, setShowFilters] = useState(false);
//   const [filteredTreks, setFilteredTreks] = useState([]);

//   const allTreks = [
//     {
//       id: 1,
//       title: "Everest Base Camp",
//       location: "Nepal Himalayas",
//       difficulty: "Challenging",
//       duration: "14 Days",
//       groupSize: "4-12 People",
//       price: 1899,
//       rating: 4.9,
//       reviews: 342,
//       image:
//         "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070",
//       featured: true,
//       season: "Spring/Autumn",
//       altitude: "5,364m",
//       tags: ["Himalayas", "Classic", "High Altitude"],
//     },
//     {
//       id: 2,
//       title: "Inca Trail to Machu Picchu",
//       location: "Peruvian Andes",
//       difficulty: "Moderate",
//       duration: "7 Days",
//       groupSize: "6-16 People",
//       price: 1299,
//       rating: 4.8,
//       reviews: 215,
//       image:
//         "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070",
//       season: "May-Sep",
//       altitude: "4,200m",
//       tags: ["Archaeology", "Cultural", "UNESCO"],
//     },
//     {
//       id: 3,
//       title: "Kilimanjaro Summit",
//       location: "Tanzania",
//       difficulty: "Difficult",
//       duration: "9 Days",
//       groupSize: "4-10 People",
//       price: 2499,
//       rating: 4.7,
//       reviews: 189,
//       image:
//         "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070",
//       season: "Jun-Oct",
//       altitude: "5,895m",
//       tags: ["Africa", "Volcano", "Seven Summits"],
//     },
//     {
//       id: 4,
//       title: "Annapurna Circuit",
//       location: "Nepal",
//       difficulty: "Challenging",
//       duration: "18 Days",
//       groupSize: "4-12 People",
//       price: 1599,
//       rating: 4.9,
//       reviews: 278,
//       image:
//         "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070",
//       featured: true,
//       season: "Mar-May, Sep-Nov",
//       altitude: "5,416m",
//       tags: ["Himalayas", "Classic", "Cultural"],
//     },
//     {
//       id: 5,
//       title: "Torres del Paine Circuit",
//       location: "Patagonia, Chile",
//       difficulty: "Difficult",
//       duration: "10 Days",
//       groupSize: "4-8 People",
//       price: 2199,
//       rating: 4.8,
//       reviews: 154,
//       image:
//         "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070",
//       season: "Nov-Mar",
//       altitude: "1,000m",
//       tags: ["Patagonia", "Glaciers", "Wilderness"],
//     },
//     {
//       id: 6,
//       title: "Tour du Mont Blanc",
//       location: "Swiss Alps",
//       difficulty: "Moderate",
//       duration: "12 Days",
//       groupSize: "6-14 People",
//       price: 1899,
//       rating: 4.9,
//       reviews: 198,
//       image:
//         "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070",
//       season: "Jun-Sep",
//       altitude: "2,665m",
//       tags: ["Alps", "Europe", "Scenic"],
//     },
//   ];

//   const difficultyOptions = [
//     {
//       value: "all",
//       label: "All Difficulties",
//       color: "bg-gray-100 text-gray-800",
//     },
//     {
//       value: "easy",
//       label: "Easy",
//       color: "bg-emerald-100 text-emerald-800",
//       count: 3,
//     },
//     {
//       value: "moderate",
//       label: "Moderate",
//       color: "bg-amber-100 text-amber-800",
//       count: 5,
//     },
//     {
//       value: "challenging",
//       label: "Challenging",
//       color: "bg-orange-100 text-orange-800",
//       count: 7,
//     },
//     {
//       value: "difficult",
//       label: "Difficult",
//       color: "bg-red-100 text-red-800",
//       count: 4,
//     },
//   ];

//   const durationOptions = [
//     { value: "all", label: "All Durations" },
//     { value: "short", label: "1-3 Days", count: 5 },
//     { value: "medium", label: "4-7 Days", count: 8 },
//     { value: "long", label: "8-14 Days", count: 10 },
//     { value: "extended", label: "15+ Days", count: 3 },
//   ];

//   const priceRanges = [
//     { value: "all", label: "All Prices" },
//     { value: "budget", label: "Under $500", min: 0, max: 500 },
//     { value: "standard", label: "$500 - $1500", min: 500, max: 1500 },
//     { value: "premium", label: "$1500 - $2500", min: 1500, max: 2500 },
//     { value: "luxury", label: "Above $2500", min: 2500, max: 10000 },
//   ];

//   useEffect(() => {
//     let results = allTreks;

//     if (searchQuery) {
//       results = results.filter(
//         (trek) =>
//           trek.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           trek.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           trek.tags.some((tag) =>
//             tag.toLowerCase().includes(searchQuery.toLowerCase())
//           )
//       );
//     }

//     if (selectedDifficulty !== "all") {
//       results = results.filter((trek) =>
//         trek.difficulty.toLowerCase().includes(selectedDifficulty)
//       );
//     }

//     if (selectedDuration !== "all") {
//       const getDays = (duration) => parseInt(duration.split(" ")[0]);
//       switch (selectedDuration) {
//         case "short":
//           results = results.filter((trek) => getDays(trek.duration) <= 3);
//           break;
//         case "medium":
//           results = results.filter(
//             (trek) => getDays(trek.duration) >= 4 && getDays(trek.duration) <= 7
//           );
//           break;
//         case "long":
//           results = results.filter(
//             (trek) =>
//               getDays(trek.duration) >= 8 && getDays(trek.duration) <= 14
//           );
//           break;
//         case "extended":
//           results = results.filter((trek) => getDays(trek.duration) >= 15);
//           break;
//       }
//     }

//     if (selectedPrice !== "all") {
//       const range = priceRanges.find((r) => r.value === selectedPrice);
//       if (range) {
//         results = results.filter(
//           (trek) => trek.price >= range.min && trek.price <= range.max
//         );
//       }
//     }

//     setFilteredTreks(results);
//   }, [searchQuery, selectedDifficulty, selectedDuration, selectedPrice]);

//   const clearFilters = () => {
//     setSearchQuery("");
//     setSelectedDifficulty("all");
//     setSelectedDuration("all");
//     setSelectedPrice("all");
//   };

//   const getDifficultyColor = (difficulty) => {
//     switch (difficulty.toLowerCase()) {
//       case "easy":
//         return "bg-emerald-100 text-emerald-800 border border-emerald-200";
//       case "moderate":
//         return "bg-amber-100 text-amber-800 border border-amber-200";
//       case "challenging":
//         return "bg-orange-100 text-orange-800 border border-orange-200";
//       case "difficult":
//         return "bg-red-100 text-red-800 border border-red-200";
//       default:
//         return "bg-gray-100 text-gray-800 border border-gray-200";
//     }
//   };

//   return (
//     <section
//       id="treks"
//       className="py-20 bg-gradient-to-b from-amber-50 via-gray-200 to-amber-50"
//     >
//       <div className="container mx-auto px-4">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-full mb-6 shadow-md">
//             <Sparkles className="w-5 h-5" />
//             <span className="font-semibold tracking-wide">
//               EXPLORE ADVENTURES
//             </span>
//           </div>

//           <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
//             Discover World-Class
//             <span className="text-emerald-800"> Trekking Experiences</span>
//           </h1>

//           <p className="text-gray-900 max-w-2xl mx-auto text-lg mb-12 leading-relaxed">
//             Handpicked treks across the globe's most spectacular landscapes.
//             Find your perfect adventure with our curated collection.
//           </p>
//         </div>

//         {/* Search and Filter Section */}
//         <div className="mb-12 mx-30">
//           <div className="p-2  rounded-b-lg">
//             <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 items-center">
//               {/* Destination / Event */}
//               <div className="lg:col-span-4 relative">
//                 <label className="block text-md font-semibold text-black mb-1 px-3">
//                   Destination / Event
//                 </label>
//                 <div className="relative">
//                   <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-black" />
//                   <input
//                     type="text"
//                     placeholder="Harishchandragad, Rafting"
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="w-full pl-10 pr-4 py-3 text-black rounded-xl border-2 border-emerald-900 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition"
//                   />
//                 </div>
//               </div>

//               {/* Date */}
//               <div className="lg:col-span-3 text-black">
//                 <label className="block text-md font-semibold text-black mb-1 px-3">
//                   Date
//                 </label>
//                 <input
//                   type="date"
//                   className="w-full px-4 py-3 text-black rounded-xl border-2 border-emerald-900 focus:border-amber-500 focus:ring-2 focus:ring-emerald-100 outline-none transition"
//                 />
//               </div>

//               {/* Travellers */}
//               <div className="lg:col-span-3">
//                 <label className="block text-md font-semibold text-black mb-1 px-3">
//                   Travellers
//                 </label>
//                 <input
//                   type="number"
//                   min={1}
//                   defaultValue={1}
//                   className="w-full px-4 py-3 text-black rounded-xl border-2 border-emerald-900 focus:border-amber-500 focus:ring-2 focus:ring-emerald-100 outline-none transition"
//                 />
//               </div>

//               {/* Search Button */}
//               <div className="lg:col-span-2 flex items-end mt-5">
//                 <button className="w-full bg-amber-500 hover:bg-amber-700 text-white py-3 rounded-xl text-lg font-bold transition-all duration-200 shadow-md">
//                   Search
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Optional: Clear Filters */}
//           {(searchQuery ||
//             selectedDifficulty !== "all" ||
//             selectedDuration !== "all" ||
//             selectedPrice !== "all") && (
//             <div className="flex gap-3 mt-4">
//               <button
//                 onClick={clearFilters}
//                 className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition"
//               >
//                 <X className="w-4 h-4" />
//                 Clear All
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Results Section */}
//         <div className="mb-12 mx-20">
//           {/* Treks Grid */}
//           {filteredTreks.length === 0 ? (
//             <div className="text-center py-16 bg-gradient-to-br from-white to-emerald-50 rounded-2xl border border-gray-200">
//               <Compass className="w-16 h-16 text-emerald-300 mx-auto mb-6" />
//               <h3 className="text-2xl font-bold text-gray-900 mb-3">
//                 No Treks Found
//               </h3>
//               <p className="text-gray-600 mb-8 max-w-md mx-auto">
//                 Try adjusting your search criteria or filters to discover
//                 amazing adventures
//               </p>
//               <button
//                 onClick={clearFilters}
//                 className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
//               >
//                 Show All Treks
//                 <ChevronRight className="w-4 h-4" />
//               </button>
//             </div>
//           ) : (
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {filteredTreks.slice(0, 6).map((trek) => (
//                 <div
//                   key={trek.id}
//                   className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg border-3 border-emerald-900 transition-all duration-300"
//                 >
//                   {/* Image Section */}
//                   <div className="relative h-68 overflow-hidden">
//                     <img
//                       src={trek.image}
//                       alt={trek.title}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                     />

//                     {/* Featured Badge */}
//                     {trek.featured && (
//                       <div className="absolute top-3 left-3">
//                         <span className="px-2 py-1 bg-emerald-600 text-white text-xs font-semibold rounded">
//                           FEATURED
//                         </span>
//                       </div>
//                     )}

//                     {/* Difficulty Badge */}
//                     <div className="absolute top-3 right-3">
//                       <span
//                         className={`px-2 py-1 text-xs font-semibold rounded ${getDifficultyColor(
//                           trek.difficulty
//                         )}`}
//                       >
//                         {trek.difficulty}
//                       </span>
//                     </div>

//                     {/* Rating */}
//                     <div className="absolute bottom-3 left-3 flex items-center bg-white/90 backdrop-blur-sm px-2 py-1 rounded">
//                       <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
//                       <span className="ml-1 text-sm font-semibold text-gray-900">
//                         {trek.rating}
//                       </span>
//                       <span className="ml-1 text-xs text-gray-600">
//                         ({trek.reviews})
//                       </span>
//                     </div>

//                     {/* Action Buttons */}
//                     <div className="absolute bottom-3 right-3 flex gap-2">
//                       <button className="p-2 bg-white/90 backdrop-blur-sm rounded hover:bg-white transition-colors">
//                         <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
//                       </button>
//                       <button className="p-2 bg-white/90 backdrop-blur-sm rounded hover:bg-white transition-colors">
//                         <ShoppingCart className="w-4 h-4 text-gray-600 hover:text-emerald-600" />
//                       </button>
//                     </div>
//                   </div>

//                   {/* Content Section */}
//                   <div className="p-5 bg-emerald-50">
//                     {/* Title and Location */}
//                     <div className="mb-4">
//                       <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">
//                         {trek.title}
//                       </h3>
//                       <div className="flex items-center text-gray-600 text-sm">
//                         <MapPin className="w-4 h-4 mr-1" />
//                         <span>{trek.location}</span>
//                       </div>
//                     </div>

//                     {/* Details */}
//                     <div className="grid grid-cols-2 gap-4 mb-">
//                       <div className="flex items-center">
//                         <Calendar className="w-4 h-4 text-emerald-600 mr-2" />
//                         <div>
//                           <div className="text-xs text-gray-500">Duration</div>
//                           <div className="text-sm font-medium text-gray-900">
//                             {trek.duration}
//                           </div>
//                         </div>
//                       </div>
//                       <div className="flex items-center">
//                         <Users className="w-4 h-4 text-emerald-600 mr-2" />
//                         <div>
//                           <div className="text-xs text-gray-500">
//                             Group Size
//                           </div>
//                           <div className="text-sm font-medium text-gray-900">
//                             {trek.groupSize}
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Price and CTA */}
//                     <div className="flex items-center justify-between pt-2 border-t border-gray-100">
//                       <div>
//                         <div className="text-sm text-gray-500">
//                           Starting from
//                         </div>
//                         <div className="text-xl font-bold text-gray-900">
//                           ${trek.price.toLocaleString()}
//                         </div>
//                       </div>
//                       <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:bg-amber-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-sm">
//                         View Details
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* View More Section */}
//         <div className="text-center">
//           <button className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold text-lg group">
//             View All {allTreks.length}+ Treks
//             <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PopularTreks;

import {
  Award,
  Calendar,
  ChevronRight,
  Compass,
  Heart,
  Map,
  MapPin,
  Mountain,
  Search,
  Sparkles,
  Sunrise,
  Target,
  TrendingUp,
  Users
} from "lucide-react";
import { useEffect, useState } from "react";
import { HiKey } from "react-icons/hi";
import WishlistCard from "../wishlist/WishlistCard";

const PopularTreks = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [selectedDuration, setSelectedDuration] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [filteredTreks, setFilteredTreks] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  // const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  const placeholders = [
    "Search treks like Kedarkantha, Everest...",
    "Explore Himalayan adventures...",
    "Find beginner to extreme treks...",
    "Search by location, season, altitude...",
  ];

  const ITEM_HEIGHT = 56;

  const allTreks = [
    {
      id: 1,
      title: "Everest Base Camp Expedition",
      location: "Nepal Himalayas",
      difficulty: "Extreme",
      duration: "14 Days",
      groupSize: "4-12 Climbers",
      price: 2899,
      rating: 4.9,
      reviews: 342,
      image:
        "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      featured: true,
      season: "Spring/Autumn",
      altitude: "5,364m",
      tags: ["Himalayas", "Epic", "Bucket List"],
      highlight: "Conquer the world's highest base camp",
      bestFor: "Experienced trekkers seeking ultimate challenge",
    },
    {
      id: 2,
      title: "Inca Trail Adventure",
      location: "Peruvian Andes",
      difficulty: "Challenging",
      duration: "7 Days",
      groupSize: "6-16 Explorers",
      price: 1699,
      rating: 4.8,
      reviews: 215,
      image:
        "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      featured: true,
      season: "May-September",
      altitude: "4,200m",
      tags: ["Ancient", "Cultural", "Mystical"],
      highlight: "Discover lost civilizations",
      bestFor: "History buffs and adventure seekers",
    },
    {
      id: 3,
      title: "Kilimanjaro Summit Challenge",
      location: "Tanzania",
      difficulty: "Extreme",
      duration: "9 Days",
      groupSize: "4-10 Climbers",
      price: 3499,
      rating: 4.7,
      reviews: 189,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      featured: true,
      season: "June-October",
      altitude: "5,895m",
      tags: ["Africa", "Volcano", "Seven Summits"],
      highlight: "Reach the Roof of Africa",
      bestFor: "Ambitious climbers and wildlife enthusiasts",
    },
    {
      id: 4,
      title: "Annapurna Circuit Trek",
      location: "Nepal",
      difficulty: "Challenging",
      duration: "18 Days",
      groupSize: "4-12 Adventurers",
      price: 2199,
      rating: 4.9,
      reviews: 278,
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      featured: false,
      season: "Mar-May, Sep-Nov",
      altitude: "5,416m",
      tags: ["Classic", "Diverse", "Cultural"],
      highlight: "World's most diverse trekking route",
      bestFor: "Those seeking varied landscapes and cultures",
    },
    {
      id: 5,
      title: "Patagonia Wilderness Trek",
      location: "Chile & Argentina",
      difficulty: "Challenging",
      duration: "10 Days",
      groupSize: "4-8 Explorers",
      price: 2899,
      rating: 4.8,
      reviews: 154,
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      featured: true,
      season: "November-March",
      altitude: "1,000m",
      tags: ["Glaciers", "Wild", "Remote"],
      highlight: "Witness towering glaciers and rugged peaks",
      bestFor: "Wilderness lovers and photography enthusiasts",
    },
    {
      id: 6,
      title: "Mont Blanc Alpine Crossing",
      location: "European Alps",
      difficulty: "Difficult",
      duration: "12 Days",
      groupSize: "6-14 Mountaineers",
      price: 2399,
      rating: 4.9,
      reviews: 198,
      image:
        "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      featured: false,
      season: "June-September",
      altitude: "2,665m",
      tags: ["Alpine", "Scenic", "European"],
      highlight: "Cross three countries on foot",
      bestFor: "European mountain lovers and cultural explorers",
    },
    // {
    //   id: 7,
    //   title: "Bhutan Dragon Trail",
    //   location: "Bhutan Himalayas",
    //   difficulty: "Moderate",
    //   duration: "8 Days",
    //   groupSize: "4-10 Travelers",
    //   price: 1899,
    //   rating: 4.6,
    //   reviews: 132,
    //   image:
    //     "https://images.unsplash.com/photo-1517292987711-036cd7fc9c02?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    //   featured: false,
    //   season: "March-May, Sept-Nov",
    //   altitude: "3,120m",
    //   tags: ["Spiritual", "Cultural", "Hidden"],
    //   highlight: "Explore the last Shangri-La",
    //   bestFor: "Spiritual seekers and cultural enthusiasts"
    // },
    // {
    //   id: 8,
    //   title: "Alaska Wilderness Expedition",
    //   location: "Alaska, USA",
    //   difficulty: "Extreme",
    //   duration: "14 Days",
    //   groupSize: "4-8 Explorers",
    //   price: 3899,
    //   rating: 4.9,
    //   reviews: 89,
    //   image:
    //     "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    //   featured: true,
    //   season: "June-August",
    //   altitude: "6,190m",
    //   tags: ["Arctic", "Wild", "Remote"],
    //   highlight: "True wilderness survival experience",
    //   bestFor: "Extreme adventurers and nature purists"
    // }
  ];

  const difficultyOptions = [
    {
      value: "all",
      label: "All Adventures",
      icon: <Compass className="w-4 h-4" />,
      color: "bg-gradient-to-r from-gray-800 to-gray-600",
    },
    {
      value: "moderate",
      label: "Moderate",
      icon: <TrendingUp className="w-4 h-4" />,
      color: "bg-gradient-to-r from-emerald-600 to-emerald-800",
      description: "Good fitness required",
    },
    {
      value: "challenging",
      label: "Challenging",
      icon: <Mountain className="w-4 h-4" />,
      color: "bg-gradient-to-r from-orange-600 to-amber-700",
      description: "For experienced trekkers",
    },
    {
      value: "difficult",
      label: "Difficult",
      icon: <Award className="w-4 h-4" />,
      color: "bg-gradient-to-r from-red-600 to-orange-700",
      description: "High altitude experience",
    },
    {
      value: "extreme",
      label: "Extreme",
      icon: <Target className="w-4 h-4" />,
      color: "bg-gradient-to-r from-purple-700 to-pink-600",
      description: "Mountaineering skills needed",
    },
  ];

  const quickFilters = [
    { id: "epic", label: "Epic Journeys", icon: "🏔️" },
    { id: "wild", label: "Wilderness", icon: "🌲" },
    { id: "cultural", label: "Cultural", icon: "🏛️" },
    { id: "photography", label: "Photography", icon: "📸" },
    { id: "solo", label: "Solo Friendly", icon: "👤" },
    { id: "family", label: "Family Adventure", icon: "👨‍👩‍👧‍👦" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (activeIndex === placeholders.length) {
      // Disable animation → instant jump
      setTimeout(() => {
        setAnimate(false);
        setActiveIndex(0);
      }, 700); // same as transition duration

      // Re-enable animation after DOM paint
      setTimeout(() => {
        setAnimate(true);
      }, 750);
    }
  }, [activeIndex]);

  useEffect(() => {
    let results = allTreks;

    if (searchQuery) {
      results = results.filter(
        (trek) =>
          trek.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          trek.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          trek.tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
    }

    if (selectedDifficulty !== "all") {
      results = results.filter((trek) =>
        trek.difficulty.toLowerCase().includes(selectedDifficulty)
      );
    }

    setFilteredTreks(results);
  }, [searchQuery, selectedDifficulty]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedDifficulty("all");
    setActiveFilter("all");
  };

  const getDifficultyColor = (difficulty) => {
    const colors = {
      moderate: "from-emerald-500 to-emerald-700",
      challenging: "from-orange-500 to-amber-600",
      difficult: "from-red-500 to-orange-600",
      extreme: "from-purple-600 to-pink-500",
    };
    return colors[difficulty.toLowerCase()] || "from-gray-500 to-gray-700";
  };

  const getAltitudeColor = (altitude) => {
    const alt = parseInt(altitude);
    if (alt > 5000) return "bg-gradient-to-r from-red-500 to-red-700";
    if (alt > 3000) return "bg-gradient-to-r from-orange-500 to-amber-600";
    if (alt > 2000) return "bg-gradient-to-r from-emerald-500 to-emerald-700";
    return "bg-gradient-to-r from-blue-500 to-blue-700";
  };

  //   return (
  //     <section className="relative py-6 overflow-hidden">
  //       {/* Background Elements */}
  //       <div className="absolute inset-0bg-gradient-to-br from-emerald-50 via-white to-amber-50 ">
  //         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] opacity-10 bg-cover bg-center"></div>
  //         <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900"></div>
  //       </div>

  //     {/* <section className="relative py-6 overflow-hidden">
  //   {/* Top Elementor-style Wave */}
  //   {/* <div
  //     style={{
  //       position: "absolute",
  //       top: 0,
  //       left: 0,
  //       width: "100%",
  //       overflow: "hidden",
  //       lineHeight: 0,
  //       pointerEvents: "none",
  //       zIndex: 20,
  //     }}
  //   >
  //     <svg
  //       viewBox="0 0 1200 120"
  //       preserveAspectRatio="none"
  //       style={{ display: "block", width: "calc(100% + 1.3px)", height: 120 }}
  //     >
  //       <path
  //         d="M0,0V46.29c47.29,22,103.78,29,158,17.39C230,49.8,284.07,17.38,339,6.44c54.48-10.79,104.88,5.47,158,22.78C585,55.11,643.33,72,700,69.28c51.7-2.43,97.22-21.52,148-39.67C909.67,6.11,965.29-9.88,1024,7.63c41.23,12.38,76.26,35.77,116,47.44V0Z"
  //         style={{
  //           fill: "#fff",
  //           transform: "rotateY(0deg)",
  //           transformOrigin: "center",
  //           filter: "drop-shadow(0 0 25px rgba(255,180,60,0.5))",
  //         }}
  //       />
  //     </svg>
  //   </div> */}

  //   {/* Background & Content */}
  //   {/* <div className="absolute inset-0 bg-gradient-to-b from-gray-500 via-gray-800 to-gray-900">
  //     <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] opacity-10 bg-cover bg-center"></div>
  //     <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900"></div>
  //   </div> */}

  //       <div className="relative container mx-auto px-4">
  //         {/* Header Section */}
  //         <div className="text-center mb-6">
  //           <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 via-amber-500 to-orange-500 text-white px-8 py-4 rounded-full mb-8 shadow-lg shadow-orange-500/30 animate-pulse">
  //             <Sparkles className="w-6 h-6" />
  //             <span className="font-bold tracking-wider text-lg uppercase">
  //               UNCHARTED ADVENTURES AWAIT
  //             </span>
  //             <Mountain className="w-6 h-6" />
  //           </div>

  //           <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
  //             Conquer{" "}
  //             <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
  //               EPIC PEAKS
  //             </span>
  //             <br />
  //             {/* <span className="text-3xl md:text-4xl text-amber-200">Discover Untamed Wilderness</span> */}
  //           </h1>

  //           <p className="text-gray-300 max-w-2xl mx-auto text-xl mb-12 leading-relaxed">
  //             From Himalayan giants to Patagonian glaciers. Your next
  //             life-changing adventure starts here.
  //           </p>
  //         </div>

  //         {/* Hero Search Section */}
  //     <div className="mb-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8">
  //   <h2 className="text-2xl font-bold text-white text-center mb-8">
  //     Discover Your Adventure
  //   </h2>

  //   {/* Simple Search Bar */}
  //   <div className="mb-8 flex gap-4">
  //   {/* Search Input */}
  //   <div className="relative flex-1">
  //     <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-amber-400" />
  //     <input
  //       type="text"
  //       placeholder="Search adventures by name, location, or keyword..."
  //       value={searchQuery}
  //       onChange={(e) => setSearchQuery(e.target.value)}
  //       className="w-full pl-14 pr-6 py-4 bg-gray-900 text-white placeholder-gray-400 rounded-xl border border-gray-600 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
  //     />
  //   </div>

  //   {/* Search Button */}
  //   <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-colors whitespace-nowrap">
  //     Find Adventures
  //   </button>
  // </div>

  //   {/* Simple Filter Tabs */}
  //   <div className="space-y-6">
  //     <div>
  //       <h3 className="text-lg font-semibold text-white mb-4">Difficulty Level</h3>
  //       <div className="flex flex-wrap gap-3">
  //         {["All", "Easy", "Moderate", "Challenging", "Extreme"].map((level) => (
  //           <button
  //             key={level}
  //             onClick={() => setSelectedDifficulty(level.toLowerCase() === "all" ? "all" : level.toLowerCase())}
  //             className={`px-5 py-3 rounded-lg font-medium transition-all ${
  //               selectedDifficulty === (level.toLowerCase() === "all" ? "all" : level.toLowerCase())
  //                 ? "bg-amber-500 text-white"
  //                 : "bg-gray-800 text-gray-300 hover:bg-gray-700"
  //             }`}
  //           >
  //             {level}
  //           </button>
  //         ))}
  //       </div>
  //     </div>

  //     <div>
  //       <h3 className="text-lg font-semibold text-white mb-4">Trip Type</h3>
  //       <div className="flex flex-wrap gap-3">
  //         {quickFilters.map((filter) => (
  //           <button
  //             key={filter.id}
  //             onClick={() => setActiveFilter(activeFilter === filter.id ? null : filter.id)}
  //             className={`px-5 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
  //               activeFilter === filter.id
  //                 ? "bg-blue-500 text-white"
  //                 : "bg-gray-800 text-gray-300 hover:bg-gray-700"
  //             }`}
  //           >
  //             <span>{filter.icon}</span>
  //             <span>{filter.label}</span>
  //           </button>
  //         ))}
  //       </div>
  //     </div>
  //   </div>

  // </div>

  //         {/* Results Counter */}
  //         <div className="flex items-center justify-between mb-8 mx-10">
  //           <div className="text-white">
  //             <h2 className="text-3xl font-bold">
  //               <span className="text-amber-400">{filteredTreks.length}</span>{" "}
  //               Epic Adventures Found
  //             </h2>
  //             <p className="text-gray-400">Your journey begins here</p>
  //           </div>
  //           {(searchQuery || selectedDifficulty !== "all") && (
  //             <button
  //               onClick={clearFilters}
  //               className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-medium transition-all border border-gray-600"
  //             >
  //               <X className="w-4 h-4" />
  //               Clear Filters
  //             </button>
  //           )}
  //         </div>

  //         {/* Treks Grid */}
  //         {filteredTreks.length === 0 ? (
  //           <div className="text-center py-20 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-lg border border-gray-700/50">
  //             <Compass className="w-20 h-20 text-amber-400 mx-auto mb-6 opacity-50" />
  //             <h3 className="text-3xl font-bold text-white mb-4">
  //               No Adventures Found
  //             </h3>
  //             <p className="text-gray-400 mb-8 max-w-md mx-auto text-lg">
  //               The wilderness is vast! Try a different search or explore all our
  //               epic journeys.
  //             </p>
  //             <button
  //               onClick={clearFilters}
  //               className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 group"
  //             >
  //               EXPLORE ALL TREKS
  //               <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
  //             </button>
  //           </div>
  //         ) : (
  //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-10">
  //             {filteredTreks.map((trek) => (
  //               <div
  //                 key={trek.id}
  //                 className="group relative overflow-hidden rounded-lg transition-all duration-500 hover:scale-[1.02] bg-white shadow-xl hover:shadow-2xl"
  //               >
  //                 {/* Top: Full Clear Image */}
  //                 <div className="relative h-72 overflow-hidden">
  //                   <img
  //                     src={trek.image}
  //                     alt={trek.title}
  //                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
  //                   />

  //                   {/* Image Overlay with Badges */}
  //                   <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30">
  //                     <div className="absolute top-4 left-4 flex flex-col gap-2">
  //                       {trek.featured && (
  //                         <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-red-500 text-white text-xs font-bold rounded-full shadow-lg w-fit">
  //                           ⭐ FEATURED
  //                         </span>
  //                       )}
  //                       <span
  //                         className={`px-3 py-1 text-white text-xs font-bold rounded-full shadow-lg w-fit ${getDifficultyColor(
  //                           trek.difficulty
  //                         )}`}
  //                       >
  //                         {trek.difficulty.toUpperCase()}
  //                       </span>
  //                     </div>
  //                   </div>
  //                 </div>

  //                 {/* Bottom: Blurred Details Container */}
  //                 <div className="relative -mt-8 bg-black/50 backdrop-blur-xl rounded-lg p-6 shadow-2xl border border-gray-700/50">
  //                   {/* Title and Location */}
  //                   <div className="mb-4">
  //                     <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
  //                       {trek.title}
  //                     </h3>
  //                     <div className="flex items-center text-gray-300">
  //                       <MapPin className="w-5 h-5 mr-2 text-amber-400 flex-shrink-0" />
  //                       <span className="font-medium truncate">
  //                         {trek.location}
  //                       </span>
  //                     </div>
  //                   </div>

  //                   {/* Highlight */}

  //                   {/* Essential Info in Grid */}
  //                   <div className="grid grid-cols-2 gap-3 mb-6">
  //                     <div className="flex items-center gap-3 bg-gray-800/50 rounded-xl p-3">
  //                       <Calendar className="w-5 h-5 text-emerald-400" />
  //                       <div>
  //                         <div className="text-xs text-gray-400">Duration</div>
  //                         <div className="text-white font-semibold">
  //                           {trek.duration}
  //                         </div>
  //                       </div>
  //                     </div>

  //                     <div className="flex items-center gap-3 bg-gray-800/50 rounded-xl p-3">
  //                       <Users className="w-5 h-5 text-blue-400" />
  //                       <div>
  //                         <div className="text-xs text-gray-400">Group</div>
  //                         <div className="text-white font-semibold">
  //                           {trek.groupSize}
  //                         </div>
  //                       </div>
  //                     </div>

  //                     <div className="flex items-center gap-3 bg-gray-800/50 rounded-xl p-3">
  //                       <Sunrise className="w-5 h-5 text-orange-400" />
  //                       <div>
  //                         <div className="text-xs text-gray-400">Altitude</div>
  //                         <div
  //                           className={`text-white font-semibold text-sm px-2 py-1 rounded ${getAltitudeColor(
  //                             trek.altitude
  //                           )}`}
  //                         >
  //                           {trek.altitude}
  //                         </div>
  //                       </div>
  //                     </div>

  //                     <div className="flex items-center gap-3 bg-gray-800/50 rounded-xl p-3">
  //                       <div className="w-5 h-5 flex items-center justify-center text-yellow-400">
  //                         <span>📅</span>
  //                       </div>
  //                       <div>
  //                         <div className="text-xs text-gray-400">Season</div>
  //                         <div className="text-white font-semibold text-sm">
  //                           {trek.season}
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>

  //                   {/* Price and CTA Section */}
  //                   <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
  //                     <div>
  //                       <div className="text-xs text-gray-400 uppercase tracking-wider">
  //                         From
  //                       </div>
  //                       <div className="flex items-baseline">
  //                         <span className="text-3xl font-bold text-white">
  //                           ${trek.price.toLocaleString()}
  //                         </span>
  //                         <span className="text-gray-400 text-sm ml-2">
  //                           /person
  //                         </span>
  //                       </div>
  //                     </div>
  //                     <div className="flex items-center gap-3">
  //                       <button className="p-3 bg-gray-800/70 hover:bg-gray-700/70 rounded-xl transition-all duration-300 border border-gray-600">
  //                         <Heart className="w-5 h-5 text-gray-300 hover:text-red-500" />
  //                       </button>
  //                       <button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2">
  //                         Book Now
  //                         <ChevronRight className="w-4 h-4" />
  //                       </button>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             ))}
  //           </div>
  //         )}

  //         {/* Call to Action */}
  //         <div className="mt-16 text-center">
  //           <div className="inline-block p-4">
  //             <button className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl group">
  //               <Map className="w-6 h-6 group-hover:rotate-12 transition-transform" />
  //               EXPLORE ALL {allTreks.length}+ EXPEDITIONS
  //               <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
  //             </button>
  //           </div>
  //         </div>
  //       </div>

  //       {/* Animated Mountain Silhouette */}
  //   {/* <div
  //     style={{
  //       position: "absolute",
  //       bottom: 0,
  //       left: 0,
  //       width: "100%",
  //       overflow: "hidden",
  //       lineHeight: 0,
  //       pointerEvents: "none",
  //       transform: "rotate(180deg)", // flips vertically
  //       zIndex: 20,
  //     }}
  //   >
  //     <svg
  //       viewBox="0 0 1200 120"
  //       preserveAspectRatio="none"
  //       style={{ display: "block", width: "calc(100% + 1.3px)", height: 120 }}
  //     >
  //       <path
  //         d="M0,0V46.29c47.29,22,103.78,29,158,17.39C230,49.8,284.07,17.38,339,6.44c54.48-10.79,104.88,5.47,158,22.78C585,55.11,643.33,72,700,69.28c51.7-2.43,97.22-21.52,148-39.67C909.67,6.11,965.29-9.88,1024,7.63c41.23,12.38,76.26,35.77,116,47.44V0Z"
  //         style={{
  //           fill: "#fff",
  //           transform: "rotateY(0deg)",
  //           transformOrigin: "center",
  //           filter: "drop-shadow(0 0 25px rgba(255,180,60,0.5))",
  //         }}
  //       />
  //     </svg>
  //   </div> */}

  //       <style jsx>{`
  //         @keyframes mountainFloat {
  //           0%,
  //           100% {
  //             transform: translateY(0);
  //           }
  //           50% {
  //             transform: translateY(-10px);
  //           }
  //         }
  //       `}</style>

  //     </section>
  //   );
  return (
    <section className="relative min-h-screen py-6 overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-emerald-200/20 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-t from-amber-200/20 to-transparent rounded-full translate-x-48 translate-y-48"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Mountain className="w-12 h-12 text-emerald-300/40" />
      </div>
      <div className="absolute top-40 right-20 animate-float-delayed">
        <HiKey className="w-10 h-10 text-amber-300/40" />
      </div>

      {/* Background Texture */}
      {/* <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] opacity-5 bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white"></div>
    </div> */}

      <div className="relative container mx-auto px-4 z-10">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-amber-500 text-white px-6 py-3 rounded-full mb-6 shadow-lg">
            <Sparkles className="w-6 h-6" />
            <span className="font-bold tracking-wide text-md">
              UNCHARTED ADVENTURES AWAIT
            </span>
            <Mountain className="w-6 h-6" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Conquer{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
              EPIC PEAKS
            </span>
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From Himalayan giants to Patagonian glaciers. Your next
            life-changing adventure starts here.
          </p>
        </div>

        {/* Search + Filters */}
        <div className="mb-12 bg-trasparent backdrop-blur-lg  p-2 mx-20">
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1 h-14 overflow-hidden rounded-xl">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500 z-20" />

              {!searchQuery && (
                <div className="absolute left-12 top-0 h-14 overflow-hidden pointer-events-none z-10">
                  <div
                    className={`${
                      animate
                        ? "transition-transform duration-700 ease-in-out"
                        : ""
                    }`}
                    style={{
                      transform: `translateY(-${activeIndex * ITEM_HEIGHT}px)`,
                    }}
                  >
                    {[...placeholders, placeholders[0]].map((text, index) => (
                      <div
                        key={index}
                        className="h-14 flex items-center text-gray-400 text-base whitespace-nowrap"
                      >
                        {text}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="absolute inset-0 w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-300 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none bg-transparent z-30"
              />
            </div>

            <button className="bg-gradient-to-r from-emerald-500 to-amber-500 text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition">
              Find Adventures
            </button>
          </div>

          <div className="flex flex-wrap gap-3">
            {["All", "Easy", "Moderate", "Challenging", "Extreme"].map(
              (level) => (
                <button
                  key={level}
                  onClick={() =>
                    setSelectedDifficulty(
                      level.toLowerCase() === "all"
                        ? "all"
                        : level.toLowerCase()
                    )
                  }
                  className={`px-5 py-2 rounded-lg font-medium transition ${
                    selectedDifficulty ===
                    (level.toLowerCase() === "all"
                      ? "all"
                      : level.toLowerCase())
                      ? "bg-emerald-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {level}
                </button>
              )
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex justify-between items-center mb-8 mx-20">
          <h2 className="text-2xl font-bold text-gray-900">
            <span className="text-emerald-600">{filteredTreks.length}</span>{" "}
            Adventures Found
          </h2>
          {(searchQuery || selectedDifficulty !== "all") && (
            <button
              onClick={clearFilters}
              className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200"
            >
              Clear Filters
            </button>
          )}
        </div>

        {/* Treks Grid (MATCHES Wishlist Cards) */}
     {/* Treks Grid */}
{filteredTreks.length === 0 ? (
  <div className="text-center py-20 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-lg border border-gray-700/50">
    <Compass className="w-20 h-20 text-amber-400 mx-auto mb-6 opacity-50" />
    <h3 className="text-3xl font-bold text-white mb-4">
      No Adventures Found
    </h3>
    <p className="text-gray-400 mb-8 max-w-md mx-auto text-lg">
      The wilderness is vast! Try a different search or explore all our epic journeys.
    </p>
    <button
      onClick={clearFilters}
      className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 group"
    >
      EXPLORE ALL TREKS
      <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
    </button>
  </div>
) : (
 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-20">
  {filteredTreks.map((trek) => (
    <div
      key={trek.id}
      className="group relative overflow-hidden rounded-sm transition-all duration-500 hover:scale-[1.02]"
    >
      {/* ❤️ Heart Button – Top Right */}
      <button
        title="Add/Remove from wishlist"
        className="absolute top-4 right-4 z-50 p-2 rounded-full backdrop-blur-md
                   bg-black/40 border border-white/20
                   transition-all duration-300 hover:bg-red-500/20 hover:border-red-400"
      >
        <Heart className="w-6 h-6 text-red-500" />
      </button>

      {/* 🔴 Discount Ribbon – Top Left */}
      {trek.discount && (
        <div className="absolute top-0 left-0 z-40 w-32 h-32 overflow-visible pointer-events-none">
          <span
            className="absolute top-4 left-[-45px] w-[180px]
                       text-white font-bold uppercase text-xs text-center leading-[22px]
                       px-6 py-1 shadow-lg"
            style={{
              background: "linear-gradient(45deg, #dc2626 0%, #b91c1c 100%)",
              transform: "rotate(-45deg)",
              boxShadow: "0 3px 10px -5px rgba(0,0,0,1)",
            }}
          >
            FLAT {trek.discount}% OFF
          </span>
        </div>
      )}

      {/* 🖼 Background Image */}
      <div className="absolute inset-0">
        <img
          src={trek.image}
          alt={trek.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
      </div>

      {/* 📦 Card Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6 min-h-[500px]">
        {/* Title + Location */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
          {trek.title}
        </h3>
        <div className="flex items-center text-gray-300 mb-4">
          <MapPin className="w-5 h-5 mr-2 text-amber-400" />
          <span className="font-medium">{trek.location}</span>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 text-emerald-400 mr-2" />
              <span className="text-xs text-gray-300">DURATION</span>
            </div>
            <div className="text-white font-bold">{trek.duration}</div>
          </div>

          <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3">
            <div className="flex items-center">
              <Users className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-xs text-gray-300">GROUP</span>
            </div>
            <div className="text-white font-bold">{trek.groupSize}</div>
          </div>

          <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3">
            <div className="flex items-center">
              <Sunrise className="w-4 h-4 text-orange-400 mr-2" />
              <span className="text-xs text-gray-300">ALTITUDE</span>
            </div>
            <div className={`text-white font-bold text-sm px-2 py-1 rounded`}>
              {trek.altitude}
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3">
            <span className="text-yellow-400 mr-2">📅</span>
            <div>
              <div className="text-xs text-gray-300">SEASON</div>
              <div className="text-white font-bold text-sm">{trek.season}</div>
            </div>
          </div>
        </div>

        {/* 💰 Price & CTA */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-700/50">
          <div>
            <div className="text-sm text-gray-100">FROM</div>
            <div className="flex items-baseline">
              <span className="text-2xl font-bold text-white">
                ${trek.price.toLocaleString()}
              </span>
              {trek.originalPrice && (
                <span className="text-lg text-gray-400 line-through ml-2">
                  ${trek.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
          </div>

          <button className="bg-gradient-to-r from-amber-500 to-orange-500
                             hover:from-amber-600 hover:to-orange-600
                             text-white px-6 py-3 rounded-xl font-bold text-sm
                             transition-all duration-300 shadow-lg hover:shadow-xl">
            Book Now
          </button>
        </div>
      </div>

      {/* ✨ Hover Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 via-orange-500/5 to-transparent" />
      </div>
    </div>
  ))}
</div>

)}


        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-amber-500 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition">
            <Map className="w-6 h-6" />
            EXPLORE ALL {allTreks.length}+ EXPEDITIONS
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularTreks;

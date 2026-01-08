// import React, { useState } from "react";
// // import WishlistCard from "../components/WishlistCard";
// import { Heart, ChevronRight } from "lucide-react";
// import WishlistCard from "../components/wishlist/WishlistCard";

// // Dummy Wishlist Data
// const dummyWishlist = [
//   {
//     id: 1,
//     title: "Himalayan Expedition",
//     location: "Nepal",
//     price: 2500,
//     image: "https://images.unsplash.com/photo-1601758173925-5f993c4faed8?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: 2,
//     title: "Patagonia Trek",
//     location: "Chile",
//     price: 3200,
//     image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: 3,
//     title: "Rocky Mountain Adventure",
//     location: "Canada",
//     price: 2800,
//     image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
//   },
// ];

// const WishlistPage = () => {
//   const [wishlist, setWishlist] = useState(dummyWishlist);

//   const removeItem = (id) => {
//     setWishlist(wishlist.filter((item) => item.id !== id));
//   };

//   return (
//     <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12 px-6">
//       <h1 className="text-4xl font-bold text-center mb-12 animate-pulse text-emerald-400">
//         My Wishlist
//       </h1>

//       {wishlist.length === 0 ? (
//         <div className="text-center text-gray-400 py-20">
//           <Heart className="mx-auto mb-4 w-16 h-16 text-emerald-400 animate-bounce" />
//           <h2 className="text-2xl font-semibold mb-2">Your Wishlist is Empty</h2>
//           <p className="mb-6">Add your favorite treks to revisit them later.</p>
//           <a
//             href="/treks"
//             className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
//           >
//             Explore Treks <ChevronRight className="w-5 h-5" />
//           </a>
//         </div>
//       ) : (
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {wishlist.map((trek) => (
//             <WishlistCard key={trek.id} trek={trek} onRemove={removeItem} />
//           ))}
//         </div>
//       )}
//     </main>
//   );
// };

// export default WishlistPage;

import React, { useState } from "react";
import {
  Heart,
  ChevronRight,
  MapPin,
  Calendar,
  Users,
  Mountain,
  Sparkles,
  Trash2,
  Share2,
  BookmarkPlus,
  Filter,
  ArrowUpDown,
  Plane,
  Star,
  Globe,
  TrendingUp,
} from "lucide-react";
import WishlistCard from "../components/wishlist/WishlistCard";

// Enhanced Dummy Wishlist Data
const dummyWishlist = [
  {
    id: 1,
    title: "Himalayan Everest Base Camp Expedition",
    location: "Nepal Himalayas",
    price: 2899,
    originalPrice: 3499,
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=80",
    difficulty: "Challenging",
    duration: "14 Days",
    groupSize: "4-12 People",
    rating: 4.9,
    reviews: 342,
    tags: ["Epic", "Bucket List", "Cultural"],
    featured: true,
    discount: 17,
    season: "Mar-May, Sep-Nov",
  },
  {
    id: 2,
    title: "Patagonia W Trek & Glacier Exploration",
    location: "Torres del Paine, Chile",
    price: 2299,
    originalPrice: 2799,
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    difficulty: "Moderate",
    duration: "8 Days",
    groupSize: "6-16 People",
    rating: 4.8,
    reviews: 215,
    tags: ["Glaciers", "Wilderness", "Photography"],
    featured: false,
    discount: 18,
    season: "Nov-Mar",
  },
  {
    id: 3,
    title: "Swiss Alps: Mont Blanc Circuit",
    location: "French Alps, Switzerland",
    price: 3199,
    originalPrice: 3699,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
    difficulty: "Difficult",
    duration: "12 Days",
    groupSize: "4-8 People",
    rating: 4.7,
    reviews: 189,
    tags: ["Alpine", "Luxury", "European"],
    featured: true,
    discount: 14,
    season: "Jun-Sep",
  },
  {
    id: 4,
    title: "Kilimanjaro Summit Adventure",
    location: "Tanzania, Africa",
    price: 3499,
    originalPrice: 3999,
    image:
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80",
    difficulty: "Extreme",
    duration: "9 Days",
    groupSize: "4-10 People",
    rating: 4.9,
    reviews: 278,
    tags: ["Seven Summits", "Volcano", "Wildlife"],
    featured: false,
    discount: 13,
    season: "Jun-Oct",
  },
  {
    id: 5,
    title: "Annapurna Circuit & Sanctuary",
    location: "Nepal",
    price: 1899,
    originalPrice: 2299,
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    difficulty: "Challenging",
    duration: "18 Days",
    groupSize: "4-12 People",
    rating: 4.8,
    reviews: 154,
    tags: ["Classic", "Cultural", "Diverse"],
    featured: true,
    discount: 17,
    season: "Mar-May, Sep-Nov",
  },
  {
    id: 6,
    title: "Iceland Volcanoes & Waterfalls Trek",
    location: "Iceland",
    price: 2599,
    originalPrice: 2999,
    image:
      "https://media.istockphoto.com/id/1629533738/photo/godafoss-waterfall-flowing-with-colorful-sunset-sky-and-male-tourist-standing-on-cliff-in.jpg?s=612x612&w=0&k=20&c=oKRdh9yZhabi7PLMAalqQa2GrV_DcwrViH38cxCGGo0=",
    difficulty: "Moderate",
    duration: "10 Days",
    groupSize: "8-14 People",
    rating: 4.6,
    reviews: 132,
    tags: ["Northern Lights", "Unique", "Geothermal"],
    featured: false,
    discount: 13,
    season: "Jun-Aug",
  },
];

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState(dummyWishlist);
  const [sortBy, setSortBy] = useState("added");
  const [filterBy, setFilterBy] = useState("all");

  const removeItem = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  const removeAll = () => {
    setWishlist([]);
  };

  const shareWishlist = () => {
    // Share functionality would go here
    alert("Share your wishlist with friends!");
  };

  const sortWishlist = (wishlist) => {
    switch (sortBy) {
      case "price-low":
        return [...wishlist].sort((a, b) => a.price - b.price);
      case "price-high":
        return [...wishlist].sort((a, b) => b.price - a.price);
      case "difficulty":
        const difficultyOrder = {
          Moderate: 1,
          Challenging: 2,
          Difficult: 3,
          Extreme: 4,
        };
        return [...wishlist].sort(
          (a, b) =>
            difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]
        );
      case "rating":
        return [...wishlist].sort((a, b) => b.rating - a.rating);
      default:
        return wishlist;
    }
  };

  const filterWishlist = (wishlist) => {
    switch (filterBy) {
      case "featured":
        return wishlist.filter((item) => item.featured);
      case "under-2500":
        return wishlist.filter((item) => item.price < 2500);
      case "challenging+":
        return wishlist.filter(
          (item) =>
            item.difficulty === "Challenging" ||
            item.difficulty === "Difficult" ||
            item.difficulty === "Extreme"
        );
      case "short":
        return wishlist.filter((item) => parseInt(item.duration) <= 10);
      default:
        return wishlist;
    }
  };

  const sortedAndFilteredWishlist = sortWishlist(filterWishlist(wishlist));

  const totalValue = wishlist.reduce((sum, item) => sum + item.price, 0);
  const totalSavings = wishlist.reduce(
    (sum, item) => sum + (item.originalPrice - item.price),
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 relative overflow-hidden mt-15">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-emerald-200/20 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-t from-amber-200/20 to-transparent rounded-full translate-x-48 translate-y-48"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Mountain className="w-12 h-12 text-emerald-300/40" />
      </div>
      <div className="absolute top-40 right-20 animate-float-delayed">
        <Heart className="w-10 h-10 text-amber-300/40" />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-amber-500 text-white px-4 py-2 rounded-full mb-6 shadow-lg shadow-emerald-500/30">
            <Sparkles className="w-6 h-6" />
            <span className="font-bold tracking-wider text-md">
              MY ADVENTURE WISHLIST
            </span>
            <Heart className="w-6 h-6 fill-white" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Dream{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-600">
              Adventures
            </span>{" "}
            Await
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-xl">
            Your curated collection of epic journeys. Save, compare, and plan
            your next great adventure.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Total Adventures */}
          <div className="bg-white/70 backdrop-blur-lg rounded-xl p-4 border-3 border-emerald-100 shadow-md flex flex-col items-center relative">
            {/* Icon */}
            <div className="absolute top-3 left-3 p-2 rounded-lg bg-emerald-100/50">
              <Globe className="w-5 h-5 text-emerald-500" />
            </div>
            {/* Content */}
            <h3 className="text-md font-semibold text-gray-700 mt-2">
              Total Adventures
            </h3>
            <div className="text-2xl font-bold text-emerald-600 mt-1">
              {wishlist.length}
            </div>
            <p className="text-sm text-gray-500 mt-1 text-center">
              Saved destinations
            </p>
          </div>

          {/* Total Value */}
          <div className="bg-white/70 backdrop-blur-lg rounded-lg p-4 border-3 border-amber-100 shadow-md flex flex-col items-center relative">
            <div className="absolute top-3 left-3 p-2 rounded-lg bg-amber-100/50">
              <TrendingUp className="w-5 h-5 text-amber-500" />
            </div>
            <h3 className="text-md font-semibold text-gray-700 mt-2">
              Total Value
            </h3>
            <div className="text-2xl font-bold text-amber-600 mt-1">
              ${totalValue.toLocaleString()}
            </div>
            <p className="text-sm text-gray-500 mt-1 text-center">
              Dream adventures worth
            </p>
          </div>

          {/* Total Savings */}
          <div className="bg-white/70 backdrop-blur-lg rounded-lg p-4 border-3 border-green-100 shadow-md flex flex-col items-center relative">
            <div className="absolute top-3 left-3 p-2 rounded-lg bg-green-100/50">
              <Star className="w-5 h-5 text-green-500" />
            </div>
            <h3 className="text-md font-semibold text-gray-700 mt-2">
              Total Savings
            </h3>
            <div className="text-2xl font-bold text-green-600 mt-1">
              ${totalSavings.toLocaleString()}
            </div>
            <p className="text-sm text-gray-500 mt-1 text-center">
              On early bird discounts
            </p>
          </div>
        </div>

        {/* Controls Bar */}
        {/* <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 border border-gray-200 shadow-lg mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Filter className="w-5 h-5 text-emerald-500" />
                Organize Your Adventures
              </h3>
              <div className="flex flex-wrap gap-4">
                <div>
                  <label className="text-sm text-gray-600 mb-2 block">Sort by</label>
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="added">Recently Added</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="difficulty">Difficulty Level</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-sm text-gray-600 mb-2 block">Filter by</label>
                  <select 
                    value={filterBy}
                    onChange={(e) => setFilterBy(e.target.value)}
                    className="bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="all">All Adventures</option>
                    <option value="featured">Featured Only</option>
                    <option value="under-2500">Under $2500</option>
                    <option value="challenging+">Challenging & Above</option>
                    <option value="short">Short Treks (≤10 days)</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={shareWishlist}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                <Share2 className="w-5 h-5" />
                Share List
              </button>
              {wishlist.length > 0 && (
                <button
                  onClick={removeAll}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                >
                  <Trash2 className="w-5 h-5" />
                  Clear All
                </button>
              )}
            </div>
          </div>
        </div> */}

        {/* Main Content */}
        {sortedAndFilteredWishlist.length === 0 ? (
          <div className="text-center py-20 bg-gradient-to-br from-white/80 to-emerald-50/80 backdrop-blur-lg rounded-3xl border-2 border-dashed border-emerald-200 shadow-xl">
            <Heart className="mx-auto w-24 h-24 text-amber-400/60 mb-6 animate-pulse" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your Adventure Wishlist Awaits
            </h2>
            <p className="text-gray-600 text-xl mb-10 max-w-2xl mx-auto">
              Start collecting your dream destinations. Save adventures that
              inspire you and plan your ultimate journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/treks"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
              >
                <Plane className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Explore Destinations
                <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>
              <button className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                <BookmarkPlus className="w-6 h-6" />
                View Popular Treks
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Wishlist Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {sortedAndFilteredWishlist.map((trek) => (
                <WishlistCard key={trek.id} trek={trek} onRemove={removeItem} />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Floating CTA */}
      {/* <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-gradient-to-r from-emerald-500 to-amber-500 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group">
          <Heart className="w-6 h-6 fill-white" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
            {wishlist.length}
          </span>
        </button>
      </div> */}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite 1.5s;
        }
      `}</style>
    </div>
  );
};

// Enhanced WishlistCard Component
// const WishlistCard = ({ trek, onRemove }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02]"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0">
//         <img
//           src={trek.image}
//           alt={trek.title}
//           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
//       </div>

//       {/* Card Content */}
//       <div className="relative z-10 h-full flex flex-col justify-end p-6 min-h-[500px]">
//         {/* Badges */}
//         <div className="flex gap-2 mb-4">
//           {trek.featured && (
//             <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-red-500 text-white text-xs font-bold rounded-full shadow-lg">
//               ⭐ FEATURED
//             </span>
//           )}
//           <span className="px-3 py-1 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white text-xs font-bold rounded-full shadow-lg">
//             {trek.difficulty.toUpperCase()}
//           </span>
//           {/* Corner Ribbon */}
// {trek.discount && (
//   <div className="absolute top-4 right-0 overflow-hidden w-28 h-28">
//     <div className="absolute bg-red-500 text-white font-bold text-xs uppercase px-3 py-1 rotate-45 shadow-lg"
//          style={{ top: '12px', right: '-40px' }}>
//       Save {trek.discount}%
//     </div>
//   </div>
// )}

//         </div>

//         {/* Title and Location */}
//         <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
//           {trek.title}
//         </h3>
//         <div className="flex items-center text-gray-300 mb-4">
//           <MapPin className="w-5 h-5 mr-2 text-amber-400" />
//           <span className="font-medium">{trek.location}</span>
//         </div>

//         {/* Quick Info */}
//         <div className="grid grid-cols-2 gap-4 mb-6">
//           <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3">
//             <div className="flex items-center mb-1">
//               <Calendar className="w-4 h-4 text-emerald-400 mr-2" />
//               <span className="text-xs text-gray-300">DURATION</span>
//             </div>
//             <div className="text-white font-bold">{trek.duration}</div>
//           </div>
//           <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3">
//             <div className="flex items-center mb-1">
//               <Users className="w-4 h-4 text-blue-400 mr-2" />
//               <span className="text-xs text-gray-300">GROUP</span>
//             </div>
//             <div className="text-white font-bold">{trek.groupSize}</div>
//           </div>
//         </div>

//         {/* Price and Actions */}
//         <div className="flex items-center justify-between pt-6 border-t border-gray-700/50">
//           <div>
//             <div className="text-sm text-gray-400">FROM</div>
//             <div className="flex items-baseline">
//               <span className="text-3xl font-bold text-white">
//                 ${trek.price.toLocaleString()}
//               </span>
//               {trek.originalPrice && (
//                 <span className="text-lg text-gray-400 line-through ml-2">
//                   ${trek.originalPrice.toLocaleString()}
//                 </span>
//               )}
//             </div>
//           </div>
//           <div className="flex gap-2">
//             <button
//               onClick={() => onRemove(trek.id)}
//               className={`p-3 rounded-xl transition-all duration-300 ${
//                 isHovered
//                   ? 'bg-red-500/20 border border-red-500/30'
//                   : 'bg-black/40 border border-gray-700'
//               }`}
//               title="Remove from wishlist"
//             >
//               <Heart className="w-5 h-5 text-red-500 fill-red-500" />
//             </button>
//             <button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl">
//               Book Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Hover Effects */}
//       <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
//         <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 via-orange-500/5 to-transparent"></div>
//       </div>
//     </div>
//   );
// };

export default WishlistPage;

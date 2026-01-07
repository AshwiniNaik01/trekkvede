// // import { Phone, Share2, MapPin, Star } from "lucide-react";
// // import React from "react";

// // const TrekIntroCard = () => {
// //   return (
// //     <div className="bg-white">
// //       <div className="max-w-7xl mx-auto px-6 py-6">
// //         <div className="flex flex-col lg:flex-row justify-between gap-6">
// //           {/* LEFT */}
// //           <div>
// //             <h1 className="text-3xl font-bold text-gray-900">Brahmatal Trek</h1>

// //             <p className="text-gray-500 mt-1">
// //               Winter Trek · Snow Trek · Uttarakhand
// //             </p>

// //             <p className="text-sm text-gray-500 mt-1">
// //               Lohajung Base Camp, Chamoli, Uttarakhand
// //             </p>

// //             <div className="flex flex-wrap items-center gap-4 mt-3 text-sm">
// //               <span className="text-green-600 font-semibold">
// //                 Best Season · Dec – Mar
// //               </span>
// //               <span className="text-gray-600">Duration · 6 Days</span>
// //               <span className="flex items-center gap-1 text-red-500">
// //                 <Phone size={15} /> +91 9356412002
// //               </span>
// //             </div>
// //           </div>

// //           {/* RIGHT – RATINGS */}
// //           <div className="flex gap-3">
// //             <div className="bg-green-600 text-white px-3 py-1.5 rounded-lg flex flex-col items-center justify-center">
// //               <div className="flex items-center justify-center gap-1 font-semibold text-sm">
// //                 4.8 <Star size={14} fill="white" />
// //               </div>
// //               <p className="text-xs mt-0">120 Reviews</p>
// //             </div>
// //             <div className="bg-green-600 text-white px-3 py-1.5 rounded-lg flex flex-col items-center justify-center">
// //               <div className="flex items-center justify-center gap-1 font-semibold text-sm">
// //                 4.7 <Star size={14} fill="white" />
// //               </div>
// //               <p className="text-xs mt-0">Safety</p>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="flex flex-wrap gap-3 mt-5">
// //           <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100">
// //             <MapPin size={16} /> Trek Route
// //           </button>

// //           <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100">
// //             <Share2 size={16} /> Group Session
// //           </button>

// //           <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
// //             View Fees
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default TrekIntroCard;



// import React from "react";
// import { Phone, Share2, MapPin, Star } from "lucide-react";

// const TrekIntroCard = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col lg:flex-row justify-between gap-6">
//       {/* LEFT */}
//       <div>
//         <h1 className="text-3xl font-bold text-gray-900">Brahmatal Trek</h1>
//         <p className="text-gray-500 mt-1">Winter Trek · Snow Trek · Uttarakhand</p>
//         <p className="text-sm text-gray-500 mt-1">
//           Lohajung Base Camp, Chamoli, Uttarakhand
//         </p>

//         <div className="flex flex-wrap items-center gap-4 mt-3 text-sm">
//           <span className="text-green-600 font-semibold">Best Season · Dec – Mar</span>
//           <span className="text-gray-600">Duration · 6 Days</span>
//           <span className="flex items-center gap-1 text-red-500">
//             <Phone size={15} /> +91 9356412002
//           </span>
//         </div>
//       </div>

//       {/* RIGHT RATINGS */}
//       <div className="flex gap-3">
//         <div className="bg-green-600 text-white px-3 py-1.5 rounded-lg flex flex-col items-center justify-center">
//           <div className="flex items-center justify-center gap-1 font-semibold text-sm">
//             4.8 <Star size={14} fill="white" />
//           </div>
//           <p className="text-xs mt-0">120 Reviews</p>
//         </div>
//         <div className="bg-green-600 text-white px-3 py-1.5 rounded-lg flex flex-col items-center justify-center">
//           <div className="flex items-center justify-center gap-1 font-semibold text-sm">
//             4.7 <Star size={14} fill="white" />
//           </div>
//           <p className="text-xs mt-0">Safety</p>
//         </div>
//       </div>

//       {/* ACTION BUTTONS */}
//       <div className="flex flex-wrap gap-3 mt-5 lg:mt-0">
//         <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100">
//           <MapPin size={16} /> Trek Route
//         </button>
//         <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100">
//           <Share2 size={16} /> Group Session
//         </button>
//         <button className="px-6 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600">
//           View Fees
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TrekIntroCard;


import { Phone, Share2, MapPin, Star, ChevronRight, Bookmark, ArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const TrekIntroCard = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-500 hover:text-emerald-600 mb-4 transition-colors font-medium text-sm group"
        >
          <div className="p-1 rounded-full bg-gray-100 group-hover:bg-emerald-100 transition-colors">
            <ArrowLeft size={16} />
          </div>
          Back
        </button>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          {/* Left Section */}
          <div className="flex-1">
            {/* Breadcrumb */}
            {/* <div className="flex items-center text-sm text-gray-500 mb-2">
              <span className="hover:text-red-600 cursor-pointer">Home</span>
              <ChevronRight size={14} className="mx-2" />
              <span className="hover:text-red-600 cursor-pointer">Treks</span>
              <ChevronRight size={14} className="mx-2" />
              <span className="hover:text-red-600 cursor-pointer">Uttarakhand</span>
              <ChevronRight size={14} className="mx-2" />
              <span className="font-medium text-gray-700">Brahmatal Trek</span>
            </div> */}

            {/* Main Title */}
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Brahmatal Trek</h1>
                <p className="text-gray-500 mt-1 flex items-center gap-2">
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">Winter Trek</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">Snow Trek</span>
                  <span className="text-gray-600">• Uttarakhand</span>
                </p>
                <p className="text-sm text-gray-500 mt-2 flex items-center">
                  <MapPin size={14} className="mr-1" />
                  Lohajung Base Camp, Chamoli, Uttarakhand
                </p>
              </div>
              {/* <button className="hidden lg:flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-red-600">
                <Bookmark size={18} />
                <span className="text-sm">Save</span>
              </button> */}
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap items-center gap-4 mt-4 text-sm">
              <span className="text-green-600 font-semibold bg-green-50 px-3 py-1 rounded-full">
                🗓️ Best Season • Dec – Mar
              </span>
              <span className="text-gray-600 bg-gray-50 px-3 py-1 rounded-full">
                ⏱️ Duration • 6 Days
              </span>
              <span className="flex items-center gap-1 text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                <Phone size={14} /> +91 XXXXX XXXXX
              </span>
              <span className="text-gray-600 bg-gray-50 px-3 py-1 rounded-full">
                🚶‍♂️ Difficulty • Easy-Moderate
              </span>
            </div>
          </div>

          {/* Right Section - Ratings */}
          <div className="flex gap-3">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white px-4 py-3 rounded-xl flex flex-col items-center justify-center shadow-lg">
              <div className="flex items-center justify-center gap-1 font-bold text-lg">
                4.8 <Star size={16} fill="white" />
              </div>
              <p className="text-xs mt-1 opacity-90">120 Reviews</p>
            </div>
            {/* <div className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white px-4 py-3 rounded-xl flex flex-col items-center justify-center shadow-lg">
              <div className="flex items-center justify-center gap-1 font-bold text-lg">
                4.7 <Star size={16} fill="white" />
              </div>
              <p className="text-xs mt-1 opacity-90">Safety Score</p>
            </div> */}
          </div>
        </div>

        {/* Action Buttons */}
        {/* <div className="flex flex-wrap items-center gap-3 mt-6 pt-4 border-t border-gray-100"> */}
        {/* <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-red-200 hover:text-red-600 transition-all">
            <MapPin size={16} /> <span className="font-medium">Trek Route</span>
          </button> */}
        {/* <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-blue-200 hover:text-blue-600 transition-all">
            <Share2 size={16} /> <span className="font-medium">Share Trek</span>
          </button> */}
        {/* <button className="flex items-center gap-2 px-4 py-2.5 bg-red-50 border border-red-200 text-red-600 rounded-lg hover:bg-red-100 font-medium">
            ⚡ View All Dates
          </button> */}
        {/* <button className="ml-auto flex items-center gap-2 px-4 py-2.5 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 text-sm">
            <span>🔔</span> Notify Me
          </button> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default TrekIntroCard;
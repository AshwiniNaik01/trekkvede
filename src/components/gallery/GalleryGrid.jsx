// import React from "react";
// import { Maximize2, MapPin, Calendar } from "lucide-react";

// const GalleryGrid = ({ images }) => {
//     return (
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
//             {images.map((img, index) => (
//                 <div
//                     key={img.id}
//                     className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] transition-all duration-700 hover:-translate-y-2"
//                 >
//                     {/* Image Container */}
//                     <div className="relative aspect-[4/5] overflow-hidden">
//                         <img
//                             src={img.url}
//                             alt={img.title}
//                             className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
//                         />
//                         {/* Overlay */}
//                         <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
//                             <div className="space-y-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
//                                 <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400">
//                                     <MapPin size={12} />
//                                     {img.region}
//                                 </div>
//                                 <h3 className="text-2xl font-black leading-tight">
//                                     {img.title}
//                                 </h3>
//                                 <div className="flex items-center gap-3 text-xs opacity-80">
//                                     <span className="flex items-center gap-1">
//                                         <Calendar size={12} /> {img.month} {img.year}
//                                     </span>
//                                     <span className="px-2 py-0.5 bg-white/20 rounded-md backdrop-blur-md">
//                                         {img.experience}
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* View Button */}
//                         <button className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 hover:bg-emerald-500 transition-all duration-300 transform scale-75 group-hover:scale-100">
//                             <Maximize2 size={20} />
//                         </button>
//                     </div>

//                     {/* Info Section (Visible on Hover/Light variant) */}
//                     <div className="p-6 bg-white border-t border-gray-50 flex items-center justify-between">
//                         <div className="space-y-1">
//                             <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">{img.season} Season</p>
//                             <h4 className="font-bold text-gray-900 text-sm truncate max-w-[150px]">{img.title}</h4>
//                         </div>
//                         <div className="text-[10px] font-black text-gray-400 bg-gray-50 px-2 py-1 rounded-md">
//                             {img.year}
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default GalleryGrid;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Maximize2, MapPin, Calendar } from "lucide-react";
import { API_BASE_URL, DIR } from "../../config/constants"; // Make sure DIR.Gallery points to gallery folder

const GalleryGrid = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch gallery from API
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_BASE_URL}/api/trekGallery`);
        if (
          response.data &&
          response.data.message &&
          response.data.message.length > 0
        ) {
          // Flatten gallery array if multiple gallery objects
          const galleryItems = response.data.message.flatMap((g) =>
            g.gallery.map((item, index) => ({
              id: item._id + index, // unique key
              url: `${DIR.TrekGalleryImage}${item.photo}`,
              title: item.title,
              month: item.month,
              year: item.year,
              experience: item.experience,
              season: item.season,
              region: item.region,
            }))
          );
          setImages(galleryItems);
        } else {
          setError("No gallery items found");
        }
      } catch (err) {
        console.error(err);
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  if (loading)
    return <p className="text-center text-gray-500">Loading gallery...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {images.map((img) => (
        <div
          key={img.id}
          className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] transition-all duration-700 hover:-translate-y-2"
        >
          {/* Image Container */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={img.url}
              alt={img.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
              <div className="space-y-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400">
                  <MapPin size={12} />
                  {img.region}
                </div>
                <h3 className="text-2xl font-black leading-tight">
                  {img.title}
                </h3>
                <div className="flex items-center gap-3 text-xs opacity-80">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {img.month} {img.year}
                  </span>
                  <span className="px-2 py-0.5 bg-white/20 rounded-md backdrop-blur-md">
                    {img.experience}
                  </span>
                </div>
              </div>
            </div>

            {/* View Button */}
            <button className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 hover:bg-emerald-500 transition-all duration-300 transform scale-75 group-hover:scale-100">
              <Maximize2 size={20} />
            </button>
          </div>

          {/* Info Section */}
          <div className="p-6 bg-white border-t border-gray-50 flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">
                {img.season} Season
              </p>
              <h4 className="font-bold text-gray-900 text-sm truncate max-w-[150px]">
                {img.title}
              </h4>
            </div>
            <div className="text-[10px] font-black text-gray-400 bg-gray-50 px-2 py-1 rounded-md">
              {img.year}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;

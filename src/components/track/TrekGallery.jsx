import React from "react";
import { Link } from "react-router-dom";
import { Image as ImageIcon, ArrowRight, Sparkles } from "lucide-react";

const featuredImages = [
  {
    url: "https://images.prismic.io/indiahike/f0e8c174-54f0-47db-97fe-b19f90bb47ad_Lohajung_Brahmatal_Drone_shot_Vignesh2.jpg",
    title: "Drone View of Lohajung",
    tag: "Aerial",
  },
  {
    url: "https://images.prismic.io/indiahike/37f413f1-5df0-46dc-8a01-43539aeb1d9f_Brahmatal-Trek_Guhanesan-Sivalingam_Sunset-View-from-Tilandi-Campsite_1_.jpg",
    title: "Sunset at Tilandi",
    tag: "Peak",
  },
  {
    url: "https://images.prismic.io/indiahike/d7b174bc-af90-4c41-89fa-4a55c8d5c76c_Brahmatal_BT_Indiahikes_VishwajeetChavan_brahmatalcampsite_campsite_winter_.jpg",
    title: "Brahmatal Campsite",
    tag: "Camp",
  },
  {
    url: "https://images.prismic.io/indiahike/43a8c497-80a5-46c7-9ca7-2b1c5020acfb_Brahmatal+-+Khorurai+-+Forest+-+Snow+-+Winter+-+Abhishek+M+-+++Indiahikes.jpg",
    title: "Forest Trails in Snow",
    tag: "Frozen",
  },
];

const TrekGallery = () => {
  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row items-end justify-between gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-widest border border-emerald-100">
            <Sparkles size={12} className="animate-pulse" />
            Visual Journey
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
            Captured <span className="text-emerald-600">Moments</span>
          </h2>
          <p className="text-gray-500 max-w-lg font-medium">
            Explore the breathtaking beauty of the Brahmatal trek through the eyes of our explorers.
          </p>
        </div>

        <Link
          to="/trek-gallery"
          className="group flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-2xl font-black text-sm hover:bg-emerald-600 transition-all duration-300 shadow-xl hover:shadow-emerald-200"
        >
          View Full Gallery
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Featured Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredImages.map((img, index) => (
          <div
            key={index}
            className="group relative h-80 rounded-[32px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)] transition-all duration-700 hover:-translate-y-2"
          >
            <img
              src={img.url}
              alt={img.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-1">{img.tag}</span>
              <h4 className="text-white font-bold text-lg leading-tight">{img.title}</h4>
            </div>

            {/* Corner Accent */}
            <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
              <ImageIcon size={18} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrekGallery;

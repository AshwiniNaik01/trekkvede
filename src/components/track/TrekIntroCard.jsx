import { Phone, Share2, MapPin, Star } from "lucide-react";
import React from "react";

const TrekIntroCard = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          {/* LEFT */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Brahmatal Trek</h1>

            <p className="text-gray-500 mt-1">
              Winter Trek · Snow Trek · Uttarakhand
            </p>

            <p className="text-sm text-gray-500 mt-1">
              Lohajung Base Camp, Chamoli, Uttarakhand
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-3 text-sm">
              <span className="text-green-600 font-semibold">
                Best Season · Dec – Mar
              </span>
              <span className="text-gray-600">Duration · 6 Days</span>
              <span className="flex items-center gap-1 text-red-500">
                <Phone size={15} /> +91 9356412002
              </span>
            </div>
          </div>

          {/* RIGHT – RATINGS */}
          <div className="flex gap-3">
            <div className="bg-green-600 text-white px-3 py-1.5 rounded-lg flex flex-col items-center justify-center">
              <div className="flex items-center justify-center gap-1 font-semibold text-sm">
                4.8 <Star size={14} fill="white" />
              </div>
              <p className="text-xs mt-0">120 Reviews</p>
            </div>
            <div className="bg-green-600 text-white px-3 py-1.5 rounded-lg flex flex-col items-center justify-center">
              <div className="flex items-center justify-center gap-1 font-semibold text-sm">
                4.7 <Star size={14} fill="white" />
              </div>
              <p className="text-xs mt-0">Safety</p>
            </div>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-wrap gap-3 mt-5">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100">
            <MapPin size={16} /> Trek Route
          </button>

          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100">
            <Share2 size={16} /> Group Session
          </button>

          <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
            View Fees
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrekIntroCard;

import React, { useState } from "react";
import TrekInfoCard from "./TrekInfoCard";
import TrekPageWithFees from "./TrekDescription";
import TrackReview from "./TrackReview";
import TrekGallery from "./TrekGallery";

const tabs = ["Overview", "Fees", "Reviews", "Photos"];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabComponents = {
    Overview: <TrekInfoCard />,
    Fees: <TrekPageWithFees />,
    Reviews: <TrackReview />,
    Photos: <TrekGallery />,
  };

  return (
    <>
      {/* TAB HEADER */}
      <div className="max-w-7xl mx-auto px-6 ">
        <div className="flex gap-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative py-4 text-sm font-semibold transition ${
                activeTab === tab
                  ? "text-red-500"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute left-0 -bottom-[1px] h-[2px] w-full bg-red-500 rounded-full"></span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* TAB CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-10 ">
        {tabComponents[activeTab]}
      </div>
    </>
  );
};

export default Tabs;

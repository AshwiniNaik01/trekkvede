import React from "react";
import TrekIntroCard from "../components/track/TrekIntroCard";
import TrekInfoCard from "../components/track/TrekInfoCard";
import TrekPageWithFees from "../components/track/TrekDescription";
import AddSiderForm from "../components/track/AddSiderForm";
import TrackReview from "../components/track/TrackReview";
import TrekGallery from "../components/track/TrekGallery";
import Tabs from "../components/track/Tabs";
const TrackPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen overflow-visible">
      {/* INTRO – ALWAYS STICKY */}
      <div className="sticky top-0 z-50 bg-white">
        <TrekIntroCard />
      </div>

      {/* SLIDER – NORMAL SCROLL */}
      <div className="relative">
        <AddSiderForm />
      </div>

      {/* TABS – STICKY */}
      <div className="sticky top-[96px] z-40 bg-white">
        <Tabs />
      </div>
    </div>
  );
};

export default TrackPage;

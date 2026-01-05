import React from "react";
import TrekInfoCard from "../components/track/TrekInfoCard";
import TrekPageWithFees from "../components/track/TrekDescription";
import AddSiderForm from "../components/track/AddSiderForm";
import TrackReview from "../components/track/TrackReview";
import TrekGallery from "../components/track/TrekGallery";
import TreksByCategory from "../components/track/TreksCategory";
const TrackPage = () => {
  return (
    <div className="track-page">
      <AddSiderForm />
      <TrekInfoCard />
      <TrekPageWithFees />
      <TrackReview />
      <TrekGallery />
      <TreksByCategory />
    </div>
  );
};

export default TrackPage;

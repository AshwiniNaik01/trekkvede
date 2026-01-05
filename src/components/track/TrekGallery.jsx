import React, { useState } from "react";

const winterImages = [
  "https://images.prismic.io/indiahike/f0e8c174-54f0-47db-97fe-b19f90bb47ad_Lohajung_Brahmatal_Drone_shot_Vignesh2.jpg",
  "https://images.prismic.io/indiahike/37f413f1-5df0-46dc-8a01-43539aeb1d9f_Brahmatal-Trek_Guhanesan-Sivalingam_Sunset-View-from-Tilandi-Campsite_1_.jpg",
  "https://images.prismic.io/indiahike/d7b174bc-af90-4c41-89fa-4a55c8d5c76c_Brahmatal_BT_Indiahikes_VishwajeetChavan_brahmatalcampsite_campsite_winter_.jpg",
  "https://images.prismic.io/indiahike/43a8c497-80a5-46c7-9ca7-2b1c5020acfb_Brahmatal+-+Khorurai+-+Forest+-+Snow+-+Winter+-+Abhishek+M+-+++Indiahikes.jpg",
  "https://images.prismic.io/indiahike/638e8e05-3ed7-4b9f-a72b-20d922a0ed37_Brahmatal+trek_Winter_Indiahikes.jpg",
  "https://images.prismic.io/indiahike/ff51fb25-f486-434c-971d-5b6d782be51f_Brahmatal_BT_Indiahikes-Vishwas+Krishnamurthy-trekkers+at+Bekaltal.jpg",
  "https://images.prismic.io/indiahike/d24744f4-f638-4da6-8ecd-512da3462e41_Brahmatal_BT_Indiahikes_Pratik+Mankawde_Tilandi+Campsite_Night+sky_.jpg",
  "https://images.prismic.io/indiahike/d64aec46-0b26-4359-8bbc-9b417d1d33a8_Brahmatal_BT_Divya+Ramakrishna_trailwithtrekkers_route_summit_winter_.jpg",
];

const springImages = [
  "https://images.unsplash.com/photo-1521295121783-8a321d551ad2",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
  "https://images.unsplash.com/photo-1499346030926-9a72daac6c63",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  "https://images.unsplash.com/photo-1521295121783-8a321d551ad2",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
  "https://images.unsplash.com/photo-1499346030926-9a72daac6c63",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
];

const TrekGallery = () => {
  const [activeTab, setActiveTab] = useState("winter");
  const [currentPage, setCurrentPage] = useState(1);

  const images = activeTab === "winter" ? winterImages : springImages;
  const imagesPerPage = 6;
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const displayedImages = images.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage
  );

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1); // reset to first page
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold font-serif text-gray-900">
          Brahmatal <span className="text-emerald-600">Trek Gallery</span>
        </h2>
        <div className="mx-auto mt-5 h-1 w-28 bg-gradient-to-r from-emerald-400 to-sky-400 rounded-full" />
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-12 ">
        <button
          onClick={() => handleTabChange("winter")}
          className={`px-6 py-3 font-semibold transition
            ${
              activeTab === "winter"
                ? "border-b-4 border-emerald-500 text-emerald-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
        >
          Winter (Dec–Feb)
        </button>

        <button
          onClick={() => handleTabChange("spring")}
          className={`px-6 py-3 font-semibold transition
            ${
              activeTab === "spring"
                ? "border-b-4 border-emerald-500 text-emerald-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
        >
          Spring (Mar–Apr)
        </button>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {displayedImages.map((img, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src={img}
              alt="Brahmatal Trek"
              className="h-56 w-full object-cover transform group-hover:scale-110 transition duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 mt-10 font-semibold text-gray-700">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className={`px-3 py-1 rounded-full border hover:bg-gray-100 transition ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            ‹ Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded-full border transition ${
                currentPage === page
                  ? "bg-emerald-500 text-white border-emerald-500"
                  : "hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className={`px-3 py-1 rounded-full border hover:bg-gray-100 transition ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Next ›
          </button>
        </div>
      )}
    </section>
  );
};

export default TrekGallery;

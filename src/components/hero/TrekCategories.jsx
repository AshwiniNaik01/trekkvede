import React, { useState } from "react";

const winterImages = [
  "https://images.prismic.io/indiahike/f0e8c174-54f0-47db-97fe-b19f90bb47ad_Lohajung_Brahmatal_Drone_shot_Vignesh2.jpg",
  "https://images.prismic.io/indiahike/37f413f1-5df0-46dc-8a01-43539aeb1d9f_Brahmatal-Trek_Guhanesan-Sivalingam_Sunset-View-from-Tilandi-Campsite_1_.jpg",
  "https://images.prismic.io/indiahike/d7b174bc-af90-4c41-89fa-4a55c8d5c76c_Brahmatal_BT_Indiahikes_VishwajeetChavan_brahmatalcampsite_campsite_winter_.jpg",
];

const springImages = [
  "https://images.unsplash.com/photo-1521295121783-8a321d551ad2",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  "https://images.unsplash.com/photo-1521295121783-8a321d551ad2",
];

const categories = [
  { title: "Winter", images: winterImages },
  { title: "Spring", images: springImages },
  {
    title: "Treks by Month",
    items: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    links: [
      "/tag/january",
      "/tag/february",
      "/tag/march",
      "/tag/april",
      "/tag/may",
      "/tag/june",
      "/tag/july",
      "/tag/august",
      "/tag/september",
      "/tag/october",
      "/tag/november",
      "/tag/december",
    ],
  },
  {
    title: "Treks by Difficulty",
    items: [
      "Easy",
      "Easy - Moderate",
      "Moderate",
      "Moderate - Difficult",
      "Difficult",
    ],
    links: [
      "/tag/easy",
      "/tag/easy-moderate",
      "/tag/moderate",
      "/tag/moderate-difficult",
      "/tag/difficult",
    ],
  },
  // Add other categories similarly...
];

const TrekGallery = () => {
  const [activeTab, setActiveTab] = useState(categories[0].title);
  const [currentPage, setCurrentPage] = useState(1);

  const activeCategory = categories.find((cat) => cat.title === activeTab);

  // Images for Winter/Spring or empty array if category has none
  const images = activeCategory.images || [];
  const imagesPerPage = 6;
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const displayedImages = images.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage
  );

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1); // reset pagination
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

      {/* Dynamic Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {categories.map((cat) => (
          <button
            key={cat.title}
            onClick={() => handleTabChange(cat.title)}
            className={`px-6 py-3 font-semibold transition
              ${
                activeTab === cat.title
                  ? "border-b-4 border-emerald-500 text-emerald-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Subcategories if available */}
      {activeCategory.items && (
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {activeCategory.items.map((item, index) => (
            <a
              key={index}
              href={activeCategory.links ? activeCategory.links[index] : "#"}
              className="px-4 py-2 bg-gray-100 hover:bg-emerald-100 rounded-full text-gray-700 font-medium transition"
            >
              {item}
            </a>
          ))}
        </div>
      )}

      {/* Image Grid */}
      {images.length > 0 ? (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {displayedImages.map((img, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg"
              >
                <img
                  src={img}
                  alt={activeTab}
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

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
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
                )
              )}

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                className={`px-3 py-1 rounded-full border hover:bg-gray-100 transition ${
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                Next ›
              </button>
            </div>
          )}
        </>
      ) : (
        <p className="text-center text-gray-500 mt-10">
          No images available for this category.
        </p>
      )}
    </section>
  );
};

export default TrekGallery;

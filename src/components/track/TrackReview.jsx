import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const reviews = [
  {
    name: "SANJAY SHARMA",
    role: "Chartered Accountant in an MNC | Associate Finance Director | Loves Travelling and Educating people on Financial wealth Cum Tax literacy",
    title: "Brahmatal Trek – A Journey Beyond Words",
    desc: "One more year and one more trek - This time it's Brahmatal Trek – A Journey Beyond Words. I am writing to express my heartfelt gratitude and appreciation for the exceptional experience your team prov...",
  },
  {
    name: "HRITVI BALAR",
    role: "Group of 28th December 2024",
    title:
      "I feel deeply connected to nature and the mountains, and it’s hard to let go of that peace.",
    desc: "I just wanted to reach out and thank you again for all the help you provided during my trek. The last-minute accommodations were a bit of a rush, but I'm incredibly grateful it al...",
  },
  {
    name: "PUNEET K",
    role: "Group of 5th January 2025 | Professional at Mumbai Earthmoving Industry | Linguist | Marathoner",
    title: "I met trek friends who came close to my heart.",
    desc: "Wow! What a roller coaster ride of mixed emotions and memories with my colleagues & trek buddies. The memories from my last trek are still afresh and unforgettable...",
  },
  {
    name: "DR. SUNAY N. BHAT",
    role: "Surgical Gastroenterologist, Coimbatore | Brahmatal trek | 23rd December",
    title:
      "An experience beyond words — one that must be felt to be understood.",
    desc: "I was fortunate to share my first trek in years with an amazing group — a perfect blend of youthful energy and experienced trekkers. The snow views were breathtaking...",
  },
];

const TrackReview = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-12">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold font-serif text-gray-900">
          Trekker <span className="text-emerald-600">Reviews</span>
        </h2>
        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400"></div>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Real stories from trekkers who experienced the magic of Brahmatal
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="group relative bg-white/30 backdrop-blur-xl 
                       border border-emerald-200
                       rounded-3xl p-6 shadow-md
                       hover:shadow-2xl hover:-translate-y-3
                       transition-all duration-300"
          >
            {/* Quote Icon */}
            <FaQuoteLeft className="text-emerald-400 text-3xl mb-4 opacity-80" />

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-900 leading-snug mb-3">
              {review.title}
            </h3>

            {/* Description */}
            <p className="text-gray-700 text-sm leading-relaxed mb-5">
              {review.desc}
              <span className="text-emerald-600 font-semibold cursor-pointer ml-1 hover:underline">
                Read More
              </span>
            </p>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent mb-4"></div>

            {/* Name */}
            <h4 className="font-bold text-gray-800 uppercase text-sm tracking-wide">
              {review.name}
            </h4>

            {/* Role */}
            <p className="text-xs text-gray-500 leading-relaxed mt-1">
              {review.role}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-16">
        <button className="px-4 py-2 text-sm rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 transition">
          ‹ Previous
        </button>

        <button className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-sky-500 text-white font-bold shadow-md">
          1
        </button>

        <button className="w-10 h-10 rounded-full border border-emerald-400 text-emerald-600 font-semibold hover:bg-emerald-50 transition">
          2
        </button>

        <button className="px-4 py-2 text-sm rounded-full text-emerald-600 font-semibold hover:underline">
          Next ›
        </button>
      </div>
    </section>
  );
};

export default TrackReview;
